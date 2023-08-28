import { useState } from "react";
import AuthForm from "../Components/AuthForm";
import { useNavigate } from "react-router-dom";
import NavBar from "../Components/NavBar.jsx";

const COHORT_NAME = "2302-acc-et-web-pt-a"
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

export default function LoginPage({ setToken }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [errorMessage, setErrorMessage] = useState("")
  //const [token, setToken] = useState(localStorage.getItem("token"));
  const [error, setError] = useState(null)

  const navigate = useNavigate()
  async function submitForm(e) {
    e.preventDefault()
    if (password.length < 8) 
    {
      setErrorMessage("Password is too short");
    } else {
      const signUp = async() => {
        try {
          const response = await fetch (`${BASE_URL}/users/register`
        
          )}
        }
        const login = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users/login`, 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user: {
              username,
              password,
            }
          })
        })
        const { token } = await response.json();
        localStorage.setItem("token", token);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    }
    login()
  }
    return (
      <div>
        <NavBar />
        <h1>Login</h1>
        <AuthForm buttonText='Login' />
        <form onSubmit={submitForm}>
          <label htmlFor="username">Username: </label>
          <input
            value={username}
            type="username"
            id="username"
            onChange={(e) => {
              setErrorMessage("");
              setUsername(e.target.value);
            }}
          />
          <br></br>
          <label htmlFor="password">Password: </label>
          <input
            value={password}
            type="password"
            id="password"
            onChange={(e) => {
              setErrorMessage("");
              setPassword(e.target.value);
            }}
          />
          <p>{errorMessage}</p>
          <button type="submit">Login</button>
        </form>
      </div>
    )
          }
}
