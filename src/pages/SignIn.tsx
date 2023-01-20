import React from "react";
import { Link } from "react-router-dom";
import "pages/SignIn.css";

function SignIn() {
  return (
    <div className='SignInPage'>
      <div className='SignIn'>
        <h2>Sign In</h2>
        <form className='SignInForm'>
          <label htmlFor='email'>email</label>
          <input type='email' placeholder='email' id='email' name='email' />
          <label htmlFor='password'>password</label>
          <input type='password' placeholder='***********' id='password' name='password' />
          <button type='submit'>
            <i className='fa-solid fa-arrow-right'></i>
          </button>
        </form>
        <Link to='/SignUp' className='LinkSignUp'>
          CREATE ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export default SignIn;
