import React, { useState } from 'react';

function Element({ d }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='transition-shadow ease-in w-full text-lg sm:text-2xl'>
      <div className='bg-[#2d2d2d] hover:bg-[#454545] flex justify-between items-center py-4 sm:py-8 px-2 sm:px-4'>
        <h1>{d.heading}</h1>
        <button
          className='text-2xl sm:text-[3rem]'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <p>^</p> : <p>+</p>}
        </button>
      </div>
      <div
        className={`bg-[#2d2d2d] mt-[4px] transition-max-height duration-300 ease-linear overflow-hidden ${
          isOpen ? 'max-h-[1000px] py-2' : 'max-h-0'
        }`}
      >
        {isOpen &&
          d.description.map((d1, index) => (
            <p key={index} className='px-2 py-2 flex flex-col gap-4'>
              {d1}
            </p>
          ))}
      </div>
    </div>
  );
}

export default Element;
