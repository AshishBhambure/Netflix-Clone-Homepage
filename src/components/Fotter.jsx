import React from 'react';

function Fotter() {
  return (
    <div className="bg-black text-white lg:w-[1500px] mx-auto py-10 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-4">
          <a href="tel:000-800-919-1694" className="text-sm sm:text-lg">
            Questions? Call 000-800-919-1694
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          <div>
            <a href="#" className="block mb-2 hover:underline">
              FAQ
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Investor Relations
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Privacy
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Speed Test
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">
              Help Centre
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Jobs
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Cookie Preferences
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Legal Notices
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">
              Account
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Ways to Watch
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Corporate Information
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Only on Netflix
            </a>
          </div>
          <div>
            <a href="#" className="block mb-2 hover:underline">
              Media Centre
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Terms of Use
            </a>
            <a href="#" className="block mb-2 hover:underline">
              Contact Us
            </a>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center mt-8">
          <div className="mb-4 md:mb-0">
            <button className="border border-gray-500 px-2 py-1 rounded">
              <i className="fas fa-globe"></i> English
            </button>
          </div>
          <div>
            <p>Netflix India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fotter;
