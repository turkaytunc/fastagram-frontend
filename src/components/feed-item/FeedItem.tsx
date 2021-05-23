import { Comment, Heart } from 'src/components';
import useProfile from 'src/hooks/useProfile';
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
  const [profile] = useProfile(userId);

  return (
    <div className="feed-item-container">
      <header className="feed-item-profile">
        <section>{profile?.username}</section>
        <section>{profile?.fullname}</section>
        <section>{profile?.email}</section>
        user:{userId} <p>photo: {photoId}</p>
      </header>
      <div className="feed-item-image">
        {imageData && <img width="400" src={imageData} alt="anime girl" />}
      </div>
      <Heart size="30" />
      <div style={{ textAlign: 'start', marginTop: '0.2rem', padding: '0.5rem' }}>{300} likes</div>
      <Comment photoId={photoId} />
    </div>
  );
};

export default FeedItem;
