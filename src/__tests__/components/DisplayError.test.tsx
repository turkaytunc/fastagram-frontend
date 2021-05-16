import { screen, render } from '@testing-library/react';
import { DisplayError } from '../../components';

describe('<DisplayError/>', () => {
  it('should render without passing color value', async () => {
    render(<DisplayError message="this is a error test string" />);

    expect(await screen.findByText('this is a error test string')).toBeInTheDocument();
    expect(
      await (
        await screen.findByText('this is a error test string')
      ).style.backgroundColor
    ).toBe('red');
  });

  it('should render with color value', async () => {
    render(<DisplayError message="this is a error test string" color="green" />);

    expect(await screen.findByText('this is a error test string')).toBeInTheDocument();
    expect(
      await (
        await screen.findByText('this is a error test string')
      ).style.backgroundColor
    ).toBe('green');
  });
});
