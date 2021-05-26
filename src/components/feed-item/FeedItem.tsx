/* eslint-disable no-console */
import { Comment, CommentsDisplay, DisplayError, Heart, MiniProfile } from 'src/components';
import { useFeedItem } from 'src/hooks/useFeedItem';
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
  const [likes, err] = useFeedItem(photoId);

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
      <CommentsDisplay photoId={photoId} />
      <Comment photoId={photoId} photoOwner={userId} />
      {err && <DisplayError message={err} color="red" />}
    </div>
  );
};

export default FeedItem;
