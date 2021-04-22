import React, { useState } from 'react';
import './login.scss';
import { loginValidator } from 'src/helpers/joiValidators';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await loginValidator(username, password);
    } catch (error) {
      setInputError(error.message);
    }
  };

  return (
    <section className="login-container">
      <form onSubmit={(e) => handleLogin(e)}>
        <input
          type="text"
          placeholder="username"
          onChange={(event) => setUsername(event.target.value)}
          onFocus={() => setInputError('')}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(event) => setPassword(event.target.value)}
          onFocus={() => setInputError('')}
        />
        <button type="submit">Login</button>
      </form>
      {inputError}
    </section>
  );
};
export default Login;
