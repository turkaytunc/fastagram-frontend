import { screen, render } from '@testing-library/react';
import { PhotosContainer } from 'src/components';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

jest.spyOn(window, 'fetch');
const mockJest = window.fetch as jest.Mock;
const mockPhotoData = {
  photos: [
    { id: 1, data: 'jkfdsjfds' },
    { id: 22, data: 'fdskjf' },
  ],
};

const history = createBrowserHistory();
const userId = '487j-fdslkj23-fds3j34j';
history.push(`/profile/${userId}`);

describe('<PhotosContainer />', () => {
  it('should render without crashing', async () => {
    mockJest.mockResolvedValue({
      status: 200,
      json: () => mockPhotoData,
    });

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );

    expect((await screen.findAllByRole('img'))[0]).toBeInTheDocument();
  });

  it('should render without empty id', async () => {
    mockJest.mockResolvedValue({
      status: 200,
      json: () => mockPhotoData,
    });

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );

    expect((await screen.findAllByRole('img'))[1]).toBeInTheDocument();
  });

  it('should fetch photos', async () => {
    mockJest.mockResolvedValue({
      status: 200,
      json: () => mockPhotoData,
    });

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );

    expect(await screen.findByTestId('photos-container')).toBeInTheDocument();
  });

  it('should fail to fetch photos', async () => {
    mockJest.mockResolvedValue({
      status: 400,
      json: () => mockPhotoData,
    });

    render(
      <Router history={history}>
        <PhotosContainer userId={userId} />
      </Router>
    );

    expect(await screen.findByText('Cannot fetch data')).toBeTruthy();
  });
});
