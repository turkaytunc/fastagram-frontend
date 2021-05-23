import { screen, render } from '@testing-library/react';
import { PhotosContainer } from 'src/components';

describe('<PhotosContainer />', () => {
  it('should render without crashing', async () => {
    render(<PhotosContainer photos={[{ id: '324', data: 'j234h2g34' }]} />);
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });

  it('should render without empty id', async () => {
    render(<PhotosContainer photos={[{ id: '', data: 'j234h2g34' }]} />);
    expect(await screen.findByRole('img')).toBeInTheDocument();
  });
});
