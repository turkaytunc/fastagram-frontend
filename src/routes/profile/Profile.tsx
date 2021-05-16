import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { fetchProfileById } from 'src/api';
import { Navbar } from 'src/components';
import useProfile from 'src/hooks/useProfile';

const Profile = () => {
  const { userId }: { userId: string } = useParams();
  const [profile, fetchError] = useProfile(userId);

  return (
    <div>
      <Navbar /> Profile Page for userId: {userId}
      <div>{fetchError}</div>
      <div>
        {profile.map((item) => (
          <img src={item.data} alt="profile items" />
        ))}
      </div>
    </div>
  );
};

export default Profile;
