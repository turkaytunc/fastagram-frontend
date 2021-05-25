import { screen, render, fireEvent } from '@testing-library/react';
import { Search } from 'src/components';

describe('<Search />', () => {
  it('should fire change event', async () => {
    render(<Search />);

    fireEvent.change(await screen.findByRole('searchbox'), {
      target: { value: 'searching things' },
    });

    expect(await screen.findByRole('searchbox')).toHaveValue('searching things');
  });
});
