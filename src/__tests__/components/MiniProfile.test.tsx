import { screen, render } from '@testing-library/react';
import { MiniProfile } from 'src/components';

jest.spyOn(window, 'fetch');
const mockFetch = window.fetch as jest.Mock;

describe('<MiniProfile />', () => {
  it('should fail to fetch and render error', async () => {
    mockFetch.mockRejectedValue(new Error('Cannot fetch data!!'));

    render(<MiniProfile userId="4320-jlj432hl23-42l3jk" />);

    expect(await screen.findByText('Cannot fetch data!!')).toBeInTheDocument();
  });

  it('should fetch and get error', async () => {
    mockFetch.mockResolvedValue({
      status: 400,
      json: () => ({ message: 'some error text' }),
    });

    render(<MiniProfile userId="4320-jlj432hl23-42l3jk" />);

    expect(await screen.findByText('some error text')).toBeInTheDocument();
  });
});
