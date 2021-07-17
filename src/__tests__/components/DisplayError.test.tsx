import { screen, render } from '@testing-library/react';
import { DisplayError } from 'src/components';

describe('<DisplayError />', () => {
  it('should render without passing color value and use default value which is "red"', async () => {
    render(<DisplayError message="this is a error test string" />);

    const errorMsg = await screen.findByText('this is a error test string');

    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg.style.backgroundColor).toBe('red');
  });

  it('should render with color value', async () => {
    render(<DisplayError message="this is a error test string" color="green" />);

    const errorMsg = await screen.findByText('this is a error test string');

    expect(errorMsg).toBeInTheDocument();
    expect(errorMsg.style.backgroundColor).toBe('green');
  });
});
