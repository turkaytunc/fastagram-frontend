import { BASE_URL } from 'src/constants';

export const addComment = async (photoId: string, photoOwner: string, content: string) =>
  window.fetch(`${BASE_URL}/comment/add`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({
      photo_id: photoId,
      user_id: photoOwner,
      content,
      auth: window.localStorage.getItem('auth'),
    }),
  });
