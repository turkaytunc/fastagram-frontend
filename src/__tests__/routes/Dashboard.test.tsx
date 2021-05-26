import { screen, render } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { UserContextProvider } from 'src/context/UserContext';
import Dashboard from 'src/routes/dashboard/Dashboard';

jest.spyOn(window, 'fetch');

describe('<Dashboard />', () => {
  it('should render without crashing', async () => {
    const history = createBrowserHistory();
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({ feedItems: [{ user_id: '342', id: '4', data: 'jfd243jkj' }] }),
    });
    render(
      <Router history={history}>
        <UserContextProvider>
          <Dashboard />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText(/FASTAGRAM/)).toBeTruthy();
  });

  it('should render loading... message', async () => {
    const history = createBrowserHistory();
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({ feedItems: [] }),
    });
    render(
      <Router history={history}>
        <UserContextProvider>
          <Dashboard />
        </UserContextProvider>
      </Router>
    );

    expect(await screen.findByText(/Loading.../)).toBeTruthy();
  });
});
