import { useParams } from 'react-router-dom';
import { Navbar, PhotosContainer } from 'src/components';
import useProfile from 'src/hooks/useProfile';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
  const [profile, fetchError] = useProfile(userId);

  return (
    <div>
      <Navbar />
      <div>Profile Page for userId: {userId}</div>
      <div>{fetchError}</div>
      <div>
        <PhotosContainer photos={profile} />
      </div>
    </div>
  );
};

export default Profile;
