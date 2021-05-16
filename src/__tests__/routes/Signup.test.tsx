import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Signup from 'src/routes/signup/Signup';

jest.spyOn(window, 'fetch');

describe('Signup Route ', () => {
  const history = createBrowserHistory();
  it('should render without crash', async () => {
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    expect(await screen.findByText('Sign up')).toBeInTheDocument();
  });

  it('should fire submit event and get error because empty inputs', async () => {
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    fireEvent.submit((await screen.findAllByRole('button'))[1]);

    expect(await screen.findByText('"username" is not allowed to be empty')).toBeInTheDocument();
  });

  it('should fire input change event', async () => {
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    fireEvent.change(await screen.findByTestId('password-input'), {
      target: { value: '20kfdsjsfd' },
    });
    fireEvent.change(await screen.findByTestId('username-input'), {
      target: { value: 'hasan25' },
    });
    fireEvent.submit((await screen.findAllByRole('button'))[1]);

    expect(await screen.findByText('"email" is not allowed to be empty')).toBeInTheDocument();
  });

  it('should fire click event and show-hide password', async () => {
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    fireEvent.change(await screen.findByTestId('password-input'), {
      target: { value: '20kfdsjsfd' },
    });

    expect(await screen.findByText('Show')).toBeInTheDocument();
    fireEvent.click(await screen.findByTestId('show-hide-button'));
    expect(await screen.findByText('Hide')).toBeInTheDocument();
  });

  it('should fire successful submit event', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({ status: 200, json: () => ({ data: {} }) });
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    fireEvent.change(await screen.findByTestId('password-input'), {
      target: { value: '20kfjfdskjkljsdf' },
    });
    fireEvent.change(await screen.findByTestId('username-input'), {
      target: { value: 'hasanhas5' },
    });
    fireEvent.change(await screen.findByTestId('email-input'), {
      target: { value: 'hasan@email.com' },
    });

    fireEvent.submit((await screen.findAllByRole('button'))[1]);
  });

  it('should fire unsuccessful submit event get error in return', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({ message: 'some kind of error' }),
    });
    render(
      <Router history={history}>
        <Signup />
      </Router>
    );

    fireEvent.change(await screen.findByTestId('password-input'), {
      target: { value: '20kfj3424kjkljsdf' },
    });
    fireEvent.change(await screen.findByTestId('username-input'), {
      target: { value: 'hasan25' },
    });
    fireEvent.change(await screen.findByTestId('email-input'), {
      target: { value: 'hasan@email.com' },
    });

    fireEvent.submit((await screen.findAllByRole('button'))[1]);

    expect(await screen.findByText('some kind of error')).toBeTruthy();
  });
});
