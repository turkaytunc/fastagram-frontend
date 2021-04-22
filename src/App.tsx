import { useContext, useEffect } from 'react';
import { Store } from './context';
import './app.scss';

function App() {
  const { state, dispatch } = useContext(Store);
  useEffect(() => {
    dispatch({ type: 'ADD_USER', payload: { id: 'fdskjfs', name: 'hay' } });
  }, []);
  return <div className="app-container">{state.user.id}</div>;
}

export default App;
