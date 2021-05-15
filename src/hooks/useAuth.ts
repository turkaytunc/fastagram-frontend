import { useContext, useEffect, useState } from 'react';
import { validateUser } from 'src/api';
import { UserContext } from 'src/context/UserContext';
import { User } from 'src/interfaces';
import { useHistory } from 'react-router-dom';

export default function useAuth() {
  const userContext = useContext(UserContext);
  const history = useHistory();
  const [err, setErr] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await validateUser();
        const data = await response.json();

        if (!data.message) {
          userContext?.setUser(data.user);
          localStorage.setItem('user', JSON.stringify(data.user));
          history.push('/');
          return;
        }
        userContext?.setUser(null);
        history.push('/login');
      } catch (error) {
        userContext?.setUser(null);
        history.push('/login');
        setErr('User validation failed');
      }
    };
    fetchUser();
  }, []);
}
