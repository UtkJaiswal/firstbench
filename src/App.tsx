import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login'; // Adjust the path if necessary
import Home from './pages/home';
import EmailVerificationPending from './pages/login/EmailVerificationPending';
// import Signup from './pages/signup';
import Dashboard from './pages/dashboard';
function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/signup" element={<Signup />} /> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login/email-verification-pending" element={<EmailVerificationPending />}/>
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
