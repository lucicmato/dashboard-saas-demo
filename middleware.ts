import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log('uso middleware');
  const { pathname, searchParams } = req.nextUrl;
  const accessToken = req.cookies.get('sb-access-token')?.value;

  console.log('Middleware triggered for path:', pathname);
  console.log('accessToken', accessToken);

  // Refresh session logic (example: check token validity)
  if (accessToken) {
    // Optionally, validate or refresh the token here
    // For example, call Supabase's `auth.getUser()` or similar
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
