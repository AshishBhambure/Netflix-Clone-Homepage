import React from 'react';
import Section2Img from '../assets/Section2Img.png';
import Section2Vdo from '../assets/Section2Vdo.m4v';

function Section2() {
  return (
    <div className="h-auto sm:h-[600px] lg:w-[1200px] bg-black mx-auto z-0 flex flex-wrap items-center relative py-4 sm:py-0">
      <div className="flex flex-col sm:flex-row-reverse  justify-between items-center">
        <div className="w-full sm:lg:w-[800px] h-auto sm:h-[300px] relative">
          <img
            src={Section2Img}
            className="z-20 w-full h-full absolute top-12 right-2 object-cover"
            alt="Section 2"
          />
          <video
            muted
            loop
            autoPlay
            className="absolute left-16 top-0 z-10 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px]"
            src={Section2Vdo}
          ></video>
        </div>
        <div className="flex flex-col gap-2 flex-wrap text-center sm:text-left">
          <p className="text-xl sm:text-[3rem] font-bold">Enjoy on your TV</p>
          <p className="text-base sm:text-2xl">
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section2;
