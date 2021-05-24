import { screen, render, fireEvent } from '@testing-library/react';
import { Comment } from 'src/components';

describe('<Comment />', () => {
  it('should fire change event', async () => {
    render(<Comment photoId="54" />);

    const commentArea = await screen.findByTestId('comment-area-54');
    expect(commentArea).toBeInTheDocument();

    fireEvent.change(commentArea, {
      target: { value: 'this is a test string' },
    });

    expect(commentArea).toHaveValue('this is a test string');
  });
});
