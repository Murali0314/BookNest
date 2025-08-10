import React, { useState, useEffect } from 'react';
import Cards from '../components/Cards';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Course() {
  const [books, setBooks] = useState([]);
  const [searchQuery, setSearchQuery] = useState(''); // ✅ State for search input

  useEffect(() => {
    const getBooks = async () => {
      try {
        const res = await axios.get("https://booknestbackend-phe2.onrender.com/api/books");
        console.log(res.data);
        setBooks(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  // ✅ Filter based on searchQuery
  const filteredBooks = books.filter((book) =>
    (book.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} /> {/* ✅ Pass handler to Navbar */}

      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'
      style={{
        background: 'linear-gradient(to right, #f8f9fa, #e0eafc, #cfdef3)',
        backdropFilter: 'blur(6px)'
      }}
      >
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl font-semibold md:text-4xl'>
            We are Delighted to have you <span className='text-pink-500'>Here!!!</span>
          </h1>

          <p className='mt-12'>
            Books are more than just pages — they are gateways to knowledge, imagination, and personal growth.
            At our BookNest, we believe that every book has the power to inspire, educate, and transform lives.
          </p>

          <Link to="/">
            <button className='mt-6 text-white bg-pink-500 px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
              Back
            </button>
          </Link>
        </div>

        <div className='mt-12 grid grid-cols-1 md:grid-cols-4 gap-4'>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((item) => (
              <Cards key={item.id} item={item} />
            ))
          ) : (
            <div className='col-span-full text-center text-red-500 font-bold text-xl'>
              Book Not Available
            </div>
          )}
        </div>
       
      </div>
       <Footer />
    </>
  );
}

export default Course;
