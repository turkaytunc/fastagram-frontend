import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';
import Dashboard from './routes/dashboard/Dashboard';

const Login = lazy(() => import('src/routes/login/Login'));
const Register = lazy(() => import('src/routes/register/Register'));

function App() {
  return (
    <BrowserRouter basename="/fastagram">
      <Suspense fallback={<div className="text-center">Loading...</div>}>
        <div className="app-container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile/:id" component={() => <div>profile</div>} />
            <Route path="*" component={() => <div>404</div>} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
