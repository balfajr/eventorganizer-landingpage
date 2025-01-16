import React from 'react';
import { motion } from "framer-motion"
import { ReactComponent as Star } from "../assets/star.svg";
import Key from "../assets/dw-keyboard.svg";
import content3 from '../assets/content-3.jpg';
import content2 from '../assets/content-2.jpg';
import content1 from '../assets/content-1.jpg';



const Content = () => {
  return (
    <div className="bg-black h-full text-white p-5">

        {/* Specialize in mobile */}
        <div className="flex justify-center items-center md:hidden">
                <motion.div
                 className="flex flex-row justify-center items-center text-xxs font-thin bg-transparent p-1 rounded-full border"
                 initial={{ opacity: 0, y: 50 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, ease: "easeInOut" }}
                 viewport={{ once: true, amount: 0.2 }} >               
                    <Star className="h-5" />
                    <h1 className="pl-2 uppercase font-normal">We specialize in
                    </h1>
                </motion.div>
            </div>

        {/* Desktop */}
        <motion.div 
        className="grid grid-cols-3 grid-rows-1"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99]
        }}
        viewport={{ once: true, amount: 0.2 }}>
            <div className="hidden md:flex justify-start items-center ">
                <div className="flex flex-row justify-center items-center text-xxs font-thin bg-transparent p-2 rounded-full border">
                    <Star className="h-5 fill-white" />
                    <h1 className="pl-2">We specialize in
                    </h1>
                </div>
            </div>
            <div className="col-span-3 md:col-span-2">
            <h1 class="text-2xl md:text-5xl text-end leading-tight align-text-bottom">
                DELIVERING FLAWLESS EVENTS
                <span class="block font-bold">PERFECTLY EXECUTED</span>
            </h1>
            </div>
        </motion.div>
        <motion.div className="flex justify-center items-start flex-wrap gap-4 mt-4"
           initial={{ opacity: 0, y: 60, scale:0.9,}}
           whileInView={{ opacity: 1, y: 0, scale: 1 }}
           transition={{ duration: 0.8, ease: [0.9, -0.05, 0.01, 0.99] }}
           viewport={{ once: true, amount: 0.4 }}>
                <img className="h-96 w-80 object-cover rounded-2xl filter grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-500 ease-in-out"
                    src={content3} 
                    alt="" />
                <img className="h-96 w-80 object-cover rounded-2xl filter grayscale hover:grayscale-0 transform hover:scale-110 transition-all duration-500 ease-in-out"
                    src={content1} 
                    alt="" />
                <img className="h-96 w-80 object-cover rounded-2xl filter grayscale hover:grayscale-0 transform hover:scale-110 hover:rounded-sm transition-all duration-500 ease-in-out"
                    src={content2} 
                    alt="" />
        </motion.div>
        <div className="flex flex-col justify-center items-center mx-auto w-3/4 md:w-2/4 mt-4 ">
            <motion.div
             initial={{ opacity: 0, x: -60, scale: 0.9, rotate: -1 }}
             whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
             transition={{
               duration: 0.8,
               ease: [0.6, -0.05, 0.01, 0.99],
             }}
             viewport={{ once: true, amount: 0 }}>
            
                <p className="text-white text-center font-thin">With years of experience and proven expertise, our team is capable of turning any vision into reality. We have the ability to design and execute complex events with precision and elegance</p>
            </motion.div>
            <motion.div className='mt-4'
             initial={{ opacity: 0, x: 60, scale: 0.9, rotate: -1 }}
             whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
             transition={{
               duration: 0.8,
               ease: [0.6, -0.05, 0.01, 0.99],
             }}
             viewport={{ once: true, amount: 0 }}>
                 <a href="/about" className="text-xs font-bold mt-4 border rounded-full p-2 underline hover:text-yellow-400 hover:border-yellow-400 transition-all duration-200 ease-linear">See what we're all about</a>
            </motion.div>
            <img src={Key} alt="DW" className="h-36 mt-5" />
        </div>
    </div>

  );
}

export default Content;
