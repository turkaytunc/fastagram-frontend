import React, { createContext, useState } from 'react';
import { User } from 'src/interfaces';

export const UserContext =
  createContext<null | {
    user: User | null;
    // eslint-disable-next-line no-unused-vars
    setUser: (user: User | null) => void;
  }>(null);

export const UserContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({} as User | null);

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
};
