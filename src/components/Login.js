import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import GoogleButton from "react-google-button";

const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [err, setErr] = useState();
    const { login, googleSignIn } = useUserAuth();
    const navigate = useNavigate();
    const handleLogin = async (e) =>{
      e.preventDefault();
      setErr("");
      try {
          await login(email, password);
          navigate("/preference")
      } catch (err) {
          setErr(err.message)
      }
  }
  const handleGoogleSignIn = async (e) =>{
    e.preventDefault();
    setErr("");
    try {
        await googleSignIn();
        navigate("/preference")
    } catch (err) {
        setErr(err.message)
    }
}
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Firebase Auth Login</h2>
        {err && <Alert variant="danger">{err}</Alert>}
        <Form onSubmit={ handleLogin }>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Email address"
              onChange={ (e) => setEmail(e.target.value) }/>
          </Form.Group>
          <br />
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={ (e) => setPassword(e.target.value) }/>
          </Form.Group>
          <br />
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Log In
            </Button>
          </div>
          <br />
          <div className="p-4 box mt-3 text-center">
            <Link to="/forgotPassword">Forgot Password</Link>
          </div>
          <br />
          <div className="text-center">
            <GoogleButton onClick={handleGoogleSignIn}/>
          </div>
          <br />
          <div className="p-4 box mt-3 text-center">
            Don't have an account? <Link to="/signup">Sign up</Link>
          </div>
        </Form>
      </div>
      
    </>
  );
};

export default Login;