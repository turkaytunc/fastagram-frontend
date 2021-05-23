import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchProfileById } from 'src/api';

const useProfile = (userId: string) => {
  const [fetchError, setFetchError] = useState('');
  const [profile, setProfile] = useState(
    {} as { username: string; fullname: string; email: string }
  );
  const history = useHistory();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetchProfileById(userId);
        const data = await response.json();

        if (response.status === 200) {
          setProfile(data.profile);
          return;
        }
        throw new Error('Cannot fetch data');
      } catch (error) {
        setFetchError(error.message);
        history.push('/login');
      }
    };
    getProfile();
  }, [userId]);

  return [profile, fetchError] as const;
};

export default useProfile;
