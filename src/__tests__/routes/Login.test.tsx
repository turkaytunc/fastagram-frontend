import { screen, render } from '@testing-library/react';
import Login from 'src/routes/login/Login';

describe('Login Route ', () => {
  it('should render without crash', async () => {
    render(<Login />);
  });
});
