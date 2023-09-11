import { useState, useEffect } from 'react';
import { Login } from './Pages/Login'
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleSider from '../components/Siders/SimpleSider';

 const COHORT_NAME = "2302-acc-et-web-pt-a"
 const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`

 const login = async () => {

    try {
      const response = await fetch(`${BASE_URL}/users/login`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user: {
            username: '',
            password: ''
          }
        })
      });
      const result = await response.json();
      console.log(result);
      return result
    } catch (err) {
      console.error(err);
    }
  }

function Login({ history }) {
  const [loading, setLoading] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState({
      email: "",
      password: ""
  });
  const { setUserData } = useContext(Context)

  const handleChanges = (e) => {
      e.preventDefault();
      setUser({ ...user, [e.target.name]: e.target.value });
  }

  const handleSubmitLogin = (e) => {
      e.preventDefault();
      setLoading(true);
      loginUser(user)
          .then(res => {
              if (!res.error) {
                  setUserData(res.user)
                  history.push('/')
              } else {
                  setLoading(false);
                  setError(res.error.message);
                  setAlertShow(true);
              }
          }).catch(err => console.error('error from login: ', err))
  }

  return (
      <>
          <SimpleSider />
          <div className="container auth-form">
              <h1 className="auth-heading">Login</h1>
              <Form className="col-lg-6" onSubmit={handleSubmitLogin}>
                  {alertShow &&
                      <Alert variant="danger" onClose={() => setAlertShow(false)} dismissible>
                          <p>
                              {error}
                          </p>
                      </Alert>
                  }
                  <Form.Group controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChanges} required />
                  </Form.Group>
                  <Form.Group controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" name="password" placeholder="Password" onChange={handleChanges} required />
                  </Form.Group>
                  {loading ?
                      <Button className="col-lg-12 btnAuth" variant="dark" disabled >
                          Please wait... <Spinner animation="border" />
                      </Button>
                      :
                      <Button variant="dark" className="col-lg-12 btnAuth" type="submit">Login</Button>
                  }
                  <p className="bottom-msg-paragraph">Don't have an account? <Link to="/auth/register">Register</Link>!</p>
              </Form>
          </div>
      </>
  )
}

export default function Login
