import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600">BrightMinds</h1>
        </Link>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden text-2xl text-blue-700 cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-gray-700 text-lg">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/courses" className="hover:text-blue-500">Courses</Link>
          <Link to="/pricing" className="hover:text-blue-500">Pricing</Link>
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-sm">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 text-lg text-gray-700">
          <Link to="/" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">About</Link>
          <Link to="/courses" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Courses</Link>
          <Link to="/pricing" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Pricing</Link>
          <Link to="/login" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Login</Link>
          <Link to="/register" onClick={() => setMenuOpen(false)} className="block hover:text-blue-500">Register</Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
