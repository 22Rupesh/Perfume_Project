import axios from 'axios';
import React, { useState } from 'react'

const Login = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [input, setInput] = useState({
    email: "",
    password: ""
  })

  const changeInputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value })
  }

  const submitHandler = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8000/user/login', {
        email: input.email,
        password: input.password
      }, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      })
      if (res.data.success) {
        console.log('Login successfully.')
        onClose()
      }
    } catch (error) {
      console.log(error)
    }

  }
  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center">
      <div className=" w-full max-w-xl h-[500px] rounded-lg overflow-hidden bg-white flex justify-center shadow-lg">


        <div className='flex w-full flex-col gap-4 justify-center items-center'>
          <form action="" onSubmit={submitHandler}>

            <div className='flex flex-col gap-4 '>
              <input
                type="email"
                name="email"
                value={input.email}
                onChange={changeInputHandler}
                placeholder='Email'
                className='h-10  placeholder-gray-400 px-4 py-1 rounded border border-gray-400 outline-none'
              />

              <input
                type="password"
                name="password"
                placeholder='Password'
                value={input.password}
                onChange={changeInputHandler}
                className='h-10 placeholder-gray-400 px-4 py-1 rounded border border-gray-400 outline-none'
              />

              <button
                className='py-2 rounded text-white bg-blue-600'
              >
                Login
              </button>
            </div>
          </form>

        </div>


      </div>

    </div >
  )
}

export default Login
