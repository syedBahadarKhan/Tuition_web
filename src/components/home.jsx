import React from 'react';

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 mb-4 sm:mb-6 leading-snug sm:leading-tight">
          Hire Excellent Teachers for Your Children
          <br />
          <span className="text-blue-600 block mt-2">
            Master Any Subject with Top-Rated Tutors
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 sm:mb-8">
          Interactive learning experience tailored to your child’s pace and goals.
        </p>

        {/* ✅ Button layout: stack on mobile, inline on larger screens */}
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-700 transition w-full sm:w-auto">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg text-base sm:text-lg font-medium hover:bg-blue-50 transition w-full sm:w-auto">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
