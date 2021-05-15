import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import UserContext from 'src/context/UserContext';
import Dashboard from './routes/dashboard/Dashboard';

const Login = lazy(() => import('src/routes/login/Login'));
const Signup = lazy(() => import('src/routes/signup/Signup'));
const Profile = lazy(() => import('src/routes/profile/Profile'));

function App() {
  return (
    <BrowserRouter>
      <UserContext>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:id" component={Profile} />
              <Route path="*" component={() => <div>404</div>} />
            </Switch>
          </div>
        </Suspense>
      </UserContext>
    </BrowserRouter>
  );
}

export default App;
