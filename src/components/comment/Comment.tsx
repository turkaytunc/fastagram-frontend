/* eslint-disable no-console */
import { FormEvent, useState } from 'react';
import { addComment } from 'src/api';
import { commentValidator } from 'src/helpers/joiValidators';
import { DisplayError } from 'src/components';
import './comment.scss';

const Comment = ({ photoId, photoOwner }: { photoId: string; photoOwner: string }) => {
  const [comment, setComment] = useState('');
  const [err, setErr] = useState('');
  const handleSubmit = async (event: FormEvent) => {
    try {
      event.preventDefault();

      await commentValidator(comment);

      const response = await addComment(photoId, photoOwner, comment);
      const data = await response.json();

      if (data.message) {
        setErr(data.message);
        return;
      }
      window.location.pathname = 'fastagram-frontend/';
    } catch (err) {
      setErr(err.message);
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
          onFocus={() => setErr('')}
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
      {err && <DisplayError color="red" message={err} />}
    </form>
  );
};

export default Comment;
