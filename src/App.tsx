import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import UserContext from 'src/context/UserContext';
import useAuth from 'src/hooks/useAuth';
import Dashboard from './routes/dashboard/Dashboard';

const Login = lazy(() => import('src/routes/login/Login'));
const Signup = lazy(() => import('src/routes/signup/Signup'));

function App() {
  const { user } = useAuth();
  return (
    <BrowserRouter basename="/fastagram">
      <UserContext.Provider value={user}>
        <Suspense fallback={<div className="text-center">Loading...</div>}>
          <div className="app-container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/profile/:id" component={() => <div>profile</div>} />
              <Route path="*" component={() => <div>404</div>} />
            </Switch>
          </div>
        </Suspense>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
