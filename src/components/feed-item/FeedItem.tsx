import { Comment, Likes } from 'src/components';
import './feed-item.scss';

const FeedItem = ({ username }: { username: string }) => {
  return (
    <div className="feed-item-container">
      <header>{username}</header>
      <Likes color="red" size="30" />
      <Comment />
    </div>
  );
};

export default FeedItem;
