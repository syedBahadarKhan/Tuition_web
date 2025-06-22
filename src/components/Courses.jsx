import React from 'react';
import { Link } from 'react-router-dom';

const Courses = ({ courses }) => {
  return (
    <div className="px-4 sm:px-6 md:px-8 py-12 bg-gray-50">
      <h2 className="text-3xl sm:text-4xl font-bold text-center text-blue-800 mb-10">
        Our Courses
      </h2>

      {/* ✅ Responsive Grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-5 sm:p-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2">
                {course.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                {course.description}
              </p>

              {/* ✅ Buttons stacked on mobile, side-by-side on larger screens */}
              <div className="mt-4 flex flex-col sm:flex-row gap-3">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm w-full sm:w-auto">
                  Learn More
                </button>
                <Link to="/register" className="w-full sm:w-auto">
                  <button className="bg-green-600 hover:bg-green-800 text-white px-4 py-2 rounded-full text-sm w-full sm:w-auto">
                    Contact Us
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
