import { screen, render, fireEvent } from '@testing-library/react';
import { Comment } from 'src/components';

jest.spyOn(window, 'fetch');
const mockFetch = window.fetch as jest.Mock;

describe('<Comment />', () => {
  it('should fire change event', async () => {
    render(<Comment photoOwner="23489jh-42j3k" photoId="54" />);

    const commentArea = await screen.findByTestId('comment-area-54');
    expect(commentArea).toBeInTheDocument();

    fireEvent.change(commentArea, {
      target: { value: 'this is a test string' },
    });

    expect(commentArea).toHaveValue('this is a test string');
  });

  it('should fire submit event and successfully fetch data', async () => {
    mockFetch.mockResolvedValue({ status: 200, json: () => ({ comment: 'comment added' }) });
    render(<Comment photoOwner="23489jh-42j3k" photoId="54" />);

    const commentArea = await screen.findByTestId('comment-area-54');
    const submitButton = await screen.findByRole('button');

    fireEvent.change(commentArea, {
      target: { value: 'this is a test string' },
    });
    fireEvent.click(submitButton);

    expect(commentArea).toHaveValue('this is a test string');
  });

  it('should fire submit event and get fetch data with error message', async () => {
    mockFetch.mockResolvedValue({
      status: 200,
      json: () => ({ message: 'Some server problem message' }),
    });
    render(<Comment photoOwner="23489jh-42j3k" photoId="54" />);

    const commentArea = await screen.findByTestId('comment-area-54');
    const submitButton = await screen.findByRole('button');

    fireEvent.change(commentArea, {
      target: { value: 'this is a test string' },
    });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Some server problem message')).toBeTruthy();
  });

  it('should fire submit event and fail to fetch data and render error message', async () => {
    mockFetch.mockRejectedValue(new Error('Oops something went wrong!'));
    render(<Comment photoOwner="23489jh-42j3k" photoId="54" />);

    const commentArea = await screen.findByTestId('comment-area-54');
    const submitButton = await screen.findByRole('button');

    fireEvent.change(commentArea, {
      target: { value: 'this is another test string' },
    });
    fireEvent.click(submitButton);

    expect(await screen.findByText('Oops something went wrong!')).toBeTruthy();

    fireEvent.focus(commentArea);

    expect(screen.queryByText('Oops something went wrong!')).not.toBeTruthy();
  });
});
