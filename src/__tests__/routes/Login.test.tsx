import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Login from 'src/routes/login/Login';

jest.spyOn(window, 'fetch');
const history = createBrowserHistory();
history.push('/login');

describe('Login Route ', () => {
  it('should render without crash', async () => {
    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const loginButton = await screen.findByRole('button', { name: 'Log in' });

    expect(loginButton).toBeInTheDocument();
  });

  it('should fire submit event and get error because empty email input', async () => {
    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const loginButton = await screen.findByRole('button', { name: 'Log in' });
    fireEvent.submit(loginButton);

    expect(await screen.findByText('"email" is not allowed to be empty')).toBeInTheDocument();
  });

  it('should fire click event and show-hide password', async () => {
    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const passwordInput = await screen.findByTestId('login-password');
    fireEvent.change(passwordInput, {
      target: { value: '20kfdsjsfd' },
    });

    expect(await screen.findByText('Show')).toBeInTheDocument();
    fireEvent.click(await screen.findByTestId('login-show-hide'));
    expect(await screen.findByText('Hide')).toBeInTheDocument();
  });

  it('should fire successful submit event fetch data', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({ status: 200, json: () => ({ data: {} }) });
    render(
      <Router history={history}>
        <Login />
      </Router>
    );

    const passwordInput = await screen.findByTestId('login-password');
    fireEvent.change(passwordInput, {
      target: { value: '2422sjsfd' },
    });
    fireEvent.change(await screen.findByTestId('login-email'), {
      target: { value: 'fakemail@mail.com' },
    });

    fireEvent.click(await screen.findByRole('button', { name: 'Log in' }));
    expect(history.location.pathname).toBe('/');
  });

  it('should fire successful submit event but get error in return', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({ message: 'some error occurred!' }),
    });
    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    const passwordInput = await screen.findByTestId('login-password');
    fireEvent.change(passwordInput, {
      target: { value: '2422sjsfd' },
    });
    fireEvent.change(await screen.findByTestId('login-email'), {
      target: { value: 'fakemail@mail.com' },
    });

    fireEvent.click(await screen.findByRole('button', { name: 'Log in' }));
    expect(await screen.findByText('some error occurred!'));
  });

  it('should fire successful submit event but get error in return', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({ message: 'some error occurred!' }),
    });
    render(
      <Router history={history}>
        <Login />
      </Router>
    );
    fireEvent.change(await screen.findByTestId('login-email'), {
      target: { value: 'fakemail@mail.com' },
    });
    fireEvent.click(await screen.findByText('Log in'));

    fireEvent.focus(await screen.findByTestId('login-email'));
  });
});
