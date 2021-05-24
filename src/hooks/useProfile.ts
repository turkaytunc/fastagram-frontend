import { useEffect, useState } from 'react';
import { fetchProfileById } from 'src/api';

const useProfile = (userId: string) => {
  const [profile, setProfile] = useState(
    {} as { username: string; fullname: string; email: string }
  );
  const [err, setErr] = useState('');

  useEffect(() => {
    let isMounted = true;
    const getProfile = async () => {
      try {
        const response = await fetchProfileById(userId);
        const data = await response.json();

        if (response.status === 200 && isMounted) {
          setProfile(data.profile);
          return;
        }
        throw new Error('Cannot fetch data');
      } catch (error) {
        setErr(error.message);
      }
    };
    getProfile();

    return () => {
      isMounted = false;
    };
  }, [userId]);

  return [profile, err] as const;
};

export default useProfile;
