import { BASE_URL } from 'src/constants';

export const fetchLikes = async (photoId: string) =>
  window.fetch(`${BASE_URL}/like/all`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ photo_id: photoId, auth: window.localStorage.getItem('auth') }),
  });
