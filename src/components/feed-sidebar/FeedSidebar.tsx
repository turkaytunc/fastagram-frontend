import './feed-sidebar.scss';

const FeedSidebar = () => {
  return (
    <div className="feed-sidebar">
      <div className="feed-follow-user">user</div>
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
        © 2021 INSTAGRAM FROM TÜRKAY TUNÇ
      </span>
    </div>
  );
};

export default FeedSidebar;
