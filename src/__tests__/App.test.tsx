import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App';

it('should render without crashing', async () => {
  const history = createBrowserHistory();
  history.push('/');
  render(
    <Router history={history}>
      <App />
    </Router>
  );
});
