/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { FeedItem, FeedSidebar, Loading, Navbar } from 'src/components';
import './dashboard.scss';

import useAuth from 'src/hooks/useAuth';
import { fetchFeedItems } from 'src/api';

const Dashboard = () => {
  useAuth('/');

  const [feedItems, setFeedItems] = useState([{}] as [
    { user_id: string; id: string; data: string }
  ]);

  useEffect(() => {
    let isMounted = true;
    const fetchFeed = async () => {
      const response = await fetchFeedItems();
      const data = await response.json();
      if (isMounted) {
        setFeedItems(data.feedItems);
      }
    };
    fetchFeed();
    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    document.title = 'Instagram';
  }, []);

  return (
    <div className="dashboard-container">
      <Navbar />
      {feedItems?.length > 0 ? (
        <div className="dashboard-feed">
          <div className="feed-photo">
            {feedItems?.map((el) => (
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
      ) : (
        <Loading />
      )}
    </div>
  );
};

export default Dashboard;
