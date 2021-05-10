import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './login.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { loginValidator } from 'src/helpers/joiValidators';
import instagramLogo from 'src/images/instagram-login.png';
import { FakePhoneScreen, InputBox } from 'src/components';
import { loginUser } from 'src/api';
import { UserContext } from 'src/context/UserContext';
import useAuth from 'src/hooks/useAuth';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(true);
  const user = useContext(UserContext);
  const history = useHistory();
  const [err] = useAuth();

  useEffect(() => {
    document.title = 'Login • Instagram';
  }, []);

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await loginValidator(email, password);
      const response = await loginUser(email, password);

      const data = await response.json();

      if (data.message) {
        setInputError(data.message);
        return;
      }
      user?.setUser(data);
      history.push('/');
    } catch (error) {
      setInputError(error.message);
    }
  };

  return (
    <section className="flex justify-center">
      <div className="hidden lg:block">
        <FakePhoneScreen />
      </div>
      <section className="login-container md:border md:border-gray-300 p-10">
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
            item={email}
            setItem={setEmail}
            setError={setInputError}
            isPassword={false}
            placeholder="Email"
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
          <button
            style={{
              backgroundColor: `${
                email.length > 5 && password.length > 5 ? '#0095f6' : 'rgba(0,149,246,.3)'
              }`,
            }}
            className="form-button"
            type="submit"
            disabled={email.length < 5 || password.length < 5}
          >
            Log in
          </button>
        </form>
        {inputError && <div className="mt-5 w-68 text-red-500 text-sm">{inputError}</div>}
        <div className="text-sm w-68 text-gray-400 mt-5">
          Don't have an account? <a href="/signup">Sign up</a>
        </div>
      </section>
      <div>{user?.user?.email}</div>
    </section>
  );
};
export default Login;
