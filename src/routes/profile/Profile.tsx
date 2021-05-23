import { useParams } from 'react-router-dom';
import { MiniProfile, Navbar, PhotosContainer } from 'src/components';
import './profile.scss';

const Profile = () => {
  const { userId }: { userId: string } = useParams();

  return (
    <div className="profile-container">
      <Navbar />

      <MiniProfile userId={userId} />
      <div>
        <PhotosContainer userId={userId} />
      </div>
    </div>
  );
};

export default Profile;
