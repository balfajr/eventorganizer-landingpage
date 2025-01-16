import React from 'react'
import { useInView } from 'react-intersection-observer';
import { motion } from "framer-motion"
import Astra from '../assets/corps/ASTRA.png';
import Perlasi from '../assets/corps/PERLASI.png';
import Trakindo from '../assets/corps/TRAKINDO.png';
import Voopoo from '../assets/corps/VOOPOO.png';
import Bni from '../assets/corps/BNI.png';
import Gopay from '../assets/corps/GOPAY.png';
import CitiBank from '../assets/corps/CITIBANK.png';
import Indosat from '../assets/corps/INDOSAT.png';
import Mandiri from '../assets/corps/MANDIRI.png';
import Slb from '../assets/corps/SLB.png';
import { ReactComponent as Arrow } from "../assets/arrow-02.svg";







const LOGOS = [
    <img src={Astra} alt="Astra Logo"/>,
    <img src={Perlasi} alt="Perlasi Logo"/>,
    <img src={Trakindo} alt="Trakindo Logo" />,
    <img src={Voopoo} alt="Voopoo Logo" />,
    <img src={Bni} alt="Bni Logo" />,
    <img src={Gopay} alt="Gopay Logo" />,
    <img src={CitiBank} alt="CitiBank Logo" />,
    <img src={Indosat} alt="Indosat Logo" />,
    <img src={Mandiri} alt="Mandiri Logo" />,
    <img src={Slb} alt="Schlumberger Logo" />,
];








const Partners = () => {
    const [ref, inView] = useInView();

  return (
    <div className="h-full overflow-hidden bg-gradient-to-b from-black from-20% to-stone-950 pb-40">
        <div className="">
            <motion.div className="flex justify-center items-center p-4 uppercase"
            initial={{ opacity: 0, x: -100, scale: 0.9, rotate: -1 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            viewport={{ once: true, amount: 0 }}>
                <p className="text-white text-2xl  md:text-4xl">Those Who <span className="font-bold">Choose Us</span></p>
            </motion.div>
        </div>

        <div className="w-screen inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <div className="animate-infinite-slider flex w-[calc(250px*10)]">
                {LOGOS.map((logo, index) => (
                <div className="slide flex w-[125px] m-4 items-center justify-center"
                    key={index}>
                    {logo}
                </div>
                ))}
                {LOGOS.map((logo, index) => (
                <div className="slide flex w-[125px] m-4 items-center justify-center"
                key={index}>
                {logo}
                </div> ))}
            </div>
        </div>
        <motion.div className="w-full p-4 mt-4 flex justify-between"
        initial={{ opacity: 0, x: -100, scale: 0.9, rotate: -1 }}
        whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
        transition={{
          duration: 2,
          ease: [0.6, -0.05, 0.01, 0.99],
        }}
        viewport={{ once: true, amount: 0 }}>
            <h1 className="text-white text-6xl font-semibold uppercase">Why <span className="italic font-thin">They</span> choose us</h1>
            <Arrow className="w-16"/>
        </motion.div>
        
            <motion.div className="flex flex-col md:flex-row justify-center items-center w-screen gap-7 text-white p-4"
            initial={{ opacity: 0, x: 0, scale: 0.1, rotate: 0 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.6, -0.05, 0.01, 0.99],
            }}
            viewport={{ once: true, amount: 0 }}> 
                <div className="flex flex-col w-4/6 h-60 md:w-80 border border-amber-400 rounded-md shadow-[0px_3px_52px_-19px_#FFD700] bg-black p-1">
                    <h1 className="font-bold">Seamless Execution</h1>
                    <hr className="border-t-8 rounded-2xl w-full border-white mb-4"/>
                    <p className="font-thin font-xxs">From planning to execution, our attention to detail guarantees a flawless experience every time.</p>
                </div>
                <div className="flex flex-col w-4/6 h-60 md:w-80 border  border-amber-400 rounded-md shadow-[0px_3px_52px_-19px_#FFD700] bg-black p-1">
                <h1 className="font-bold">Proven Track Record</h1>
                    <hr className="border-t-8 rounded-2xl w-full border-white mb-4"/>
                    <p className="font-thin font-xxs">With a portfolio of successful events and glowing client testimonials, our reputation speaks for itself.</p>
                </div>
                <div className="flex flex-col w-4/6 h-60 md:w-80 border  border-amber-400 rounded-md shadow-[0px_3px_52px_-19px_#FFD700] bg-black p-1">
                <h1 className="font-bold">Tailored Experiences</h1>
                    <hr className="border-t-8 rounded-2xl w-full border-white mb-4"/>
                    <p className="font-thin font-xxs">Every event is customized to perfectly match our clients' vision, making their dreams a reality.</p>
                </div>
            </motion.div>

            <a href="e"
            className='underline mx-auto text-white block text-center hover:scale-110 hover:underline transition-all duration-200'>See what we've been cooking up.
            </a>
    </div>
    
  )
}

export default Partners
