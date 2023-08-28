import { useState } from "react";
import AuthForm from '../Components/AuthForm';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';

const COHORT_NAME='2302-acc-et-web-pt-a'
const BASE_URL=`https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function SignupPage({ setToken }) {
  //Sign up for an account with username and password
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const navigate = useNavigate()
  async function submitForm(e) {
    e.preventDefault();
    if (password.length < 8) {
      setErrorMessage("Password is too short");
    } else {
      const signUp = async () => {
        try {
          const response = await fetch(`${BASE_URL}/users/register`, 
            { 
              method: "POST", 
              headers: { 
                "Content-Type": "application/json" 
              }, 
              body: JSON.stringify({ 
                user: {
                  username, 
                  password 
                }
              }) 
            })
          const result = await response.json();
          const { token } = result.data;
          console.log(result);
          localStorage.setItem('token', token);
          setToken(token);
          navigate('/ProfilePage');
        } catch (err) {
          setErrorMessage(err.message);
        }
      }
      signUp();
    }
  }
  return (
    <div>
      <NavBar />
      <h1>Signup</h1>
      <AuthForm buttonText='Signup' />
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username: </label>
        <input
          value={username} 
          type="username"
          id="username"
          onChange={(e) => {
            setErrorMessage('');
            setUsername(e.target.value)
          }} 
        />
        <br></br>
        <label htmlFor="password">Password: </label>
        <input
          value={password}
          type="password"
          id="password"
          onChange={(e) => {
            setErrorMessage('');
            setPassword(e.target.value)
          }}
        />
        <p>{errorMessage}</p>
        <button type="submit">Signup</button>
      </form>
    </div>
  )

}
