import { FormEvent, useState } from 'react';
import './comment.scss';

const Comment = () => {
  const [comment, setComment] = useState('');
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (comment.length < 1) return;
    console.log(comment);
  };
  return (
    <form className="comment-container">
      <label htmlFor="comment-area" className="comment-label">
        <textarea
          onChange={(event) => setComment(event.target.value)}
          value={comment}
          rows={1}
          maxLength={70}
          id="comment-area"
          className="comment-area"
        />
      </label>
      <button
        style={{ color: `${comment.length > 1 ? '#0095f6' : 'rgba(0, 149, 246, 0.3)'}` }}
        onClick={(event) => handleSubmit(event)}
        type="submit"
        className="comment-button"
      >
        Post
      </button>
    </form>
  );
};

export default Comment;
