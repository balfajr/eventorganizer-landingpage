import React, { useState } from 'react'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';







const Footer = () => {
  const [hovered, setHovered] = useState(false);


  return (
    <div className="h-full bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-black via-stone-950 to-stone-950  backdrop-blur-xl flex flex-col">
       
        <div className="w-full flex h-full border rounded-t-3xl">

          <div className="w-1/2 flex  border-r p-2 justify-center items-center">
            <p className='leading-4 text-white font-bold text-xl md:text-4xl'>
            <span className="leading-4 bg-gradient-to-bl from-yellow-400 via-yellow-600 to-yellow-200 bg-clip-text text-transparent font-extrabold -tracking-wider text-xl md:text-4xl">GOLDEN</span> MOMENT AWAITS<br />
            </p>
          </div>

          <div className="flex  w-1/2 p-4 text-white flex-col justify-center items-center">
            <p className='text-lg'>
              <FaMapMarkerAlt />
            </p> 
            <p className='text-right mt-2 mr-1 md:text-xl'> Jl. Anggrek No.63, RW.13, Cilandak Barat, Jakarta Selatan</p>
            <p className='my-2'>
            <span className='rounded-3xl p-1 text-xxs md:text-xs cursor-pointer border'>Ask for directions</span></p>
          </div>
         
        </div>
        
        <div className='flex flex-col items-center pb-4 border-x'>
            <h1 className='text-center text-white'>Don’t be surprised at how stunning your project is once you have decided</h1>
            <Link to="/contact">
              <motion.button  className={`text-white w-40 border rounded-full p-1 cursor-pointer ${
                hovered
                  ? "bg-gradient-to-bl from-yellow-400 via-yellow-600 to-yellow-200"
                  : "bg-transparent"}`}
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                    whileHover={{
                      scale: 1.1, // Zoom in saat hover
                      transition: { ease: "easeInOut", duration: 0.3 },
                    }}
                    animate={{
                      background: hovered
                        ? "linear-gradient(to bottom left, #fbbf24, #d97706, #fef08a)"
                        : "transparent",
                      scale: hovered ? 1.1 : 1, // Zoom in saat hover
                      transition: { ease: "easeInOut", duration: 0.3 },
                    }}>
                  {hovered ? "Let's do it!" : "Start a project?"}

              </motion.button>
            </Link>
        </div>
        <div className='flex text-xxs md:justify-around border-t text-gray-400'>
          <h1 className='mx-auto'>All rights reserved.</h1>
        </div>
    </div>
  
  )
}

export default Footer
