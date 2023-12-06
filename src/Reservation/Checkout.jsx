import React ,{ useState } from 'react';
import { useLocation } from 'react-router-dom';


function Checkout() {
  const { state } = useLocation();
  const [showConfirmation, setShowConfirmation] = useState(false);

  if (!state) {
    // Handle the case where state is null (e.g., redirect to another page or show an error message)
    return null;
  }

  const { checkInDate, checkOutDate, roomType, roomAmount, totalPrice, availability } = state;
  const handleConfirmReservation = () => {
    // Additional logic for handling reservation confirmation
    // ...

    // Show the confirmation pop-up
    setShowConfirmation(true);
  };

  return (
    <div>
      <h1 className="text-2xl text-center mb-5 font-bold">Checkout & Billing</h1>
      
      <section className="lg:flex justify-between">
  {/* Form Section */}
  <form id="consultation-form" className="section_form feed-form ml-2 mr-3 mb-3 lg:w-1/2">
  <div className="mb-4">
    <input
      className="w-full p-2 border border-gray-500 rounded"
      required
      placeholder="Name"
      type="text"
    />
  </div>
  <div className="mb-4">
    <input
      className="w-full p-2 border border-gray-500 rounded"
      required
      placeholder="Address"
      type="text"
    />
  </div>
  <div className="mb-4 lg:flex lg:flex-wrap">
    <div className="w-full mb-4 lg:w-1/2 lg:mb-4 lg:pr-2">
      <input
        className="w-full p-2 border border-gray-500 rounded"
        name="phone"
        required
        placeholder="Phone number"
        type="tel"
      />
    </div>
    <div className="w-full lg:w-1/2 lg:pl-2">
      <input
        className="w-full p-2 border border-gray-500 rounded"
        name="email"
        required
        placeholder="E-mail"
        type="email"
      />
    </div>
  </div>
</form>




{/* Payment Form Section */}
<div className="payment-form ml-5 lg:ml-10 mb-3 lg:w-1/2">
  <div className="mb-4">
    <label htmlFor="payment-method" className="block mb-1 font-semibold">
      Payment Method:
    </label>
    <select
      id="payment-method"
      className="w-1/2 p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
    >
      <option value="credit-card">Credit Card</option>
      <option value="debit-card">Debit Card</option>
      <option value="paypal">PayPal</option>
    </select>
  </div>

  <div>
    <label htmlFor="promo-code" className="block mb-1 font-semibold">
      Promo Code:
    </label>
    <input
      type="text"
      id="promo-code"
      placeholder="Enter Promo Code"
      className="w-1/2 p-2 border border-gray-300 rounded focus:ring focus:border-blue-300"
    />
  </div>
</div>

</section>
<div className='ml-4 bg-gray-100 border border-gray-300 p-4 rounded shadow-md'>
  <p className="mb-2 text-lg font-semibold">
    Check-in Date: <span className="text-green-500">{checkInDate}</span>
  </p>
  <p className="mb-2 text-lg font-semibold">
    Check-out Date: <span className="text-green-500">{checkOutDate}</span>
  </p>
  <p className="mb-2 text-lg font-semibold">
    Room Type: <span className="text-blue-500">{roomType}</span>
  </p>
  <p className="mb-2 text-lg font-semibold">
    Number of Rooms: <span className="text-red-500">{roomAmount}</span>
  </p>
  <p className="mb-2 text-lg font-semibold">
    Total Price: <span className="text-purple-500">${totalPrice}</span>
  </p>
  <p className="mb-2 text-lg font-semibold">
    Availability:  <span className="text-green-500">{availability}</span> 
  </p>
</div>


      <button
        className="mx-auto mt-8 mb-8 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 block"
        onClick={handleConfirmReservation}
      >
        Confirm Reservation
      </button>

      {showConfirmation && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="text-xl font-semibold mb-2">Congratulations!!! Your reservation is confirmed!</p>
            <button
              className="mx-auto bg-green-500 text-white px-5 py-1 rounded-md hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 block"
              onClick={() => setShowConfirmation(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

    
    </div>
  );
}

export default Checkout;
