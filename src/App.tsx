import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './app.scss';

const Login = lazy(() => import('src/routes/login/Login'));
const Register = lazy(() => import('src/routes/register/Register'));

function App() {
  return (
    <BrowserRouter basename="fastagram">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="app-container">
          Hello
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
