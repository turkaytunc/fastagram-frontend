import { logout } from 'src/api/logout';
import { useHistory } from 'react-router-dom';
import './cog-menu.scss';

import { useContext } from 'react';
import { UserContext } from 'src/context/UserContext';

const CogMenu = () => {
  const history = useHistory();
  const user = useContext(UserContext);

  const handleLogOut = () => {
    logout();
    history.push('/login');
  };

  return (
    <div className="cog-container">
      <li>
        <button onClick={() => history.push(`/profile/${user?.user?.userId}`)} type="button">
          Profile
        </button>
      </li>
      <li>Settings</li>
      <li>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
      </li>
    </div>
  );
};

export default CogMenu;
