export interface JwtPayload {
  sub: string; // the user ID
  email: string; // the user's email address
  iat: number; // the issued at timestamp
  exp: number; // the expiration timestamp
}