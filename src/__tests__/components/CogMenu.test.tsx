import { render, screen, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { CogMenu } from '../../components';

jest.spyOn(window, 'fetch');

describe('<CogMenu />', () => {
  it('should render without crashing', async () => {
    const history = createBrowserHistory();
    history.push('/');

    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    expect(await screen.findByText('Profile')).toBeInTheDocument();
  });
  it('should handle profile button click event', async () => {
    const history = createBrowserHistory();
    history.push('/');

    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    const buttons = await screen.findAllByRole('button');
    expect(buttons[0].innerHTML).toBe('Profile');

    fireEvent.click(buttons[0]);

    expect(history.location.pathname).toBe('/profile/undefined');
  });
  it('should handle logout button click event', async () => {
    const history = createBrowserHistory();
    history.push('/');

    render(
      <Router history={history}>
        <CogMenu />
      </Router>
    );

    const buttons = await screen.findAllByRole('button');
    expect(buttons[1].innerHTML).toBe('Log out');

    fireEvent.click(buttons[1]);

    expect(history.location.pathname).toBe('/');
  });
});
