import { useState, useContext, useEffect } from 'react';
import { fetchLikes } from 'src/api';
import { LikeContext } from 'src/context/LikeContext';

export const useFeedItem = (photoId: string) => {
  const [likes, setLikes] = useState(0);
  const likeCtx = useContext(LikeContext);
  const [err, setErr] = useState('');

  useEffect(() => {
    let isMounted = true;
    const likeCount = async () => {
      try {
        const response = await fetchLikes(photoId);
        const data = await response.json();

        if (data.message) {
          setErr(data.message);
          return;
        }

        if (isMounted) {
          setLikes(data.likes?.count);
        }
      } catch (err) {
        setErr(err.message);
      }
    };
    likeCount();
    return () => {
      isMounted = false;
    };
  }, [likeCtx?.isLiked]);

  return [likes, err] as const;
};
