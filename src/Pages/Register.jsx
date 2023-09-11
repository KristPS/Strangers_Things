import { useState } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Spinner, Alert } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import SimpleSider from '../components/Siders/SimpleSider';


const COHORT_NAME = "2302-acc-et-web-pt-a";
const BASE_URL = `https://strangers-things.herokuapp.com/api/${COHORT_NAME}`;

export default function Register({ history }) {
  const [loading, setLoading] = useState(false);
  const [alertShow, setAlertShow] = useState(false);
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    password: "",
    repeatPassword: "",
  });

  const handleChanges = (e) => {
    e.preventDefault();
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const registerUser = async (user) => {
    try {
      const response = await fetch(`${BASE_URL}/users/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${TOKEN}`, 
        },
        body: JSON.stringify({
          user,
        }),
      });
      const result = await response.json();
      console.log(result);
      return result;
    } catch (err) {
      console.error(err);
    }
  };

  const handleSubmitReg = (e) => {
    e.preventDefault();
    setLoading(true);
    registerUser(userData)
      .then((res) => {
        if (!res.error) {
          history.push("/auth/login");
        } else {
          setLoading(false);
          setError(res.error);
          setAlertShow(true);
        }
      })
      .catch((err) => console.error("error from register: ", err));
  };

  return (
    <>
      <SimpleSider />
      <div className="container auth-form">
        <h1 className="auth-heading">Register</h1>
        <Form className="col-lg-8" onSubmit={handleSubmitReg}>
          {alertShow && (
            <Alert
              variant="danger"
              onClose={() => setAlertShow(false)}
              dismissible
            >
              <p>{error}</p>
            </Alert>
          )}
          <Form.Row>
            <Form.Group controlId="forName" className="col-lg-8">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="name"
                onChange={handleChanges}
                required
              />
              <Form.Text muted>
                The name can be your real one or a username.
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="forLastName" className="col-lg-4">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                placeholder=""
                onChange={handleChanges}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formBasicEmail" className="col-lg-12">
              <Form.Label>Email address *</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="email"
                onChange={handleChanges}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group controlId="formBasicPassword" className="col-lg-6">
              <Form.Label>Password *</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChanges}
                required
              />
              <Form.Text muted>
                Your password must be 8-20 characters long
              </Form.Text>
            </Form.Group>
            <Form.Group className="col-lg-6">
              <Form.Label>Repeat Password *</Form.Label>
              <Form.Control
                type="password"
                name="repeatPassword"
                placeholder="Repeat password"
                onChange={handleChanges}
                required
              />
            </Form.Group>
          </Form.Row>
          <Button
            variant="dark"
            className="col-lg-12 btnAuth"
            type="submit"
            disabled={loading}
          >
            {loading ? (
              <>
                Please wait... <Spinner animation="border" />
              </>
            ) : (
              <>Register</>
            )}
          </Button>
          <p className="bottom-msg-paragraph">
            Already have an account? <Link to="/auth/login">Login</Link>!
          </p>
        </Form>
      </div>
    </>
  );
}
