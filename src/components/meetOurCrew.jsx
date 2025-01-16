import React, { useState } from 'react';
import PandaAdhy from '../assets/crews/panda.png';
import PipiRangga from '../assets/crews/pipi.png';

const MeetOurCrew = () => {
  const [activeCrew, setActiveCrew] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const crewMembers = [
    { name: 'Adhy Kusuma', image: PandaAdhy },
    { name: 'Rangga Rahmadin Tampubolon', image: PipiRangga },
    { name: 'Rania DWKOM', image: PandaAdhy },
    { name: 'Zulvi Fauzi', image: PandaAdhy },
    { name: 'Sendra Ahmad', image: PandaAdhy },
    { name: 'Andrie Aulia Akbar', image: PandaAdhy },
    { name: 'Axcel Adam Purnomo', image: PandaAdhy },
    { name: 'Harris Krisbianto', image: PandaAdhy },
    { name: 'Yoga Boytama', image: PandaAdhy },
    { name: 'Andrianto', image: PandaAdhy },
    { name: 'Devan Febrian Aditya', image: PandaAdhy },
    { name: 'Om Imenk', image: PandaAdhy },
    { name: 'Safira Arifah', image: PandaAdhy },
    { name: 'Devan Febrian Aditya', image: PandaAdhy },
  ];

  const handleClose = () => {
    setIsModalOpen(false);
    setActiveCrew(null);
  };

  const handleClick = (index) => {
    setActiveCrew(index);
    setIsModalOpen(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className='border-t'>
      <div className="font-prompt h-screen bg-stone-950 p-4">
        <p className='text-white text-2xl mx-auto text-center'>
          MEET OUR <span className="font-bold">CREW</span>
        </p>
        <div className='flex flex-wrap mt-2 p-4 justify-between'>
          {crewMembers.map((member, index) => (
            <div
              key={index}
              className="relative bg-white hover:scale-110 duration-200 text-stone-950 w-screen md:w-fit p-2 rounded-full flex items-center cursor-pointer m-2"
              onClick={() => handleClick(index)}
            >
              <img src={member.image} alt={member.name} className='w-8' />
              <p className='ml-2 whitespace-nowrap'>{member.name}</p>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center" onClick={handleOverlayClick}>
          <div className="bg-white w-1/3 h-1/3 p-4 rounded-lg relative" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute top-2 right-2 text-stone-950"
              onClick={handleClose}
            >
              &times;
            </button>
            <div className="text-center">
              <img src={crewMembers[activeCrew].image} alt={crewMembers[activeCrew].name} className='w-16 mx-auto' />
              <p className='mt-2'>{crewMembers[activeCrew].name}</p>
              {/* Add more detailed information here */}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MeetOurCrew;
