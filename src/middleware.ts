import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-vercel-protection-bypass', 'true');
  
  const url = new URL(request.url);
  const protectionBypass = url.searchParams.get('x-vercel-protection-bypass');
  
  if (protectionBypass) {
    const response = NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    });
    
    response.cookies.set('x-vercel-protection-bypass', protectionBypass);
    return response;
  }
  
  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
};
