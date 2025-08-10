import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from "react-hot-toast";

import Home from './components/Home/Home';
import Courses from './courses/Courses';
import Signup from './components/Signup';
import Contact from './components/Contact';
import About from './components/About';
import Course from './components/Course';
import Navbar from './components/Navbar';
import BookDetails from './components/BookDetails';
import Cards from './components/Cards';
import bookList from './list.json';
import { useAuth } from './context/AuthProvider';

const App = () => {
  const [authUser] = useAuth();
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <Routes>
        <Route path="/" element={<Home searchQuery={searchQuery} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/course"
          element={authUser ? <Course searchQuery={searchQuery} /> : <Navigate to="/signup" />}
        />
        <Route
          path="/courses"
          element={authUser ? <Courses /> : <Navigate to="/signup" />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/books"
          element={
            <div className="flex flex-wrap justify-center">
              {bookList.map((item) => (
                <Cards key={item.id} item={item} />
              ))}
            </div>
          }
        />
        <Route path="/book/:id" element={<BookDetails />} />
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
