import React from 'react'
import { useState } from "react";


const ContectUs = () => {


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted Successfully!");
  }
  return (
    <div className="min-h-screen mt-10 flex justify-center items-center  bg-gray-300">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-100 mt-20 mb-10"
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Contact Us
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border-none bg-zinc-100 p-3 rounded mb-4 outline-none"
          required
        />

         <input
          type="number"
          name='number'
          placeholder=' Enter Your Number'
          value={formData.number}
          onChange={handleChange}
          className='w-full border-none bg-zinc-100 p-3 rounded mb-4 outline-none '
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border-none bg-zinc-100 p-3 rounded mb-4 outline-none"
          required
        />

        <input
          type="password"
          name='password'
          placeholder='Enter Your Password'
          value={formData.password}
          onChange={handleChange}
          className='w-full border-none bg-zinc-100 p-3 rounded mb-4 outline-none '
          required
        />

       

        <textarea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          rows="5"
          className="w-full border-none bg-zinc-100 p-3 rounded mb-4 outline-none"
          required
        ></textarea>

      <div className='flex justify-center items-center'>
          <button
          type="submit"
          className='bg-gradient-to-b from-orange-400 to-orange-500 text-white px-8 py-3 rounded-full  md:text-lg text-md hover:scale-105 hover:to-orange-600 transition-all duration-300 cursor-pointer '>
          Submit
        </button>
      </div>
      </form>
    </div>
  );
}

export default ContectUs
