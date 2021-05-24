import { screen, render, fireEvent } from '@testing-library/react';
import Heart from 'src/components/heart/Heart';

describe('Heart', () => {
  it('should render without crashing', async () => {
    render(<Heart photoId="fdskj" userId="3244-h423-4234" size="30" />);

    fireEvent.click(await screen.findByRole('button'));
  });
});
