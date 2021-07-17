import { screen, render, fireEvent } from '@testing-library/react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Search } from 'src/components';

const history = createBrowserHistory();
history.push('/');

jest.spyOn(window, 'fetch');
const mockFetch = window.fetch as jest.Mock;

describe('<Search />', () => {
  it('should fire change event', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => ({
        users: [{ username: 'enes', user_id: '' }],
      }),
    });
    render(
      <Router history={history}>
        <Search />
      </Router>
    );

    fireEvent.change(await screen.findByRole('searchbox'), {
      target: { value: 'searching things' },
    });

    expect(await screen.findByRole('searchbox')).toHaveValue('searching things');
  });

  it('should fire change event and get error', async () => {
    mockFetch.mockRejectedValue(new Error('Something went wrong'));
    render(
      <Router history={history}>
        <Search />
      </Router>
    );

    fireEvent.change(await screen.findByRole('searchbox'), {
      target: { value: 'searching things' },
    });

    expect(await screen.findByRole('searchbox')).toHaveValue('searching things');
  });

  it('should fire change event and fetch error message from server', async () => {
    mockFetch.mockResolvedValue({
      status: 400,
      json: () => ({ message: 'Some server problem message' }),
    });
    render(
      <Router history={history}>
        <Search />
      </Router>
    );

    fireEvent.change(await screen.findByRole('searchbox'), {
      target: { value: 'searching things' },
    });

    expect(await screen.findByRole('searchbox')).toHaveValue('searching things');
  });

  it('should fire change event', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => ({
        users: [{ username: 'onur', user_id: '423j-423kl-jh21j' }],
      }),
    });
    render(
      <Router history={history}>
        <Search />
      </Router>
    );

    fireEvent.change(await screen.findByRole('searchbox'), {
      target: { value: 'searching things' },
    });

    fireEvent.click(await screen.findByRole('button'));

    expect(window.location.pathname).toBe('/profile/423j-423kl-jh21j');
  });
});
