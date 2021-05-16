import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Navbar } from 'src/components';

jest.spyOn(window, 'fetch');

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

  it('should fire click event and close modal', async () => {
    history.push('/');

    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );

    fireEvent.click(await screen.findByTestId('navbar-modal-button'));

    fireEvent.click(await screen.findByTestId('modal-close-button'));

    expect(await screen.queryByTestId('modal-close-button')).not.toBeTruthy();
  });

  it('should fire image upload button click event ', async () => {
    history.push('/');
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => ({ data: [] }),
    });

    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );

    fireEvent.click(await screen.findByTestId('navbar-modal-button'));
    fireEvent.change(await screen.findByTestId('file-input'), {
      target: { files: [new Blob(), new Blob()] },
    });

    (await screen.findByTestId('modal-upload-button')).setAttribute('disabled', 'false');

    fireEvent.click(await screen.findByTestId('modal-upload-button'));
  });

  it('should fire image upload button click event and get fetch error ', async () => {
    history.push('/');
    (window.fetch as jest.Mock).mockRejectedValue(new Error('Error Occurred'));

    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );

    fireEvent.click(await screen.findByTestId('navbar-modal-button'));
    fireEvent.change(await screen.findByTestId('file-input'), {
      target: { files: [new Blob(), new Blob()] },
    });

    (await screen.findByTestId('modal-upload-button')).setAttribute('disabled', 'false');

    fireEvent.click(await screen.findByTestId('modal-upload-button'));
  });
});
