import { BASE_URL } from 'src/constants';

export const logout = async () =>
  window.fetch(`${BASE_URL}/auth/logout`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
  });
