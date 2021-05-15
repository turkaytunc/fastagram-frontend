import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById } from 'src/api';
import { Navbar } from 'src/components';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
  const [fetchError, setFetchError] = useState('');
  const [profile, setProfile] = useState({});
  const history = useHistory();

  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await fetchProfileById(userId);
        const data = await response.json();

        if (response.status === 200) {
          setProfile(data);
          return;
        }
        history.push('/login');
      } catch (error) {
        setFetchError(error.message);
      }
    };
    getProfile();
  }, [userId]);
  return (
    <div>
      <Navbar /> Profile Page for userId: {userId}
      <div>{fetchError}</div>
      <div>{JSON.stringify(profile, null, 2)}</div>
    </div>
  );
};

export default Profile;
