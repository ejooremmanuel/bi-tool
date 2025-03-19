import { withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";


// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

export default withAuth({
  pages: {
    signOut: "/login",
    signIn: "/login", // Redirect unauthenticated users
  },
});

export const config = {
  matcher: ["/dashboard/:path*"], // Protect all dashboard subroutes
  exclude: ["/api/:path*"], // Exclude API routes
};
