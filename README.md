# Next.js + Supabase SaaS Dashboard

A production-ready demo application built with **Next.js App Router**, focused on:
- server-first architecture
- authentication and session handling
- protected routes
- Supabase integration (Auth + Database)
- SEO and rendering strategies

This project serves as a **realistic example of a modern Next.js application**, not a specific business product.

---

## 🎯 Project Goal

The goal of this application is to demonstrate:

- Next.js **App Router** architecture
- **Server Components** as the default rendering model
- Authentication without client-side auth logic
- Proper **cookie and session management**
- A protected dashboard backed by a database
- SEO, SSR, SSG, and ISR use cases
- A clean, scalable, production-ready project structure

The application is designed as a **SaaS dashboard demo** that looks and behaves like a real-world production app.

---

## 🧩 Functional Overview

### Public Area (Unauthenticated)
- Landing page
- Pricing page
- Docs page (SSG / ISR example)

Public pages are:
- SEO-friendly
- indexable
- server-rendered

---

### Authentication
The application uses **Supabase Auth** for:
- email/password signup and login
- logout
- password reset
- OAuth / magic link (prepared via a callback route)

The authentication flow is **server-first**:
- login and signup are handled via **server actions**
- session cookies are set on the server
- the client never decides authentication state

---

### Dashboard (Protected Area)
After signing in, users access the dashboard:

- The dashboard is fully protected
- Authentication checks are performed:
    - in **middleware** (before rendering)
    - in the **dashboard layout** (server-side gate)
- The dashboard uses a sidebar + topbar layout
- Basic user information is displayed

---

### Projects Module (CRUD Example)

The dashboard includes a simple **Projects** module:

- Users can:
    - view a list of their projects
    - create a new project
    - edit an existing project
    - delete a project
- Each project belongs to exactly one user
- Data is stored in the Supabase database
- Security is enforced using **Row Level Security (RLS)**

All CRUD operations are performed:
- server-side
- via server actions and server queries

---

## 🏗️ Technical Architecture

### Frontend
- Next.js (App Router)
- TypeScript (strict mode)
- Server Components by default
- Client Components only for UI interactions
- Tailwind CSS
- shadcn/ui component system

---

### Backend
- Supabase
    - Auth (email/password, reset, OAuth)
    - PostgreSQL database
    - Row Level Security

---

### Session and Cookies
- Sessions are stored in **httpOnly cookies**
- Middleware:
    - refreshes the session
    - controls access to protected routes
- Server Components can directly access the authenticated user
- Logout clears the session server-side

---

### SEO and Rendering
- Public pages:
    - SSG or SSR
- Dashboard:
    - server-rendered
    - excluded from search engine indexing
- Metadata defined per route
- Automatically generated:
    - `sitemap.xml`
    - `robots.txt`
- ISR example included on a public page

