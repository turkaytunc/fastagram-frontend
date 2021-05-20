import React, { useContext, useEffect, useState } from 'react';
import './signup.scss';
import instagramLogo from 'src/images/instagram-login.png';
import { useHistory, Link } from 'react-router-dom';
import { FaFacebookSquare } from 'react-icons/fa';
import { signupValidator } from 'src/helpers/joiValidators';
import { FakePhoneScreen, InputBox } from 'src/components';
import { signup } from 'src/api';
import { UserContext } from 'src/context/UserContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  const user = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    document.title = 'Signup • Instagram';
  }, []);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signupValidator(username, password, email);
      const response = await signup(username, email, password);
      const data = await response.json();

      if (data.message) {
        setInputError(data.message);
        return;
      }

      user?.setUser(data.user);
      window.localStorage.setItem('auth', data.token);
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
      <section className="signup-container md:border md:border-gray-300 p-10">
        <img className="w-48" src={instagramLogo} alt="instagram" />
        <section className="w-68 mt-5 text-gray-400">
          Sign up to see photos and videos from your friends.
        </section>
        <div className="mt-2 mb-7">
          <button type="button" className="signup-form-button flex justify-center items-center">
            <FaFacebookSquare className="mr-2" />
            Continue with Facebook
          </button>
        </div>
        <div className="relative border-t border-gray-300 w-68">
          <span className="absolute -top-2 bg-gray-50 text-gray-400 w-14 left-28 text-sm">OR</span>
        </div>
        <form onSubmit={(e) => handleSignup(e)}>
          <InputBox
            testId="email-input"
            item={email}
            setItem={setEmail}
            setError={setInputError}
            isPassword={false}
            placeholder="Email"
          />
          <InputBox
            testId="fullname-input"
            item={fullname}
            setItem={setFullname}
            setError={setInputError}
            isPassword={false}
            placeholder="Full Name"
          />
          <InputBox
            testId="username-input"
            item={username}
            setItem={setUsername}
            setError={setInputError}
            isPassword={false}
            placeholder="Username"
          />

          <div className="flex w-68 rounded-sm">
            <InputBox
              testId="password-input"
              item={password}
              setItem={setPassword}
              setError={setInputError}
              isPassword={showPassword}
              placeholder="Password"
            />
            <div className="w-12 border border-l-0 rounded-sm mt-2">
              <button
                data-testid="show-hide-button"
                className="w-full h-10 text-sm font-medium"
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Show' : 'Hide'}
              </button>
            </div>
          </div>
          <button
            style={{
              backgroundColor: `${
                username.length > 5 && password.length > 5 && email.length > 5
                  ? '#0095f6'
                  : 'rgba(0,149,246,.3)'
              }`,
            }}
            className="signup-form-button"
            type="submit"
            disabled={username.length < 5 || password.length < 5 || email.length < 5}
          >
            Sign up
          </button>
        </form>
        {inputError && <div className="mt-5 w-68 text-red-500 text-sm">{inputError}</div>}
        <section className="text-sm w-68 text-gray-400 mt-5">
          By signing up, you agree to our <span className="font-medium">Terms , Data Policy</span>{' '}
          and <span className="font-medium">Cookies Policy</span> .
        </section>
        <div className="text-sm w-68 text-gray-400 mt-5">
          Have an account? <Link to="/login">Log in</Link>
        </div>
      </section>
    </section>
  );
};
export default Signup;
