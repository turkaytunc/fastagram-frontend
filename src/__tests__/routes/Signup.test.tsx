import { screen, render } from '@testing-library/react';
import Signup from 'src/routes/signup/Signup';

describe('Signup Route ', () => {
  it('should render without crash', async () => {
    render(<Signup />);
  });
});
