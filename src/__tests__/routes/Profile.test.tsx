import { render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Profile from 'src/routes/profile/Profile';
import { UserContextProvider } from 'src/context/UserContext';

describe('<Profile />', () => {
  it('should without crashing', async () => {
    const history = createBrowserHistory();
    const userId = '487j-fdslkj23-fds3j34j';
    history.push(`/profile/${userId}`);

    render(
      <Router history={history}>
        <UserContextProvider>
          <Profile />
        </UserContextProvider>
      </Router>
    );
  });
});
