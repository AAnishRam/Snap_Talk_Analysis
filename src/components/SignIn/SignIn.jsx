// src/components/SignIn/SignIn.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../features/userSlice';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(email)) {
      errors.email = 'Invalid email address';
    }

    if (!password) {
      errors.password = 'Password is required';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const storedUserDetails = JSON.parse(localStorage.getItem('userDetails'));

      if (storedUserDetails && storedUserDetails.email === email && storedUserDetails.password === password) {
        dispatch(setUser(storedUserDetails));
        console.log('Sign in successful');
        navigate('/dashboard');
      } else {
        setErrors({ form: 'Invalid email or password' });
      }
    }
  };

  return (
    <div className='main-container__sign-in'>
      <div className='sign-in'>
        <h2 className='sign-up__title'>Sign In</h2>
        <span className='sign-up__text'>Welcome to SKCT Speech Analyzer!</span>

        <form className='form' onSubmit={handleSubmit}>
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
          {errors.form && <span className="error">{errors.form}</span>}
          <div className='form__input-group pt-1'>
            <button className="btn-signup">
              <span className="btn__text">Sign In</span>
            </button>
          </div>

          <span className="form__divider">Or sign in with</span>

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
            <p>Don't have an account?
              <Link to={'/signup'}>
                <a className="underline"> Sign Up</a>
              </Link> 
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
