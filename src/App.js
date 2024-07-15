import React, { useState } from 'react';
import './App.css';
import logo from './logo.svg';
import { Link, Route, Routes } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import store from './redux/store';
import { About } from './components/about';
import { Contact } from './components/contact';

function App() {
  const [isBackgroundVisible, setIsBackgroundVisible] = useState(true);
  const [showBookingForm, setShowBookingForm] = useState(false);

  const handleBookNow = () => {
    setShowBookingForm(true);
  };

  return (
    <div className="App">

    {/* Routes */}
    <Routes>
      <Route path="src\components\about.js" element={<About />}/>
      <Route path="src\components\contact.js" element={<Contact />}/>
      <Route path="src\components\BookingForm.js" element={<BookingForm />}/>
      <Route path="src\components\about.js" element={<About />}/>

    </Routes>


      {/* Background Image */}
      <div className={`background-image ${isBackgroundVisible ? 'visible' : ''}`}>
        <img src="/horse.png" alt="Horse Background"/>
      </div>

      {/* Navbar */}
      <nav className="navbar">
        {/* Logo (Top-Left) */}
        <a href="/" className="logo">
          <img src={logo} alt="Logo" />
        </a>

        {/* Navigation Links (Right-Aligned) */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Book Now" onClick={handleBookNow}>Book Now</Link>
          </li>
          <li>
            <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="BookingForm_main-content">
        {showBookingForm && <BookingForm />}
      </div>
    </div>
  );
}

export default App;