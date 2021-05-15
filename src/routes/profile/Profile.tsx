import { useParams } from 'react-router-dom';

const Profile = () => {
  const { userId }: { userId: string } = useParams();

  return <div>Profile Page for userId: {userId}</div>;
};

export default Profile;
