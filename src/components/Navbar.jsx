import React from 'react';

function Navbar() {
  return (
    <div className="lg:w-[1300px] mx-auto my-2 z-1">
      <div className="flex items-center justify-between">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix"
          className="w-24 sm:w-32 mb-4"
        />
        <div className="flex items-center gap-2 sm:gap-4">
          <select className="bg-black border border-white rounded-sm px-2 py-1 text-sm sm:text-base">
            <option>Hindi</option>
            <option>English</option>
          </select>
          <button className="bg-red-600 text-white px-2 py-1 rounded-md text-sm sm:text-base">
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
