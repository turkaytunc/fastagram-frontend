import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Profile = () => {
  const params: { id: string } = useParams();

  useEffect(() => {
    console.log(params.id);
  }, [params]);
  return <div>Profile Page</div>;
};

export default Profile;
