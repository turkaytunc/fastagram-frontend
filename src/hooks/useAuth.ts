import { useEffect, useState } from 'react';
import { User } from 'src/interfaces';

export default function useAuth() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('userAuth')!) as User);

  useEffect(() => {}, []);

  return { user };
}
