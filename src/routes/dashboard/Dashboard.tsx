/* eslint-disable camelcase */
/* eslint-disable dot-notation */
import { useEffect, useState } from 'react';
import { FeedItem, FeedSidebar, Loading, Navbar } from 'src/components';
import './dashboard.scss';
import { useHistory } from 'react-router-dom';

import useAuth from 'src/hooks/useAuth';
import { fetchFeedItems } from 'src/api';
import { timeout } from 'src/helpers/timeoutPromise';

const Dashboard = () => {
  useAuth('/');
  const history = useHistory();

  const [feedItems, setFeedItems] = useState([{ user_id: '', id: '', data: '' }] as [
    { user_id: string; id: string; data: string }
  ]);

  useEffect(() => {
    let isMounted = true;
    const fetchFeed = async () => {
      try {
        const response = await timeout(fetchFeedItems(), 4000);
        const data = await response.json();

        if (isMounted) {
          setFeedItems(data.feedItems);
        }
      } catch (error) {
        history.push('/login');
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
      {feedItems?.length > 0 && feedItems[0].data !== '' ? (
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
