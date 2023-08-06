import { getItem } from './storage';

export function checkValidToken() {
  const expiresInString = getItem('expiresIn');
  const expiresIn = parseInt(expiresInString ?? '0', 10); // Usando o valor padrão '0' se expiresInString for null

  const currentDate = Date.now().toString();
  const numberCurrentDate = parseInt(currentDate.substring(0, 10));

  const isTokenExpired = numberCurrentDate > expiresIn;

  return isTokenExpired ? true : false;
}
