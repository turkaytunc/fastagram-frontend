import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById } from 'src/api';
import { Navbar } from 'src/components';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
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
  return (
    <div>
      <Navbar /> Profile Page for userId: {userId}
      <div>{fetchError}</div>
      <div>
        {profile.map((item) => (
          <img src={item.data} alt="Hey" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
