import React from 'react';

const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-4 py-8 sm:px-6 md:p-16 bg-gray-50">
      {/* ✅ Text Section - Adjust width, margin, and font sizes for responsiveness */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-3xl sm:text-4xl font-bold text-blue-800 mb-4">
          BrightMinds
        </h1>
        <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
          At <span className="font-semibold">BrightMinds</span>, we offer personalized online tuition to help students succeed at every level.
          Our expert tutors make learning fun, effective, and tailored to your needs.
          Whether it’s homework help, test prep, or mastering a tough subject — we’re here to guide you every step of the way.
        </p>
      </div>

      {/* ✅ Image Section - Full width on small, half on medium+ */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://plus.unsplash.com/premium_photo-1663054510163-c19544ba7dfe?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Student learning"
          className="rounded-xl shadow-lg w-full max-w-md sm:max-w-lg h-auto"
        />
      </div>
    </div>
  );
};

export default About;
