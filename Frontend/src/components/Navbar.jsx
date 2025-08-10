import React, { useState, useEffect } from 'react';
import Login from './Login';
import { useAuth } from '../context/AuthProvider';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ setSearchQuery }) => {
  const [authUser, setAuthUser] = useAuth();
  const [sticky, setSticky] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const location = useLocation();

  useEffect(() => {
    setSearchInput('');
    if (typeof setSearchQuery === 'function') {
      setSearchQuery('');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchInput(value);
    if (typeof setSearchQuery === 'function') {
      setSearchQuery(value);
    }
  };

  const navItems = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/course">Course</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </>
  );

  return (
    <div className={`max-w-screen-2xl bg-gray-500 container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${sticky ? "shadow-md bg-base-200 transition-all duration-300 ease-in-out" : ""}`}>
      <div className="navbar py-2 flex items-center justify-between">

        {/* Navbar Start */}
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl" to="/">BookNest</Link>
        </div>

        {/* Navbar Center */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navItems}</ul>
        </div>

        {/* Navbar End */}
        <div className="navbar-end space-x-3 flex items-center">
          {/* Search Input */}
          <label className="input flex items-center gap-2 bg-white px-2 py-1 rounded-md">
            <svg className="h-4 w-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" fill="none" stroke="currentColor">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              placeholder="Search by book name"
              className="bg-transparent outline-none text-sm w-full"
              value={searchInput}
              onChange={handleSearchChange}
            />
          </label>

          {/* Auth Buttons */}
          {authUser ? (
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-md"
              onClick={() => {
                setAuthUser(undefined);
                localStorage.removeItem("Users");
              }}
            >
              Logout
            </button>
          ) : (
            <div>
              <button
                className="bg-black text-white px-4 py-2 rounded-md hover:bg-slate-800 duration-300"
                onClick={() => document.getElementById("my_modal_3").showModal()}
              >
                Login
              </button>
              <Login />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
