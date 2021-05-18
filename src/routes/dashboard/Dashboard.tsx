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
        <div className="feed-follow">Side Follow</div>
      </div>
    </div>
  );
};

export default Dashboard;
