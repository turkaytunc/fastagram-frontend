import React, { useEffect, useState } from 'react';
import './signup.scss';
import { FaFacebookSquare } from 'react-icons/fa';
import { signupValidator } from 'src/helpers/joiValidators';
import instagramLogo from 'src/images/instagram-login.png';
import { InputBox } from 'src/components';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [inputError, setInputError] = useState('');
  const [showPassword, setShowPassword] = useState(true);

  useEffect(() => {
    document.title = 'Signup • Instagram';
    Boolean(username && password && email);
  }, []);

  const handleSignup = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      await signupValidator(username, password, email);
    } catch (error) {
      setInputError(error.message);
    }
  };

  return (
    <section className="signup-container">
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
          item={email}
          setItem={setEmail}
          setError={setInputError}
          isPassword={false}
          placeholder="Email"
        />
        <InputBox
          item={fullname}
          setItem={setFullname}
          setError={setInputError}
          isPassword={false}
          placeholder="Full Name"
        />
        <InputBox
          item={username}
          setItem={setUsername}
          setError={setInputError}
          isPassword={false}
          placeholder="Username"
        />

        <div className="flex w-68 rounded-sm">
          <InputBox
            item={password}
            setItem={setPassword}
            setError={setInputError}
            isPassword={showPassword}
            placeholder="Password"
          />
          <div className="w-12 border border-l-0 rounded-sm mt-2">
            <button
              className="w-full h-10 text-sm font-medium"
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              {showPassword ? 'Show' : 'Hide'}
            </button>
          </div>
        </div>
        <button className="signup-form-button" type="submit">
          Sign up
        </button>
      </form>
      {inputError && <div className="mt-5 text-red-500 text-sm">{inputError}</div>}
      <div className="text-sm w-68 text-gray-400 mt-5">
        Have an account? <a href="/login">Log in</a>
      </div>
    </section>
  );
};
export default Signup;
