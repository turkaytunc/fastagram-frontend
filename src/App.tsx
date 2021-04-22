import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'src/hooks/redux-toolkit';
import { add, remove } from 'src/context/user-toolkit/userReducer';

import './app.scss';

function App() {
  const state = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(add({ name: 'hasan', id: 'dahfjd;sjfkds' }));
  }, []);

  return <div className="app-container">{state.user.id}</div>;
}

export default App;
