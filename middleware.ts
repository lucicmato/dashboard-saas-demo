import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { createClient } from '@/utils/supabase/client';

export async function middleware(req: NextRequest) {
  const { pathname, searchParams } = req.nextUrl;
  const accessToken = req.cookies.get('sb-access-token')?.value;

  console.log('Middleware triggered for path:', pathname);
  console.log('accessToken', accessToken);

  const supabase = createClient();

  if (accessToken) {
    try {
      // Validate the session
      const { data: session, error } = await supabase.auth.getSession();

      if (error) {
        console.log('Session validation error:', error.message);

        // Attempt to refresh the session
        const { data: refreshedSession, error: refreshError } = await supabase.auth.refreshSession();

        if (refreshError) {
          console.log('Session refresh failed:', refreshError.message);
          const redirectUrl = new URL('/login', req.url);
          redirectUrl.searchParams.set('next', pathname + searchParams.toString());
          return NextResponse.redirect(redirectUrl);
        }

        console.log('Session refreshed successfully:', refreshedSession);
      } else {
        console.log('Session is valid:', session);
      }
    } catch (err) {
      console.error('Unexpected error during session handling:', err);
    }
  }

  // Protect `/dashboard/*` routes
  if (pathname.startsWith('/dashboard')) {
    if (!accessToken) {
      const redirectUrl = new URL('/login', req.url);
      redirectUrl.searchParams.set('next', pathname + searchParams.toString());
      return NextResponse.redirect(redirectUrl);
    }
  }

  // Redirect authenticated users from `/login` to `/dashboard`
  if (pathname === '/login' && accessToken) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Apply middleware to specific routes
export const config = {
  matcher: ['/dashboard/:path*', '/login'],
};
