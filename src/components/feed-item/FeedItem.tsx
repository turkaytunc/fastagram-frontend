/* eslint-disable no-console */
import { useContext, useEffect, useState } from 'react';
import { fetchLikes } from 'src/api';
import { Comment, Heart, MiniProfile } from 'src/components';
import { LikeContext } from 'src/context/LikeContext';
import './feed-item.scss';

const FeedItem = ({
  userId,
  photoId,
  imageData,
}: {
  imageData: string;
  userId: string;
  photoId: string;
}) => {
  // eslint-disable-next-line no-unused-vars
  const [likes, setLikes] = useState(0);
  const likeCtx = useContext(LikeContext);

  useEffect(() => {
    let isMounted = true;
    const likeCount = async () => {
      try {
        const response = await fetchLikes(photoId);
        const data = await response.json();

        if (data.message) {
          console.log(data.message);
          return;
        }

        if (isMounted) {
          setLikes(data.likes?.count);
        }
      } catch (err) {
        console.log(err);
      }
    };
    likeCount();
    return () => {
      isMounted = false;
    };
  }, [likeCtx?.isLiked]);

  return (
    <div className="feed-item-container">
      <header className="feed-item-profile">
        <MiniProfile userId={userId} />
      </header>
      <div className="feed-item-image">
        {imageData && <img width="400" src={imageData} alt="anime girl" />}
      </div>

      <Heart userId={userId} photoId={photoId} size="30" />
      <div style={{ textAlign: 'start', marginTop: '0.2rem', padding: '0.5rem' }}>
        {likes} {likes > 1 ? 'likes' : 'like'}
      </div>
      <Comment photoId={photoId} />
    </div>
  );
};

export default FeedItem;
