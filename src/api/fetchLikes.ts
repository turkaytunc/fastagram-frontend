import { BASE_URL } from 'src/constants';

export const fetchLikes = async (photoId: string) =>
  window.fetch(`${BASE_URL}/dashboard/likes`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ photoId, auth: window.localStorage.getItem('auth') }),
  });
