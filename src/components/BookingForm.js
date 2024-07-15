import React, { useState } from 'react';
import BookingConfirmation from './BookingConfirmation';

const BookingForm = () => {
  // State variables
  const [selectedHorse, setSelectedHorse] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation (optional, add checks for required fields)

    // Booking logic (placeholder, replace with actual booking functionality)
    console.log('Booking details:', {
      horse: selectedHorse,
      date,
      time,
      name,
      email,
      phone,
    });

    // Set booking confirmed and reset form
    setBookingConfirmed(true);
    setSelectedHorse('');
    setDate(new Date());
    setTime('');
    setName('');
    setEmail('');
    setPhone('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Book Your Horse Ride</h2>

      {/* Horse selection */}
      <label htmlFor="horse">Select Horse:</label>
      <select id="horse" value={selectedHorse} onChange={(e) => setSelectedHorse(e.target.value)}>
        <option value="">-- Choose a Horse --</option>
        <option value="Horse 1">Horse 1</option>
        <option value="Horse 2">Horse 2</option>
        <option value="Horse 3">Horse 3</option>
        <option value="Horse 4">Horse 4</option>
      </select>

      {/* Date and Time selection */}
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date.toISOString().split('T')[0]} onChange={(e) => setDate(new Date(e.target.value))} />

      <label htmlFor="time">Time:</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)}>
        <option value="">-- Choose Time --</option>
        {/* Dynamically populate time slots based on business hours (3 PM - 12 AM) */}
        {getHours(3, 24).map((hour) => (
          <option key={hour} value={hour}>
            {hour}:00
          </option>
        ))}
      </select>

      {/* User information */}
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

      <label htmlFor="phone">Phone Number:</label>
      <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

      <button type="submit">Book Now</button>
      {bookingConfirmed && <BookingConfirmation bookedHorse={selectedHorse} />}
    </form>
  );
};

export default BookingForm;

// Helper function to generate available time slots (replace with actual logic)
function getHours(start, end) {
  const hours = [];
  for (let i = start; i < end; i++) {
    hours.push(i);
  }
  return hours;
}