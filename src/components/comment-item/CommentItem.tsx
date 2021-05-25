/* eslint-disable camelcase */
const CommentItem = ({
  comment,
}: {
  comment: { id: string; photo_id: string; user_id: string; content: string; created_at: string };
}) => {
  return (
    <section>
      <section>{comment.created_at}</section>
      <section>{comment.content}</section>
    </section>
  );
};

export default CommentItem;
