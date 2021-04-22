import React, { useEffect, useState } from 'react';
import './login.scss';
import { loginValidator } from 'src/helpers/joiValidators';
import instagramLogo from 'src/images/instagram-login.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    document.title = 'Login • Instagram';
  }, []);

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
      <img className="w-40" src={instagramLogo} alt="instagram" />
      <form onSubmit={(e) => handleLogin(e)}>
        <label className="relative w-72" htmlFor="username">
          <span
            className={`absolute text-gray-400 ${
              username ? 'top-0 left-2 text-xs' : 'top-3 left-4 text-sm'
            }`}
          >
            username
          </span>
          <input
            className="login-input"
            type="text"
            id="username"
            onChange={(event) => setUsername(event.target.value)}
            onFocus={() => {
              setInputError('');
            }}
          />
        </label>
        <label className="relative w-72 mt-2" htmlFor="password">
          <span
            className={`absolute text-gray-400 ${
              password ? 'top-0 left-2 text-xs' : 'top-3 left-4 text-sm'
            }`}
          >
            password
          </span>
          <input
            className="login-input"
            type="password"
            id="password"
            onChange={(event) => setPassword(event.target.value)}
            onFocus={() => {
              setInputError('');
            }}
          />
        </label>
        <button className="w-full" type="submit">
          Login
        </button>
      </form>
      {inputError}
    </section>
  );
};
export default Login;
