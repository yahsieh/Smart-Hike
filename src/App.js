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
import ForgotPassword from './components/ForgotPassword';
import HikingGear from './components/HikingGear';
import Precautions from './components/Precautions';
import Favorites from './components/Favorites';
import TipsGear from './components/TipsGear';
import City from './components/City';


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
              <Route path="/TipsGear" element={<TipsGear />} />
              <Route path="/account" element={<Account />} />
              <Route path="/forgotpassword" element={<ForgotPassword />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/City" element={<City />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;