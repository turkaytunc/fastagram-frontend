import { screen, render } from '@testing-library/react';
import FileUpload from 'src/components/file-upload/FileUpload';

describe('FileUpload Route ', () => {
  it('should render without crash', async () => {
    render(<FileUpload fill="red" iconSize="25" multiple={false} onDone={jest.fn} />);
  });
});
