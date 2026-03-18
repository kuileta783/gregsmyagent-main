import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Redirect non-www to www
  if (hostname === 'gregsmyagent.com') {
    return NextResponse.redirect('https://www.gregsmyagent.com' + request.nextUrl.pathname, 301);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
