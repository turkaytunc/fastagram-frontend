import { BASE_URL } from 'src/constants';

export const searchUser = async (username: string) =>
  window.fetch(`${BASE_URL}/search/?username=${username}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
  });
