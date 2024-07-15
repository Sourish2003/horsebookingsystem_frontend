import React from 'react';

const BookingConfirmation = ({ bookedHorse }) => {
  // Handle calendar invite generation here

  return (
    <div className="booking-confirmation">
      <h2>Booking Confirmed!</h2>
      <p>Thank you for booking a ride with {bookedHorse}!</p>
      {/* Display calendar invite link or download button */}
    </div>
  );
};

export default BookingConfirmation;