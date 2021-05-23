import { screen, render } from '@testing-library/react';
import { PhotosContainer } from 'src/components';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

describe('<PhotosContainer />', () => {
  it('should render without crashing', async () => {
    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);
    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });

  it('should render without empty id', async () => {
    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });

  it('should fetch photos', async () => {
    jest.spyOn(window, 'fetch');
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({
        photos: [
          { id: 1, data: 'jkfdsjfds' },
          { id: 22, data: 'fdskjf' },
        ],
      }),
    });

    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );
  });

  it('should fail to fetch photos', async () => {
    jest.spyOn(window, 'fetch');
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({
        photos: [
          { id: 1, data: 'jkfdsjfds' },
          { id: 22, data: 'fdskjf' },
        ],
      }),
    });

    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );

    expect(await screen.findByText('Cannot fetch data')).toBeTruthy();
  });
});
