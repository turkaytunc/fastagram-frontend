import React, { createContext, Dispatch, SetStateAction, useState } from 'react';

export const LikeContext =
  createContext<null | {
    isLiked: number | null;
    // eslint-disable-next-line no-unused-vars
    setIsLiked: Dispatch<SetStateAction<number>>;
  }>(null);

export const LikeContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLiked, setIsLiked] = useState(0);

  return <LikeContext.Provider value={{ isLiked, setIsLiked }}>{children}</LikeContext.Provider>;
};
