import React, { useState, useEffect, useRef } from 'react';
import heroAboutImage from '../assets/heroAbout.jpg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedNumber from "./AnimatedNumber";
import { useInView } from 'react-intersection-observer';

const HeroAbout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const { ref: h1Ref, inView: h1InView } = useInView({ triggerOnce: true });
  const { ref: pRef, inView: pInView } = useInView({ triggerOnce: true });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true });
  const { ref: linkRef, inView: linkInView } = useInView({ triggerOnce: true });
  const { ref: containerRef, inView: containerInView } = useInView({ triggerOnce: true });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0 && window.scrollY < imageHeight / 2) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    const handleImageLoad = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.clientHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('load', handleImageLoad);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('load', handleImageLoad);
    };
  }, [imageHeight]);

  return (
    <div className='p-4 font-prompt h-full overflow-hidden bg-gradient-to-b from-black from-20% to-stone-950'>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mt-24 h-full">
        <div className="flex flex-col justify-center items-center h-full md:col-span-2 mt-2">
          <img 
            ref={imageRef}
            src={heroAboutImage} 
            alt="Hero About" 
            className={`mt-4 rounded-xl filter duration-300 h-full w-full object-cover ${isScrolled ? 'filter-none' : 'grayscale'}`}
            onLoad={() => setImageLoaded(true)}
            style={{ height: '100%' }}
          />
        </div>
        {imageLoaded && (
          <div className="flex flex-col justify-between h-full md:col-span-3">
            <motion.h1 
              ref={h1Ref}
              className="text-white text-3xl font-bold mb-1"
              initial={{ opacity: 0, x: 100 }}
              animate={h1InView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, ease: "easeInOut" }}
            >
              A team made of experts
            </motion.h1>
            <motion.p 
              ref={pRef}
              className="text-white font-thin text-justify text-base tracking-tighter"
              initial={{ opacity: 0, x: 130 }}
              animate={pInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              Established at Jakarta in 2013, DWKOM was built on a reputation for producing memorable events. Driven by an insatiable passion for excellence, DWKOM aspires to expand and become one of the most experienced and successful event agencies in Jakarta. We can handle events in Jakarta, Bandung, Yogyakarta, Surabaya, Bali, and other cities in Indonesia. By combining imagination and experience, we produce extraordinary events, both indoors and outdoors. We are also capable of handling brand activation, no matter how complex the logistics, creativity, or technical aspects of an event. We design, develop, and actualize different situations, integrating all these elements into various scales, both large and small.
            </motion.p>
            <motion.div 
              ref={statsRef}
              className='flex justify-around items-center mt-2'
              initial={{ opacity: 0, y: 50 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <div className='flex-col flex justify-center items-center '>
                <span className='flex items-center justify-center text-white text-xl border rounded-full p-2'>
                  <AnimatedNumber from={0} to={100}  /> +
                </span>
                <p className='border-none text-white mt-2 text-center'>Years of Experience</p>
              </div>
              <div className='flex-col flex justify-center items-center '>
                <span className='flex items-center justify-center text-white text-xl border rounded-full p-2'>
                  <AnimatedNumber from={0} to={100}  /> +
                </span>
                <p className='border-none text-white mt-2 text-center'>Satisfied Clients</p>
              </div>
              <div className='flex-col flex justify-center items-center '>
                <span className='flex items-center justify-center text-white text-xl border rounded-full p-2'>
                  <AnimatedNumber from={0} to={100}  /> +
                </span>
                <p className='border-none text-white mt-2 text-center'>Projects Completed</p>
              </div>
            </motion.div>
            <motion.div 
              ref={linkRef}
              className='mx-auto text-white mt-4 text-xl hover:text-yellow-500 cursor-pointer underline-animation'
              initial={{ opacity: 0, y: 130 }}
              animate={linkInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <Link to="/works">Explore our recent projects</Link>
            </motion.div>
          </div>
        )}
      </div>
      {imageLoaded && (
        <motion.div 
          ref={containerRef}
          className='container mt-16'
          initial={{ opacity: 0, x: -130 }}
          animate={containerInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <p className='text-white md:text-7xl mt-4 text-4xl font-normal uppercase text-justify md:text-left'>We have a <span className='font-bold'> proven track record</span>  of delighting expectations.
          </p>
        </motion.div>
      )}
    </div>
  );
}

export default HeroAbout;
