import { render, screen } from '@testing-library/react';
import App from '../App';

it('should render without crashing', async () => {
  render(<App />);
});
