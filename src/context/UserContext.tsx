import React, { createContext, useState } from 'react';
import { User } from 'src/interfaces';

export const UserContext = createContext<null | { user: User; setUser: (user: User) => void }>(
  null
);

const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as User);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};

export default UserContextProvider;
