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

        if (data.message) {
          setErr(data.message);
          return;
        }
        if (isMounted) {
          setProfile(data.profile);
        }
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
