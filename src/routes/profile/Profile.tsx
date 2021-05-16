import { useParams } from 'react-router-dom';
import { Navbar } from 'src/components';
import useProfile from 'src/hooks/useProfile';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
  const [profile, fetchError] = useProfile(userId);

  return (
    <div>
      <Navbar />
      <div>Profile Page for userId: {userId}</div>
      <div>{fetchError}</div>
      {profile.map((item) => (
        <img key={item.id} src={item.data} alt="profile items" />
      ))}
    </div>
  );
};

export default Profile;
