import { useParams } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from 'src/context/UserContext';
import useAuth from 'src/hooks/useAuth';

const Profile = () => {
  const params: any = useParams();

  useEffect(() => {
    console.log(params);
  }, [params]);
  return <div>Profile Page {JSON.stringify(params)}</div>;
};

export default Profile;
