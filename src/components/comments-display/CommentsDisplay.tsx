/* eslint-disable camelcase */
import { useEffect, useState } from 'react';
import { fetchComments } from 'src/api';
import { Comment } from 'src/interfaces';
import { CommentItem } from '..';

const CommentsDisplay = ({ photoId }: { photoId: string }) => {
  const [err, setErr] = useState('');
  const [comments, setComments] = useState([{}] as [Comment]);

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
    <section className="comments-display-container">
      {err
        ? null
        : comments?.map((el) => <CommentItem key={el?.id || Math.random()} comment={el} />)}
    </section>
  );
};

export default CommentsDisplay;
