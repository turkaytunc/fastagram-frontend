import { FormEvent } from 'react';
import './comment.scss';

const Comment = () => {
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log('submitted');
  };
  return (
    <form className="comment-container">
      <label htmlFor="comment-area" className="comment-label">
        <textarea rows={1} maxLength={70} id="comment-area" className="comment-area" />
      </label>
      <button onClick={(event) => handleSubmit(event)} type="submit" className="comment-button">
        Post
      </button>
    </form>
  );
};

export default Comment;
