/* eslint-disable camelcase */
const CommentItem = ({
  comment,
}: {
  comment: { id: string; photo_id: string; user_id: string; content: string; created_at: string };
}) => {
  return (
    <section>
      {comment.created_at && (
        <>
          <section style={{ fontSize: '0.7rem', textAlign: 'start', padding: '0.2rem 1rem' }}>
            {new Date(comment?.created_at).toLocaleDateString()}
          </section>
          <section style={{ textAlign: 'start', paddingLeft: '2rem' }}>{comment.content}</section>
        </>
      )}
    </section>
  );
};

export default CommentItem;
