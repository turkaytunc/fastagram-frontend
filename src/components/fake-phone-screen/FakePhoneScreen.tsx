import React from 'react';
import './fake-phone-screen.scss';
import phoneInner from 'src/images/insta-login-phone-inner.jpg';
import phoneOuter from 'src/images/insta-login-phone.png';

const FakePhoneScreen = () => {
  return (
    <section className="relative mt-10 ml-10">
      <img src={phoneOuter} alt="phone outer" />
      <div className="phone-inner absolute">
        <img src={phoneInner} alt="phone inner" />
      </div>
    </section>
  );
};

export default FakePhoneScreen;
