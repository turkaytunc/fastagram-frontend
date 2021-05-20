import { useParams } from 'react-router-dom';
import { Navbar, PhotosContainer } from 'src/components';
import usePhotos from 'src/hooks/usePhotos';
import useProfile from 'src/hooks/useProfile';
import './profile.scss';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
  const [photos] = usePhotos(userId);
  const [profile, profileFetchError] = useProfile(userId);

  return (
    <div className="profile-container">
      <Navbar />
      <div className="profile-user">
        <section>{profile.username}</section>
        <section>{profile.fullname}</section>
        <section>{profile.email}</section>
      </div>
      <div>{profileFetchError}</div>
      <div>
        <PhotosContainer photos={photos} />
      </div>
    </div>
  );
};

export default Profile;
