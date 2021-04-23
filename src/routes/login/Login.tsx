import React, { useContext, useEffect, useState } from 'react';
import './login.scss';
import { FaFacebookSquare } from 'react-icons/fa';
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
    <section className="login-container border border-gray-300 py-10">
      <img className="w-48" src={instagramLogo} alt="instagram" />
      <div className="my-7">
        <button type="button" className="form-button flex justify-center items-center">
          <FaFacebookSquare className="mr-2" />
          Continue with Facebook
        </button>
      </div>
      <div className="relative border-t border-gray-300 w-68">
        <span className="absolute -top-2 bg-gray-50 text-gray-400 w-14 left-28 text-sm">OR</span>
      </div>
      <form onSubmit={(e) => handleLogin(e)}>
        <InputBox
          item={username}
          setItem={setUsername}
          setError={setInputError}
          isPassword={false}
          placeholder="Username"
        />

        <div className="flex w-68 mt-2 rounded-sm">
          <InputBox
            item={password}
            setItem={setPassword}
            setError={setInputError}
            isPassword={showPassword}
            placeholder="Password"
          />
          <div className="w-12 border mt-2 border-l-0 rounded-sm">
            <button
              className="w-full h-10 text-sm font-medium"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Show' : 'Hide'}
            </button>
          </div>
        </div>
        <div className="w-68 text-right mt-3 font-light">
          <a className="text-sm " href="/login">
            Forgot password?
          </a>
        </div>
        <button className="form-button" type="submit">
          Log in
        </button>
      </form>
      {inputError && <div className="mt-5 w-68 text-red-500 text-sm">{inputError}</div>}
      <div className="text-sm w-68 text-gray-400 mt-5">
        Don't have an account? <a href="/signup">Sign up</a>
      </div>
    </section>
  );
};
export default Login;
