import { BASE_URL } from 'src/constants';

export const fetchProfileById = async (userId: string) =>
  window.fetch(`${BASE_URL}/profile/getphoto/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ auth: window.localStorage.getItem('auth') }),
  });
