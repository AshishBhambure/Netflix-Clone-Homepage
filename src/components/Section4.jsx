import React from 'react';
import Section4img from '../assets/Section4img.png';
import Section4Vdo from '../assets/Section4vdo.m4v';

function Section4() {
  return (
    <div className='h-[500px] lg:w-[1080px] bg-black mx-auto z-0 py-4 pt-3'>
      <div className='flex flex-row-reverse justify-between items-center'>
        <div className='lg:w-[800px] lg:h-[300px] relative'>
          <img
            src={Section4img}
            className=' z-20 w-full h-full  absolute top-12 right-2 object-cover'
            alt='Section 4'
          />
          <video
            muted
            loop
            autoPlay
            className='absolute  left-24 bottom-0    z-10 w-[320px]  h-[320px] '
            src={Section4Vdo}
          ></video>
        </div>
        <div className='flex flex-col gap-2 flex-wrap'>
          <p className='text-[3rem] font-bold'>
            Watch everywhere
          </p>
          <p className='text-2xl'>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section4;
