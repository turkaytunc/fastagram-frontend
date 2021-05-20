import { BASE_URL } from 'src/constants';

export const addPhotoByUserId = async (photoData: string) =>
  window.fetch(`${BASE_URL}/profile/addphoto/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
    body: JSON.stringify({ photoData, auth: window.localStorage.getItem('auth') }),
  });
