import useProfile from 'src/hooks/useProfile';
import './mini-profile.scss';

const MiniProfile = ({ userId }: { userId: string }) => {
  const [profile, profileFetchError] = useProfile(userId);
  return (
    <div className="mini-profile">
      <section>{profile?.username}</section>
      <section>{profile?.fullname}</section>
      <section>{profile?.email}</section>
      <div>{profileFetchError}</div>
    </div>
  );
};

export default MiniProfile;
