import { screen, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { Navbar } from 'src/components';

jest.spyOn(window, 'fetch');
const history = createBrowserHistory();
history.push('/');

describe('<Navbar />', () => {
  it('should render without crash', async () => {
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );

    const navbarButtons = await screen.findAllByRole('button');
    const cogMenuButton = navbarButtons[1];

    expect(cogMenuButton).toHaveClass('menu-item');
  });

  it('should fire click event and open cog menu', async () => {
    render(
      <Router history={history}>
        <Navbar />
      </Router>
    );
    const navbarButtons = await screen.findAllByRole('button');
    const cogMenuButton = navbarButtons[1];

    fireEvent.click(cogMenuButton);

    expect(await screen.findByTestId('navbar-cog-container')).toBeTruthy();
    expect(await screen.findByText('Profile')).toBeTruthy();
  });

  it('should fire click event and open image upload modal', async () => {
    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );

    const modalButton = await screen.findByTestId('navbar-modal-button');
    fireEvent.click(modalButton);

    expect(await screen.findByText('Max 100kb and jpg only')).toBeTruthy();
  });

  it('should fire click event and close modal', async () => {
    render(
      <Router history={history}>
        <Navbar />
        <div id="upload-modal" />
      </Router>
    );
    const modalButton = await screen.findByTestId('navbar-modal-button');

    fireEvent.click(modalButton);
    fireEvent.click(await screen.findByTestId('modal-close-button'));

    expect(await screen.queryByTestId('modal-close-button')).not.toBeTruthy();
  });

  it('should fire image upload button click event ', async () => {
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

    const modalButton = await screen.findByTestId('navbar-modal-button');
    fireEvent.click(modalButton);

    fireEvent.change(await screen.findByTestId('file-input'), {
      target: { files: [new Blob(), new Blob()] },
    });

    (await screen.findByTestId('modal-upload-button')).setAttribute('disabled', 'false');

    fireEvent.click(await screen.findByTestId('modal-upload-button'));
  });

  it('should fire image upload button click event and get fetch error ', async () => {
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

    expect(await screen.findByText('Error Occurred')).toBeTruthy();
  });
});
