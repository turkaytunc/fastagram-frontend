import { BASE_URL } from 'src/constants';

export const loginUser = async (email: string, password: string) =>
  window.fetch(`${BASE_URL}/auth/login`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });
