import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchProfilePhotosById } from 'src/api';

const usePhotos = (userId: string) => {
  const [fetchError, setFetchError] = useState('');
  const [photos, setPhotos] = useState([{}] as [
    // eslint-disable-next-line camelcase
    { data: string; user_id: string; created_at: string; id: number }
  ]);
  const history = useHistory();

  useEffect(() => {
    const getPhotos = async () => {
      try {
        const response = await fetchProfilePhotosById(userId);
        const data = await response.json();

        if (response.status === 200) {
          setPhotos(data.photos);
          return;
        }
        throw new Error('Cannot fetch data');
      } catch (error) {
        setFetchError(error.message);
        history.push('/login');
      }
    };
    getPhotos();
  }, [userId]);
  return [photos, fetchError] as const;
};

export default usePhotos;
