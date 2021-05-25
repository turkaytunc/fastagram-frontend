import useProfile from 'src/hooks/useProfile';
import './mini-profile.scss';

const MiniProfile = ({ userId }: { userId: string }) => {
  const [profile, profileFetchError] = useProfile(userId);
  return (
    <>
      {profileFetchError === '' ? (
        <div className="mini-profile">
          <section className="mini-username">{profile?.username}</section>
          <section>
            <section className="mini-fullname">{profile?.fullname}</section>
            <section className="mini-email">{profile?.email}</section>
          </section>
        </div>
      ) : (
        <div>{profileFetchError}</div>
      )}
    </>
  );
};

export default MiniProfile;
