import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Profile from 'src/routes/profile/Profile';

jest.spyOn(window, 'fetch');

describe('<Profile />', () => {
  it('should render without crashing', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({ photos: [] }),
    });
    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <Profile />
      </Router>
    );

    expect(await screen.findByText(/Profile Page/)).toBeInTheDocument();
  });
});
