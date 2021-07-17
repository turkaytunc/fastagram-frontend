import { render, screen, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { CogMenu } from 'src/components';

jest.spyOn(window, 'fetch');
const history = createBrowserHistory();
history.push('/');

describe('<CogMenu />', () => {
  it('should render without crashing', async () => {
    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    expect(await screen.findByText('Profile')).toBeInTheDocument();
  });
  it('should handle profile button click event', async () => {
    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    const button = await screen.findByRole('button', { name: 'Profile' });
    fireEvent.click(button);

    expect(history.location.pathname).toBe('/profile/undefined');
  });
  it('should handle logout button click event', async () => {
    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    const button = await screen.findByRole('button', { name: 'Log out' });
    fireEvent.click(button);

    expect(history.location.pathname).toBe('/login');
  });
});
