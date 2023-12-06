
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Team from './Components/Team';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Signin from './Login/Signin';
import Signup from './Login/SignUp';
import Reservation from './Reservation/Reservation';
import Checkout from './Reservation/Checkout';

function App() {
  return (
    <Router>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Reservation" element={<Reservation />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  </Router>
  );
}

export default App;
