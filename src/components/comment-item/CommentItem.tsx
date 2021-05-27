/* eslint-disable camelcase */
const CommentItem = ({
  comment,
}: {
  comment: { id: string; photo_id: string; user_id: string; content: string; created_at: string };
}) => {
  return (
    <>
      {comment.created_at && (
        <section style={{ display: 'flex', paddingLeft: '0.5rem', marginTop: '1rem' }}>
          {comment.content}
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
        </section>
      )}
    </>
  );
};

export default CommentItem;
