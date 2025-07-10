// components/SignupModal.jsx
import React from 'react';
import perfumeImage from '../../../public/images/Rectangle 58.png'; // update path as needed

const SignupModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl h-[500px] rounded-lg overflow-hidden flex shadow-lg">
        {/* Left Side Image */}
        <div className="w-1/2 h-full">
          <img
            src={perfumeImage}
            alt="Perfume"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side Form */}
        <div className="w-1/2 bg-[#f8f5f1] px-10 py-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-[#79300f] mb-2">Vesarii</h2>
          <h3 className="text-xl font-semibold text-[#79300f] mb-4">Join Our Scented World</h3>
          <p className="text-sm text-gray-700 mb-6">
            Enjoy early access to new collections, exclusive offers, and a welcome treat of 10% off your first order when you sign up to receive our emails and texts.
          </p>

          <input
            type="email"
            placeholder="Email Address"
            className="border border-gray-400 px-4 py-2 mb-4 w-full rounded"
          />
          <input
            type="text"
            placeholder="Mobile Number"
            className="border border-gray-400 px-4 py-2 mb-4 w-full rounded"
          />

          <button className="bg-[#1a1a1a] text-white py-2 rounded hover:bg-[#333]">
            Sign Up
          </button>

          <button
            className="mt-4 text-sm text-gray-500 hover:text-red-600"
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
