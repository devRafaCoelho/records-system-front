import { getItem } from './storage';
import jwt_decode, { JwtPayload } from 'jwt-decode';

type DecodedToken = JwtPayload | undefined;

export function checkValidToken() {
  const token = getItem('token');

  if (token) {
    const decoded: DecodedToken = jwt_decode(token);
    const expiresIn = decoded?.exp;

    if (expiresIn === undefined) return false;

    const currentDate = Date.now() / 1000;
    const isTokenExpired = currentDate > expiresIn;

    return isTokenExpired;
  }

  return false;
}
