/* eslint-disable no-console */
import { FaCaretDown } from 'react-icons/fa';
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

      <div className="heart-like-tri">
        <Heart userId={userId} photoId={photoId} size="30" />
        <div style={{ textAlign: 'start', marginTop: '0.2rem', padding: '0.5rem', flex: 5 }}>
          {likes} {likes > 1 ? 'likes' : 'like'}
        </div>
        <FaCaretDown fill="#aaa" size="30" />
      </div>
      <CommentsDisplay photoId={photoId} />
      <Comment photoId={photoId} photoOwner={userId} />
      {err && <DisplayError message={err} color="red" />}
    </div>
  );
};

export default FeedItem;
