import React from 'react';
import Section3Img from '../assets/Section3Img.jpg';
import Seprator from './Seprator';

function Section3() {
  return (
    <div className="h-auto sm:h-[500px] lg:w-[1080px] bg-black mx-auto py-4 sm:py-0">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <div className="w-full sm:lg:w-[800px] h-auto sm:h-[300px]">
          <img src={Section3Img} className="w-full h-full object-cover" alt="Section 3" />
        </div>

        <div className="flex flex-col gap-2 flex-wrap text-center sm:text-left">
          <p className="text-xl sm:text-[3rem] font-bold">
            Download your shows to watch offline
          </p>
          <p className="text-base sm:text-2xl">
            Save your favourites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Section3;
