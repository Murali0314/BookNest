import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Banner from '../Banner';
import Footer from '../Footer';
import Freebook from '../Freebook';

function Home({ searchQuery }) {
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:4001/api/books');
        console.log('API response:', res.data);

        // Safely get array of books
        const booksArray = Array.isArray(res.data)
          ? res.data
          : Array.isArray(res.data.books)
          ? res.data.books
          : [];

        // Filter free books
        const freeBooks = booksArray.filter(book => book.category === 'Free');

        setAllBooks(freeBooks);
      } catch (error) {
        console.error('Error fetching books:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const filteredBooks = allBooks.filter(book =>
    (book.name || '').toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div
        className="pt-24 min-h-screen px-4 text-gray-900"
        style={{
          background: 'linear-gradient(to right, #f8f9fa, #e0eafc, #cfdef3)',
          backdropFilter: 'blur(6px)',
        }}
      >
        <Banner />

        <div className="mt-10">
          {loading ? (
            <p className="text-center text-gray-500 text-lg">Loading books...</p>
          ) : filteredBooks.length > 0 ? (
            <Freebook books={filteredBooks} />
          ) : (
            <p className="text-center text-gray-500 text-lg mt-10">
              No books found matching "{searchQuery}"
            </p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
