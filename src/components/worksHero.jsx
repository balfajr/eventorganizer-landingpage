import React from 'react';
import YearTabs from './YearTabs'; // Import the YearTabs component

const worksHero = () => {
  return (
    <div className='font-prompt h-screen bg-gradient-to-b from-black from-20% to-stone-950'>
      <div className='py-24 flex justify-center items-center flex-col'>
        <p className='text-white text-2xl uppercase font-bold'>Our featured works</p>
        <p className='text-white text-base uppercase font-thin text-center'>
          The invisible hands that shape unforgettable experiences.
        </p>
        
        {/* Add YearTabs component */}
        <div className="mt-8 text-whitem">
          <YearTabs />
        </div>
      </div>
    </div>
  );
};

export default worksHero;
