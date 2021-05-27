import { useState } from 'react';
import { FaBolt } from 'react-icons/fa';
import useProfile from 'src/hooks/useProfile';
import './mini-profile.scss';

const MiniProfile = ({ userId }: { userId: string }) => {
  const [profile, profileFetchError] = useProfile(userId);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {profileFetchError === '' ? (
        <div className="mini-profile">
          <section className="mini-username">{profile?.username}</section>

          {isOpen && (
            <section className="mini-profile-menu">
              <section className="mini-fullname">{profile?.fullname}</section>
              <section className="mini-email">{profile?.email}</section>
            </section>
          )}
          <button type="button" onClick={() => setIsOpen((prev) => !prev)}>
            <FaBolt fill="#666" />
          </button>
        </div>
      ) : (
        <div>{profileFetchError}</div>
      )}
    </>
  );
};

export default MiniProfile;
