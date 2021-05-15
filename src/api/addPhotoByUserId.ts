import { BASE_URL } from 'src/constants';

export const addPhotoByUserId = async (photoData: string, userId: string) =>
  window.fetch(`${BASE_URL}/profile/addphoto/${userId}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ photoData }),
  });
