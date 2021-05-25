import './feed-sidebar.scss';
import useProfile from 'src/hooks/useProfile';
import { UserContext } from 'src/context/UserContext';
import { useContext } from 'react';

const FeedSidebar = () => {
  const user = useContext(UserContext);
  const [profile, err] = useProfile(user?.user?.userId as string);

  return (
    <>
      {err === '' ? (
        <div className="feed-sidebar">
          <div className="feed-follow-user">
            <section>
              <section className="border rounded-full p-10">PP</section>
            </section>
            <section className="flex-col">
              <section className="text-gray-800 text-xl text-left mt-2">
                {profile?.username}
              </section>
              <section className="text-gray-400 text-sm text-left mt-2">
                {profile?.fullname}
              </section>
            </section>
            <section className="text-blue-400 cursor-pointer">Switch</section>
          </div>
          <ul className="feed-follow-list">
            <li>About</li>
            <li>Help</li>
            <li>Press</li>
            <li>API</li>
            <li>Jobs</li>
            <li>Privacy</li>
            <li>Terms</li>
            <li>Locations</li>
          </ul>
          <span className="text-gray-400 text-sm text-left mt-2">
            ©2021 FASTAGRAM FROM TÜRKAY TUNÇ
          </span>
        </div>
      ) : (
        <div className="feed-sidebar">{err}</div>
      )}
    </>
  );
};

export default FeedSidebar;
