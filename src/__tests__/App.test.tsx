import { cleanup, render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UserContextProvider } from 'src/context/UserContext';
import App from '../App';

jest.spyOn(window, 'fetch');
const fetch = window.fetch as jest.Mock;
afterEach(cleanup);

describe('<App/>', () => {
  it('should render component without crashing', async () => {
    const history = createBrowserHistory();
    history.push('/fkldsjajf');
    render(
      <Router history={history}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText('404')).toBeInTheDocument();
  });

  it('should render and lazy load dashboard component without crashing', async () => {
    fetch.mockResolvedValue({
      status: 200,
      json: () => ({ user_id: '243', id: 'fdsj', data: 'fdsjfklds' }),
    });
    const history = createBrowserHistory();
    history.push('/');
    render(
      <Router history={history}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText(/Loading.../)).toBeInTheDocument();
  });
  it('should render component and lazy load login component without crashing', async () => {
    const history = createBrowserHistory();
    history.push('/login');
    render(
      <Router history={history}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText('Log in')).toBeInTheDocument();
  });
  it('should render component and lazy load signup component without crashing', async () => {
    const history = createBrowserHistory();
    history.push('/signup');
    render(
      <Router history={history}>
        <UserContextProvider>
          <App />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText('Sign up')).toBeInTheDocument();
  });
});
