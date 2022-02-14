import './App.css';
import { useState, useEffect } from 'react';
import { db } from "./firebase-config";
import { collection, doc, getDocs } from "firebase/firestore";
import { Container, Row, Col } from 'react-bootstrap';
import Login from "./components/Login"
import Signup from "./components/Signup"
import { Routes, Route } from "react-router-dom"


function App() {

  return (
    <Container>
      <Row>
        <Col>
        <Routes>
          <Route path = "/" element = {<Login />} />
          <Route path = "/signup" element = {<Signup />} />
        </Routes>
        </Col>
      </Row>
    </Container>
  );
}

export default App;