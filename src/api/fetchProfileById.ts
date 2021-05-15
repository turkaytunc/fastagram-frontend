import { BASE_URL } from 'src/constants';

export const fetchProfileById = async (userId: string) =>
  window.fetch(`${BASE_URL}/profile/${userId}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
    },
    credentials: 'include',
  });
