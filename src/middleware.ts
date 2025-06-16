// src/middleware.ts
import NextAuth from "next-auth";
import { authConfig } from "./auth.config";

const { auth } = NextAuth(authConfig);

export default auth((req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  // If the user is not logged in and trying to access protected route
  if (!isLoggedIn && nextUrl.pathname.startsWith('/actions')) {
    return Response.redirect(new URL('/auth/signin', nextUrl));
  }
  
  // If the user is logged in and trying to access auth pages
  if (isLoggedIn && (nextUrl.pathname.startsWith('/auth/signin') || nextUrl.pathname.startsWith('/auth/signup'))) {
    return Response.redirect(new URL('/actions', nextUrl));
  }

  return;
});

export const config = {
  matcher: ['/actions/:path*', '/auth/signin', '/auth/signup']
};