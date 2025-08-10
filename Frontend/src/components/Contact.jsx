import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen pt-24 px-4 flex items-start justify-center bg-gradient-to-br from-[#1e1e2f] via-[#2e2e54] to-[#3a1c71] relative overflow-hidden">
        
        {/* Optional: Background Glow Effects */}
        <div className="absolute w-[600px] h-[600px] bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse -top-48 -left-48 z-0"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-pulse top-24 right-10 z-0"></div>

        <form
          action="https://formsubmit.co/gorlamuralidhar@gmail.com"
          method="POST"
          className="relative z-10 w-full max-w-md bg-gray-900 text-white p-8 rounded-xl shadow-2xl space-y-6 border border-indigo-700"
        >
          {/* Hidden Inputs */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <h2 className="text-3xl font-bold text-center">Contact Me</h2>

          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Subject</label>
            <input
              type="text"
              name="_subject"
              placeholder="Enter subject"
              required
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              name="message"
              placeholder="Write your message..."
              required
              rows="4"
              className="w-full px-4 py-2 rounded-lg border border-gray-700 bg-gray-800 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg font-semibold transition duration-200"
          >
            Submit
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
