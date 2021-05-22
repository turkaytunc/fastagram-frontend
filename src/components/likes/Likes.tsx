import { FaHeart } from 'react-icons/fa';
import './likes.scss';

const Likes = ({ color, size }: { color: string; size: string }) => {
  return (
    <section className="likes-container">
      <FaHeart fill={color} size={size} />
    </section>
  );
};

export default Likes;
