import './App.css';
import React from "react";
//import logo from "./logo.svg";
//import DarkMode from "./DarkMode";

import { Container, Row, Col, Nav } from 'react-bootstrap';
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Routes, Route } from "react-router-dom";
import { UserAuthContextProvider } from './context/UserAuthContext';
import ProtectedRoute from "./context/ProtectedRoute";
import PreferenceForm from "./components/PreferenceForm";
import Account from "./components/Account";
import HikingClothes from './components/HikingClothes';
import Settings from './components/Settings';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <NavBar></NavBar>
            <Routes>
              <Route path="/" element={< Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/preference" element={<ProtectedRoute> <PreferenceForm /> </ProtectedRoute>} />
              <Route path="/hikingclothes" element={<HikingClothes/>} />
              <Route path="/settings" element={<Settings/>}/>   
              <Route path="/account" element={<Account />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;