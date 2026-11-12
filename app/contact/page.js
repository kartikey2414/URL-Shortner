"use client";
import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="bg-purple-50 min-h-[calc(100vh-64px)] flex items-center justify-center py-8 sm:py-12 px-4">
      <div className="mx-auto max-w-lg w-full bg-purple-100 p-5 sm:p-8 rounded-xl shadow-sm flex flex-col gap-3 sm:gap-4">
        <h1 className="font-bold text-xl sm:text-2xl text-gray-900">
          Contact Us
        </h1>
        <p className="text-xs sm:text-sm text-gray-700 -mt-1 sm:-mt-2">
          Have a question, feedback, or found a bug? Drop us a message below.
        </p>

        {submitted && (
          <div className="bg-purple-200 border border-purple-400 text-purple-900 px-3 sm:px-4 py-2.5 rounded-md text-xs sm:text-sm font-medium">
            Thank you! Your message has been sent successfully.
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-1">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your Name"
            className="w-full px-3.5 sm:px-4 py-2.5 text-sm sm:text-base bg-white rounded-md focus:outline-purple-600 text-gray-800"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your Email"
            className="w-full px-3.5 sm:px-4 py-2.5 text-sm sm:text-base bg-white rounded-md focus:outline-purple-600 text-gray-800"
          />

          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message here..."
            className="w-full px-3.5 sm:px-4 py-2.5 text-sm sm:text-base bg-white rounded-md focus:outline-purple-600 text-gray-800 resize-none"
          />

          <button
            type="submit"
            className="w-full bg-purple-500 hover:bg-purple-600 active:scale-98 text-white font-bold py-2.5 rounded-lg shadow-md mt-2 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
};

export default Contact;