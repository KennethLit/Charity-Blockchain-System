import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/js/Login';
import Register from './pages/js/Register';
import Home from './pages/js/Home'; 
import CreatePage from './pages/js/CreatePage';
import DonationPage from './pages/js/DonationPage';
import NavBar from './pages/js/NavBar';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/create" element={isLoggedIn ? <CreatePage /> : <Navigate to="/login" />} />
        <Route path="/donation/:charityName" element={isLoggedIn ? <DonationPage /> : <Navigate to="/login" />} />

      </Routes>
    </Router>
  );
}

export default App;
