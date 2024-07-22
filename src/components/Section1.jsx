import React from 'react';
import '../assets/Section1Img.jpg';
import Navbar from './Navbar';

function Section1() {
  return (
    <div className="relative w-[98vw] h-[95vh] overflow-hidden bg-section1 bg-cover bg-center">
      {/* Black Overlay */}
      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <h1 className="text-3xl sm:text-6xl font-bold mb-4 text-center">
          Unlimited movies, TV shows and more
        </h1>
        <h2 className="text-xl sm:text-2xl mb-8 text-center">
          Watch anywhere. Cancel anytime.
        </h2>
        <h3 className="text-lg sm:text-xl mb-4 text-center">
          Ready to watch? Enter your email to create or restart your membership.
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <input
            type="email"
            placeholder="Email address"
            className="p-4 w-60 sm:w-80 rounded-md opacity-70 text-white bg-[#1c2432] border border-green-300"
          />
          <button className="bg-red-600 p-4 w-32 sm:w-40 rounded-md text-lg sm:text-xl font-bold">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
