import { BASE_URL } from 'src/constants';

export const fetchLikeStatus = async (photoId: string, userId: string) =>
  window.fetch(`${BASE_URL}/like/isliked`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({
      photo_id: photoId,
      user_id: userId,
      auth: window.localStorage.getItem('auth'),
    }),
  });
