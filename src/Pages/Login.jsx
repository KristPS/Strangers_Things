import { useState } from 'react';
import AuthForm from '../Components/AuthForm';

export default function Login({ setToken }) {
  function handleSubmit(e) {}
  //sign in with correct username/password combination
  function handleSubmit(e, username, password) {
    e.preventDefault();
    console.log
  }
  return (
    <div>
      <h1>Login</h1>
      <AuthForm buttonText='Login' handleSubmit={handleSubmit}/>
    </div>
  );
}
