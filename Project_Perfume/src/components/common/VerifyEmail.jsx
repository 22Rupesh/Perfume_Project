import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'

const VerifyEmail = ({ isOpen, onClose, openLogin, email }) => {
  if (!isOpen) return null;
  const [otp, setOTP] = useState("");
  const [timeLeft, setTimeLeft] = useState(600);

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/user/signup/verify-email',
        {
          email,
          emailOtp: otp
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
      if (res.data.success) {
        openLogin()
        // onClose()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const resendOTP = async () => {
    try {
      const res = await axios.post('http://localhost:8000/user/signup/resend-otp',
        {
          email,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        })
      if (res.data.success) {
        console.log('OTP Sent')
        setTimeLeft(600)
      }
    } catch (error) {
      console.log(error)
    }
  }

  const changeInputHandler = (e) => {
    setOTP(e.target.value)

  }
  useEffect(() => {
    if (!isOpen) return;

    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          // Optional: handle OTP expiration here
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount or modal close
  }, [isOpen]);

  const otpExpiry = () => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const seconds = String(timeLeft % 60).padStart(2, '0');
    return `${minutes}:${seconds}`;
  };



  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white w-full max-w-4xl h-[500px] rounded-lg flex justify-center items-center overflow-hidden shadow-lg">
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl align-middle font-medium text-black'>Verify Your Email Address</h1>
          <div className='mt-3 text-gray-600'>
            <p>We've sent a 6-digit verification code to your email address. Please enter it below to verify your account.</p>
          </div>

          <form action="" onSubmit={submitHandler} className='mt-10 flex flex-col gap-4'>

            <input type="text"
              maxLength={6}
              name="otp"
              value={otp}
              onChange={changeInputHandler}
              className="bg-gray-200 tracking-widest text-xl text-center py-2 text-black border rounded "
            />
            <p className='text-gray-600 text-center'>OTP expires in : <span>{otpExpiry()}</span> </p>
            <button className='bg-blue-600 text-white px-2 py-2 mt-5 rounded-3xl text-lg font-bold '>Verify Email</button>
          </form>


          <div className='text-gray-600 mt-3'>
            <p>Didn't Receive OTP ? <span className='text-blue-500 cursor-pointer underline' onClick={() => resendOTP()}>Resend OTP</span></p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default VerifyEmail
