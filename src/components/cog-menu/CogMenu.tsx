import { logout } from 'src/api/logout';
import { useHistory } from 'react-router-dom';
import './cog-menu.scss';

const CogMenu = () => {
  const history = useHistory();
  const handleLogOut = async () => {
    await logout();

    history.push('/login');
  };
  return (
    <div className="cog-container">
      <li>Profile</li>
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
