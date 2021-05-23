import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import './heart.scss';

const Heart = ({ size }: { size: string }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <section className="heart-container">
      <button type="button" onClick={() => setIsLiked((prev) => !prev)}>
        <FaHeart fill={isLiked ? 'red' : 'grey'} size={size} />
      </button>
    </section>
  );
};

export default Heart;
