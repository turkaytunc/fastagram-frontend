import { screen, render, fireEvent } from '@testing-library/react';
import Heart from 'src/components/heart/Heart';
import { LikeContextProvider } from 'src/context/LikeContext';

jest.spyOn(window, 'fetch');
const mockFetch = window.fetch as jest.Mock;

describe('<Heart />', () => {
  it('should fetch data with success', async () => {
    mockFetch.mockResolvedValue({ status: 200, json: () => ({ isLiked: true }) });
    render(
      <LikeContextProvider>
        <Heart photoId="fdskj" userId="3244-h423-4234" size="30" />
      </LikeContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByRole('button')).toBeInTheDocument();
  });

  it('should fetch like status and get error message', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => ({ message: 'something went wrong' }),
    });
    render(
      <LikeContextProvider>
        <Heart photoId="fdskj" userId="3244-h423-4234" size="30" />
      </LikeContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('something went wrong')).toBeInTheDocument();
  });

  it('should fail to fetch like status and throw error message', async () => {
    mockFetch.mockRejectedValue(new Error('cannot fetch data'));
    render(
      <LikeContextProvider>
        <Heart photoId="fdskj" userId="3244-h423-4234" size="30" />
      </LikeContextProvider>
    );

    fireEvent.click(await screen.findByRole('button'));

    expect(await screen.findByText('cannot fetch data')).toBeInTheDocument();
  });
});
