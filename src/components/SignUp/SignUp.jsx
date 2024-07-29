import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name) {
      errors.name = 'Full Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    } else if (password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      // Store user details in local storage
      const userDetails = { name, email, password };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      setSuccessMessage('Account created successfully. You can now sign in.');

      setTimeout(() => {
        window.location.href = '/signin';
      }, 1000);

    }
  };

  return (
    <div className='main-container'>
      <div className='sign-up'>
        <h2 className='sign-up__title'>Create an account</h2>
        <span className='sign-up__text'>Welcome to SKCT Speech Analyzer! Let’s get you set up!</span>

        <form className='form' onSubmit={handleSubmit}>
          <div className="form__input-group form__input-group--mb-0">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              className="form__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form__input-group form__input-group--mb-0">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              className="form__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form__input-group form__input-group--mb-0">
            <div className="form__input-wrapper">
              <label htmlFor="password">Password</label>
            </div>
            <input
              id="password"
              className="form__input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <span className="error">{errors.password}</span>}
          </div>
          <div className='form__input-group pt-1'>
            <button className="btn-signup">
              <span className="btn__text">Create an account</span>
            </button>
          </div>
          <div className='success-message__container'>
          {successMessage && <div className="success-message">{successMessage}   </div>}
          </div>
          <span className="form__divider">Or sign up with</span>

          <div className="login-socials">
            <div className="login-socials__btn login-socials__btn--google">
              <span className="login-socials__icon login-socials__icon--google"></span>
              <span className="login-socials__text">Google</span>
            </div>
            <div className="login-socials__btn login-socials__btn--facebook">
              <span className="login-socials__icon login-socials__icon--facebook"></span>
              <span className="login-socials__text">Facebook</span>
            </div>
            <div className="login-socials__btn login-socials__btn--apple">
              <span className="login-socials__icon login-socials__icon--apple"></span>
              <span className="login-socials__text">Apple</span>
            </div>
          </div>

          <p className="agreement">By continuing, you agree to our  
            <a className="underline" href=""> Privacy Policy</a> 
            and 
            <a className="underline" href=""> Terms of Service </a>. 
          </p>

          <div className="sign-up__footer">
            <p>Already have an account?
              <Link to={'/signin'}>
                <a className="underline"> Sign in</a>
              </Link> 
            </p>
            <p>You can also use your <strong>credentials</strong> to login!</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
