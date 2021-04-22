import React, { useEffect, useState } from 'react';
import './login.scss';
import { loginValidator } from 'src/helpers/joiValidators';
import instagramLogo from 'src/images/instagram-login.png';
import { InputBox } from 'src/components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

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
        <InputBox
          item={username}
          setItem={setUsername}
          setError={setInputError}
          isPassword={false}
          placeholder="username"
        />

        <div className="flex w-72 mt-2 rounded-sm">
          <InputBox
            item={password}
            setItem={setPassword}
            setError={setInputError}
            isPassword={showPassword}
            placeholder="password"
          />
          <div className="w-12 border border-l-0 rounded-sm">
            <button
              className="w-full h-10 text-sm font-medium"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Show' : 'Hide'}
            </button>
          </div>
        </div>
        <div className="w-72 text-right mt-3 font-light">
          <a className="text-sm " href="/login">
            Forgot password?
          </a>
        </div>
        <button className="login-button w-72 mt-5 h-8 rounded-sm text-white" type="submit">
          Login
        </button>
      </form>
      <div className="text-sm text-gray-400 mt-5">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
      {inputError && <div className="mt-5 text-gray-600">{inputError}</div>}
    </section>
  );
};
export default Login;
