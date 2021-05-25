/* eslint-disable no-console */
import { FormEvent, useState } from 'react';
import { commentValidator } from 'src/helpers/joiValidators';
import './comment.scss';

const Comment = ({ photoId }: { photoId: string }) => {
  const [comment, setComment] = useState('');
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();

      await commentValidator(comment);
      console.log(comment);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form className="comment-container">
      <label htmlFor={`comment-area-${photoId}`} className="comment-label">
        <textarea
          onChange={(event) => setComment(event.target.value)}
          value={comment}
          rows={1}
          maxLength={70}
          id={`comment-area-${photoId}`}
          data-testid={`comment-area-${photoId}`}
          className="comment-area"
        />
      </label>
      <button
        style={{ color: `${comment.length > 5 ? '#0095f6' : 'rgba(0, 149, 246, 0.3)'}` }}
        onClick={(event) => handleSubmit(event)}
        type="submit"
        className="comment-button"
        disabled={comment.length < 5}
      >
        Post
      </button>
    </form>
  );
};

export default Comment;
