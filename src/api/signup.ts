import { BASE_URL } from 'src/constants';

export const signup = async (username: string, fullname: string, email: string, password: string) =>
  window.fetch(`${BASE_URL}/auth/register`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ username, fullname, email, password }),
  });
