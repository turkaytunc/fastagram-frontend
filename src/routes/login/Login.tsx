import React, { useEffect, useState } from 'react';
import './login.scss';
import { loginValidator } from 'src/helpers/joiValidators';
import instagramLogo from 'src/images/instagram-login.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

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
        <label className="relative w-72 border-1-grey" htmlFor="username">
          <span
            className={`absolute left-4 text-sm text-gray-400 ${
              username ? 'trans-effect' : ' top-3 trans-effect-none'
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
            value={username}
          />
        </label>
        <div className="flex w-72 border-1-grey mt-2">
          <label className="relative w-60 " htmlFor="password">
            <span
              className={`absolute left-4 text-sm text-gray-400 ${
                password ? 'trans-effect' : ' top-3 trans-effect-none'
              }`}
            >
              password
            </span>
            <input
              className="login-input"
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={(event) => setPassword(event.target.value)}
              onFocus={() => {
                setInputError('');
              }}
              value={password}
            />
          </label>
          <div className="w-12">
            <button
              className="w-full h-10"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>
        <button className="login-button w-72 mt-5 h-8 rounded-md text-white" type="submit">
          Login
        </button>
      </form>
      {inputError}
    </section>
  );
};
export default Login;
