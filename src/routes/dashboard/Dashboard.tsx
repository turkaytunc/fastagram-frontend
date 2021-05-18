/* eslint-disable dot-notation */
import { useEffect } from 'react';
import { FeedItem, Navbar } from 'src/components';
import './dashboard.scss';

import useAuth from 'src/hooks/useAuth';

const Dashboard = () => {
  useAuth('/');

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-feed">
        <div className="feed-photo">
          <FeedItem />
        </div>
        <div className="feed-follow">
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
      </div>
    </div>
  );
};

export default Dashboard;
