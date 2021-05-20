import { useContext, useEffect, useState } from 'react';
import { validateUser } from 'src/api';
import { UserContext } from 'src/context/UserContext';
import { useHistory } from 'react-router-dom';

export default function useAuth(path: string) {
  const userContext = useContext(UserContext);
  const history = useHistory();
  // eslint-disable-next-line no-unused-vars
  const [_, setErr] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await validateUser();
        const data = await response.json();

        if (!data.message) {
          userContext?.setUser(data.user);
          history.push(`${path}`);
          return;
        }
        userContext?.setUser(null);
        localStorage.removeItem('auth');
        history.push('/login');
      } catch (error) {
        userContext?.setUser(null);
        localStorage.removeItem('auth');
        setErr('User validation failed');
        history.push('/login');
      }
    };
    fetchUser();
  }, []);
}
