import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export default clerkMiddleware((_, req) => {
  const pathname = req.nextUrl.pathname;

  if (pathname === "/checkout/success") {
    return NextResponse.next();
  }

  const referer = req.headers.get("referer") ?? "";
  const isShopifyReferer = /shopify\.com|myshopify\.com/i.test(referer);
  const hasCartCookie = Boolean(req.cookies.get("cartId")?.value);

  if (isShopifyReferer && hasCartCookie) {
    const url = req.nextUrl.clone();
    url.pathname = "/checkout/success";
    url.search = "";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};