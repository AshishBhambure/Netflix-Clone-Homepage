import React from 'react';

function Comp() {
  return (
    <div className='w-full my-6'>
      <div className='w-full flex flex-col gap-4'>
        <h1 className='text-2xl text-center px-4 sm:px-0'>
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className='justify-center items-center text-center flex flex-col sm:flex-row gap-4'>
          <div className='w-full sm:w-auto'>
            <input
              className='bg-[#1c2432] w-full sm:w-[500px] h-[50px] border border-green-200 px-2 rounded-md'
              placeholder='Email Address'
              type='email'
            ></input>
          </div>
          <div className='w-full sm:w-auto'>
            <button className='flex gap-4 items-center justify-center px-3 font-semibold bg-red-600 rounded-md text-xl sm:text-3xl py-2 w-full sm:w-auto'>
              <p>Get Started</p> <span>{`>`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp;
