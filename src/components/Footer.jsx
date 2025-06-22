import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white px-4 sm:px-6 py-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-3">BrightMinds Tuition</h2>
          <p className="text-sm sm:text-base text-blue-200">
            Empowering students with personalized online learning. Join us and excel!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-blue-200 text-sm sm:text-base">
            <li><a href="/" className="hover:underline">Home</a></li>
            <li><a href="/about" className="hover:underline">About</a></li>
            <li><a href="/courses" className="hover:underline">Courses</a></li>
            <li><a href="/pricing" className="hover:underline">Pricing</a></li>
            <li><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info & Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-sm sm:text-base text-blue-200 mb-2">
            Email: <a href="mailto:bahadardeveloper@gmail.com" className="hover:underline">bahadardeveloper@gmail.com</a>
          </p>
          <p className="text-sm sm:text-base text-blue-200 mb-4">Phone: 0342-9166926</p>

          <div className="flex gap-4 text-white text-xl">
            <a href="#" aria-label="Facebook"><FaFacebookF className="hover:text-blue-400" /></a>
            <a href="#" aria-label="Instagram"><FaInstagram className="hover:text-pink-400" /></a>
            <a href="#" aria-label="Twitter"><FaTwitter className="hover:text-sky-400" /></a>
            <a href="mailto:support@brightminds.com" aria-label="Email"><FaEnvelope className="hover:text-yellow-300" /></a>
          </div>
        </div>
      </div>

      <div className="text-center text-blue-300 text-xs sm:text-sm mt-10">
        &copy; {new Date().getFullYear()} BrightMinds Tuition. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
