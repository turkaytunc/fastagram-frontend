/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { fetchComments } from 'src/api';
import { CommentItem } from '..';

const CommentsDisplay = ({ photoId }: { photoId: string }) => {
  const [err, setErr] = useState('');
  const [comments, setComments] = useState([{}] as [
    { id: string; photo_id: string; user_id: string; content: string; created_at: string }
  ]);

  useEffect(() => {
    let isMounted = true;
    const getComments = async () => {
      try {
        const response = await fetchComments(photoId);
        const data = await response.json();

        if (data.message) {
          setErr(data.message);
          return;
        }
        if (isMounted) {
          setComments(data.comments);
        }
      } catch (err) {
        setErr(err.message);
      }
    };
    getComments();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section style={{ borderTop: `${err ? '0' : '1'}px solid #ddd`, width: '100%' }}>
      {err
        ? null
        : comments?.map((el) => <CommentItem key={el?.id || Math.random()} comment={el} />)}
    </section>
  );
};

export default CommentsDisplay;
