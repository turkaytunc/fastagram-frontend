import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { UploadModal } from 'src/components';

describe('<UploadModal />', () => {
  const history = createBrowserHistory();
  it('should render without crash', () => {
    history.push('/');
    render(
      <Router history={history}>
        <div>
          <UploadModal isOpen={false} setIsOpen={jest.fn} />
        </div>
        <div id="upload-modal" />
      </Router>
    );
  });
});
