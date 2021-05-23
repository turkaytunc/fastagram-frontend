/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { useContext, useEffect, useState } from 'react';
import { FeedItem, FeedSidebar, Navbar } from 'src/components';
import './dashboard.scss';

import useAuth from 'src/hooks/useAuth';
import { fetchFeedItems } from 'src/api';
import { UserContext } from 'src/context/UserContext';

const Dashboard = () => {
  useAuth('/');

  const ctx = useContext(UserContext);

  const [feedItems, setFeedItems] = useState([{}] as [
    { user_id: string; id: string; data: string }
  ]);

  useEffect(() => {
    const fetchFeed = async () => {
      const response = await fetchFeedItems();
      const data = await response.json();
      setFeedItems(data.feedItems);
    };
    fetchFeed();
  }, []);

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-feed">
        <div className="feed-photo">
          {ctx?.user?.userId &&
            feedItems?.map((el) => (
              <FeedItem
                key={el.id || Math.random()}
                photoId={el.id}
                imageData={el.data}
                userId={el.user_id}
              />
            ))}
        </div>
        <FeedSidebar />
      </div>
    </div>
  );
};

export default Dashboard;
