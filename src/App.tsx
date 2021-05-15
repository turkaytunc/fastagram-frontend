import { lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';
import Profile from 'src/routes/profile/Profile';
import { UserContextProvider } from './context/UserContext';

const Login = lazy(() => import('src/routes/login/Login'));
const Signup = lazy(() => import('src/routes/signup/Signup'));
const Dashboard = lazy(() => import('src/routes/dashboard/Dashboard'));

function App() {
  return (
    <UserContextProvider>
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/profile/:userId" component={Profile} />
            <Route path="*" component={() => <div>404</div>} />
          </Switch>
        </div>
      </Suspense>

      <div id="upload-modal" />
    </UserContextProvider>
  );
}

export default App;
