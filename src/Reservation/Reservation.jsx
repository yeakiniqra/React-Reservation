import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Checkout from './Checkout';

const Reservation = () => {
  const navigate = useNavigate();
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [roomType, setRoomType] = useState('standard');
  const [roomAmount, setRoomAmount] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [availability, setAvailability] = useState('');

  const handleCheckIn = () => {
    // Simple logic for calculating total price based on room type, amount, and price per night
    const pricePerNight = getRoomPrice(roomType);
    const numberOfNights = getNumberOfNights(checkInDate, checkOutDate);
    const total = pricePerNight * numberOfNights * roomAmount;

    setTotalPrice(total);
    
    // You can implement more complex availability logic based on your needs
    const isAvailable = checkAvailability(checkInDate, checkOutDate, roomAmount);
    setAvailability(isAvailable ? 'Available' : 'Not Available');
  };

  // Placeholder functions for room price, night calculation, and availability check
  const getRoomPrice = (type) => {
    switch (type) {
      case 'deluxe':
        return 150;
      case 'premium':
        return 200;
      case 'platinum':
        return 300;
      default:
        return 100; // standard
    }
  };

  const getNumberOfNights = (checkIn, checkOut) => {
    // Placeholder logic to calculate the number of nights
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);
    const timeDiff = checkOutDate - checkInDate;
    const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return nights;
  };

  const checkAvailability = (checkIn, checkOut, amount) => {
    // Placeholder logic for availability check
    // You can implement more sophisticated logic based on your requirements
    return true;
  };
  const handleBookNow = () => {
        // Redirect to the Checkout page with the form data
        const checkoutPath = '/Checkout';
        const state = { checkInDate, checkOutDate, roomType, roomAmount, totalPrice, availability };
        navigate(checkoutPath, { state });
    

  };
 
  return (
    <div className="container mx-auto mt-8"
    >
        <div
        className="absolute inset-0 bg-cover bg-center h-screen"
        style={{
          backgroundImage: 'url("https://shorturl.at/asOW2")',
          filter: 'blur(10px)',
          height: '140%',
          zIndex: '-1',
        }}
      />
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md mb-4">
        <h2 className="text-2xl font-semibold mb-4">Reservation</h2>
        <div className="mb-4">
          <label htmlFor="checkInDate" className="block text-gray-700 text-sm font-semibold mb-2">
            Check In Date
          </label>
          <input
            type="date"
            id="checkInDate"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            value={checkInDate}
            onChange={(e) => setCheckInDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="checkOutDate" className="block text-gray-700 text-sm font-semibold mb-2">
            Check Out Date
          </label>
          <input
            type="date"
            id="checkOutDate"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            value={checkOutDate}
            onChange={(e) => setCheckOutDate(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="roomType" className="block text-gray-700 text-sm font-semibold mb-2">
            Room Type
          </label>
          <select
            id="roomType"
            className="form-select w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            value={roomType}
            onChange={(e) => setRoomType(e.target.value)}
          >
            <option value="standard">Standard</option>
            <option value="deluxe">Deluxe</option>
            <option value="premium">Premium</option>
            <option value="platinum">Platinum</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="roomAmount" className="block text-gray-700 text-sm font-semibold mb-2">
            Number of Rooms
          </label>
          <input
            type="number"
            id="roomAmount"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500"
            value={roomAmount}
            onChange={(e) => setRoomAmount(e.target.value)}
          />
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          onClick={handleCheckIn}
        >
          Check In
        </button>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Total Price</label>
          <input
            type="text"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100"
            value={`$${totalPrice}`}
            readOnly
          />
        </div>
        <div className="mt-4">
          <label className="block text-gray-700 text-sm font-semibold mb-2">Availability</label>
          <input
            type="text"
            className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 bg-gray-100"
            value={availability}
            readOnly
          />
        </div>
        <button
            type="button"
            onClick={handleBookNow}
            className="mt-4 w-full bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            Book Now
          </button>
      </div>
    </div>
  );
};

export default Reservation;
