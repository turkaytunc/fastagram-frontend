import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UploadModal } from 'src/components';

describe('<UploadModal />', () => {
  const history = createBrowserHistory();
  it('should render without crash', async () => {
    history.push('/');
    const setIsOpen = jest.fn;
    render(
      <Router history={history}>
        <div>
          <UploadModal isOpen={false} setIsOpen={setIsOpen} />
        </div>
        <div id="upload-modal" />
      </Router>
    );
  });
});
