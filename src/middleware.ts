/*import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = localStorage.getItem('access_token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/feed/logged', '/user/logged:path*'], 
};
*/

export default middleware = () => {

}