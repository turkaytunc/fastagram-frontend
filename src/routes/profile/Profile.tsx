import { useParams } from 'react-router-dom';
import { Navbar } from 'src/components';

const Profile = () => {
  const { userId }: { userId: string } = useParams();

  return (
    <div>
      <Navbar /> Profile Page for userId: {userId}
    </div>
  );
};

export default Profile;
