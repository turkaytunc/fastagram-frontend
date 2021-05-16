import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchProfileById } from 'src/api';

const useProfile = (userId: string) => {
  const [fetchError, setFetchError] = useState('');
  const [profile, setProfile] = useState([{}] as [
    // eslint-disable-next-line camelcase
    { data: string; user_id: string; created_at: string; id: number }
  ]);
  const history = useHistory();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetchProfileById(userId);
        const data = await response.json();

        if (response.status === 200) {
          setProfile(data.photos);
          return;
        }
        history.push('/login');
      } catch (error) {
        setFetchError(error.message);
      }
    };
    getProfile();
  }, [userId]);
  return [profile, fetchError] as const;
};

export default useProfile;
