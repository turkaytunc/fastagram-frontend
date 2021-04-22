import React, { createContext, useState } from 'react';
import { User } from 'src/interfaces';
import { UserAction } from './UserAction';
import { userReducer } from './userReducer';

type InitialStateType = {
  user: User;
};

const initialState = {
  user: { id: '', name: '' },
};

const rootReducer = ({ user }: InitialStateType, action: UserAction) => ({
  user: userReducer(user, action as UserAction),
});

export const Store = React.createContext<{
  state: InitialStateType;
  dispatch: React.Dispatch<UserAction>;
}>({
  state: (initialState as unknown) as InitialStateType,
  dispatch: () => null,
});

export const StoreProvider: React.FC = ({
  children,
}: {
  children?: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer(
    rootReducer,
    (initialState as unknown) as InitialStateType
  );

  return <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>;
};

StoreProvider.defaultProps = { children: null };
