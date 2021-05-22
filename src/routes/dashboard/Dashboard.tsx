/* eslint-disable dot-notation */
import { useEffect } from 'react';
import { FeedItem, FeedSidebar, Navbar } from 'src/components';
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
          <FeedItem likeCount="5" username="Hasan" />
          <FeedItem likeCount="13424" username="Enes" />
        </div>
        <FeedSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
