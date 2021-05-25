import { BASE_URL } from 'src/constants';

export const fetchComments = async (photoId: string) =>
  window.fetch(`${BASE_URL}/dashboard/comments`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({
      photo_id: photoId,
      auth: window.localStorage.getItem('auth'),
    }),
  });
