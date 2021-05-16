import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Navbar } from 'src/components';

describe('<Navbar />', () => {
  const history = createBrowserHistory();

  it('should render without crash', async () => {
    history.push('/');
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    expect(await screen.findByTestId('navbar-cog-button')).toBeTruthy();
  });

  it('should fire click event and open cog menu', async () => {
    history.push('/');
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    fireEvent.click(await screen.findByTestId('navbar-cog-button'));
    expect(await screen.findByTestId('navbar-cog-container')).toBeTruthy();
    expect(await screen.findByText('Profile')).toBeTruthy();
  });

  it('should fire click event and open image upload modal', async () => {
    history.push('/');

    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );

    fireEvent.click(await screen.findByTestId('navbar-modal-button'));

    expect(await screen.findByText('Max 100kb and jpg only')).toBeTruthy();
  });
});
