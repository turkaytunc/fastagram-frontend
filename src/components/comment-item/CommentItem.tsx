import { Comment } from 'src/interfaces';

/* eslint-disable camelcase */
const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <>
      {comment.created_at && (
        <section style={{ display: 'flex', paddingLeft: '0.5rem', marginTop: '1rem' }}>
          <span style={{ fontWeight: 'bold' }}>{comment.username}</span>
          <span
            style={{
              fontSize: '0.7rem',
              textAlign: 'start',
              padding: '0.2rem 1rem',
              color: '#aaa',
            }}
          >
            on {new Date(comment?.created_at).toLocaleDateString()}
          </span>
          {comment.content}
        </section>
      )}
    </>
  );
};

export default CommentItem;
