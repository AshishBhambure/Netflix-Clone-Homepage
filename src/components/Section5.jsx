import React from 'react';
import Section5Img from '../assets/Section5img.png';

function Section5() {
  return (
    <div className='h-auto lg:w-[1080px] bg-black mx-auto py-10'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-4'>
        <div className='lg:w-[800px] lg:h-[300px]'>
          <img
            src={Section5Img}
            className='object-cover w-full h-auto'
            alt='Section 5'
          />
        </div>
        <div className='flex flex-col gap-2 text-center lg:text-left'>
          <p className='text-2xl lg:text-[3rem] font-bold'>
            Create profiles for kids
          </p>
          <p className='text-lg lg:text-2xl'>
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section5;
