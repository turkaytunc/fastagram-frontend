import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { addLike } from 'src/api';
import './heart.scss';

const Heart = ({ size, userId, photoId }: { size: string; userId: string; photoId: string }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = async () => {
    try {
      const response = await addLike(photoId, userId);
      const data = await response.json();

      if (data.message) {
        console.log(data.message);
        return;
      }
      setIsLiked(data.isLiked);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="heart-container">
      <button type="button" onClick={() => handleLike()}>
        <FaHeart fill={isLiked ? 'red' : 'grey'} size={size} />
      </button>
    </section>
  );
};

export default Heart;
