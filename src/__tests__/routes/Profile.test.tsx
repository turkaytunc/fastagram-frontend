import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Profile from 'src/routes/profile/Profile';

jest.spyOn(window, 'fetch');

describe('<Profile />', () => {
  it('should fetch profile and photos without crashing', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({
        photos: [
          { id: 1, data: 'jkfdsjfds' },
          { id: 22, data: 'fdskjf' },
        ],
        profile: { username: 'turkay234', fullname: 'turkay tunc', email: 'turk@gmail.com' },
      }),
    });

    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <Profile />
      </Router>
    );

    expect(await screen.findByText(/turkay234/)).toBeInTheDocument();
  });

  it('should fetch profile but get server error', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({
        photos: [
          { id: 1, data: 'jkfdsjfds' },
          { id: 22, data: 'fdskjf' },
        ],
        profile: { username: 'turkay234', fullname: 'turkay tunc', email: 'turk@gmail.com' },
      }),
    });

    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <Profile />
      </Router>
    );

    expect(await screen.findByText(/Cannot fetch data/)).toBeInTheDocument();
  });

  it('should not fetch profile and get error', async () => {
    (window.fetch as jest.Mock).mockRejectedValue(new Error('Something went wrong!'));

    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <Profile />
      </Router>
    );

    expect(await screen.findByText(/Something went wrong!/)).toBeInTheDocument();
  });
});
