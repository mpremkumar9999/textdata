import React from 'react';
import Navbar from '../components/Navbar';
import './App.css';
import Form from '../components/Form';
import Footer from '../components/Footer';
import About from '../components/About'; // Import About component
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;