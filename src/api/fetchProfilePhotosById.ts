import { BASE_URL } from 'src/constants';

export const fetchProfilePhotosById = async (userId: string) =>
  window.fetch(`${BASE_URL}/profile/photos/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ auth: window.localStorage.getItem('auth') }),
  });
