import { screen, render } from '@testing-library/react';
import { MiniProfile } from 'src/components';

jest.spyOn(window, 'fetch');

describe('<MiniProfile />', () => {
  it('should fail to fetch and render error', async () => {
    (window.fetch as jest.Mock).mockRejectedValue(new Error('Cannot fetch data!!'));

    render(<MiniProfile userId="4320-jlj432hl23-42l3jk" />);

    expect(await screen.findByText('Cannot fetch data!!')).toBeTruthy();
  });

  it('should fetch and get error', async () => {
    (window.fetch as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => ({ message: 'some error text' }),
    });

    render(<MiniProfile userId="4320-jlj432hl23-42l3jk" />);

    expect(await screen.findByText('some error text')).toBeTruthy();
  });
});
