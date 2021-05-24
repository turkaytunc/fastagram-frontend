import { useContext, useEffect, useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import { addLike, fetchLikeStatus } from 'src/api';
import { LikeContext } from 'src/context/LikeContext';
import './heart.scss';

const Heart = ({ size, userId, photoId }: { size: string; userId: string; photoId: string }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [fetchErr, setFetchErr] = useState('');
  const likeCtx = useContext(LikeContext);

  useEffect(() => {
    let isMounted = true;

    const isLiked = async () => {
      try {
        const response = await fetchLikeStatus(photoId, userId);
        const data = await response.json();

        if (data.message) {
          setFetchErr(data.message);
          return;
        }

        if (isMounted) {
          setIsLiked(data.isLiked);
        }
      } catch (err) {
        setFetchErr(err.message);
      }
    };
    isLiked();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleLike = async () => {
    try {
      const response = await addLike(photoId, userId);
      const data = await response.json();

      if (data.message) {
        setFetchErr(data.message);
        return;
      }
      setIsLiked(data.isLiked);
      likeCtx?.setIsLiked((prev) => prev + 1);
    } catch (error) {
      setFetchErr(error.message);
    }
  };

  return (
    <section className="heart-container">
      <button type="button" onClick={() => handleLike()}>
        <FaHeart fill={isLiked ? 'red' : 'grey'} size={size} />
      </button>
      {fetchErr}
    </section>
  );
};

export default Heart;
