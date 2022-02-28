import './App.css';
import { useState, useEffect } from 'react';
import { db } from "./firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";

import { Container, Row, Col } from 'react-bootstrap';
import Login from "./components/Login"
import Signup from "./components/Signup"
import Home from "./components/Home"
import ApiTest from "./components/ApiTest"
import { Routes, Route } from "react-router-dom"
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from "./context/ProtectedRoute";
import PreferenceForm from "./components/PreferenceForm";

function App() {

  return (
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
            <Route path = "/" element = {<Login />} />
            <Route path = "/signup" element = {<Signup />} />
            <Route path = "/home" element = {<ProtectedRoute> <Home /> </ProtectedRoute>} />
            <Route path = "/getdata" element = {<ApiTest />} />
            <Route path="/preference" element={ <PreferenceForm /> } />
          </Routes>
        </UserAuthContextProvider> 
        </Col>
      </Row>
    </Container>
  );
}

export default App;