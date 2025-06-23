import React from 'react';

const Mathdata = () => {
  return (
    <>
      <div className="p-6 bg-gray-50 rounded-xl shadow-md max-w-3xl mx-auto mt-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Our Maths Staff</h2>
        <p className="text-gray-700 mb-6">Best experience and teaching</p>

        <div className="bg-white p-5 rounded-lg shadow-sm">
          <h3 className="text-2xl font-semibold text-blue-700">Mr. Umar</h3>
          <img
            src="/assets/umar.jpg" 
            alt="Mr. Umar"
            className="w-48 h-48 object-cover rounded-full my-10 border-4 border-blue-300 mx-auto "
          />
          <p className="text-gray-600 mb-4">
            He is a very good teacher with 10 years of experience in mathematics.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-4 mb-2">Languages</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
            <li>English</li>
            <li>Urdu</li>
            <li>Pashto</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-2">Subjects</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700 pl-4">
            <li>Mathematics</li>
            <li>English</li>
            <li>Urdu</li>
            <li>Physics</li>
          </ul>

         <button className="mt-6 px-80 py-2 bg-blue-600 text-white font-semibold rounded-full shadow hover:bg-blue-700 transition duration-300">
  Hire
</button>

        </div>
      </div>
    </>
  );
};

export default Mathdata;
