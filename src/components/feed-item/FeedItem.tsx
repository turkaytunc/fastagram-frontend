import { Comment, Likes } from 'src/components';
import './feed-item.scss';

const FeedItem = ({ username, likeCount }: { likeCount: string; username: string }) => {
  return (
    <div className="feed-item-container">
      <header>{username}</header>
      <div className="feed-item-image">
        <img
          width="400"
          src="https://i.pinimg.com/originals/35/26/fc/3526fca5af9eaa620475a131a62cf1e6.jpg"
          alt="anime girl"
        />
      </div>
      <Likes color="red" size="30" />
      <div style={{ textAlign: 'start', marginTop: '0.2rem' }}>{likeCount} like</div>
      <Comment />
    </div>
  );
};

export default FeedItem;
