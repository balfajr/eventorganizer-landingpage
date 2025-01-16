import React, { useState } from 'react';
import heroBG from '../assets/herobg-satuindonesia.jpg';
import { useTypewriter } from 'react-simple-typewriter'
import { motion } from "framer-motion";



const Hero = () => {
  const [text] = useTypewriter({
    words: ['is flawless', 'is unforgettable', 'is golden', 'is stress-free', 'delivers results'],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 20,
  })

  const [imageLoaded, setImageLoaded] = useState(false);


  return (
    <div className="relative overflow-hidden inset-50">
      <section>
        <div id="banner" className="h-screen relative flex items-center justify-center">
          <img
            src={heroBG}
            className="absolute inset-0 h-full w-full object-cover"
            alt="Main"
            onLoad={() => setImageLoaded(true)}
          />

        {imageLoaded && (        
          <motion.div className="font-prompt absolute bottom-3 md:left-3 md:text-3xl md:text-left h-1/2 text-white text-center uppercase  font-extrabold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0}}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            <h1 className="leading-none outline-2 outline-black">We ensure your event {'  '} <br />
              <span className='bg-gradient-to-bl from-yellow-400 via-yellow-600 to-yellow-200 bg-clip-text text-transparent' >{text}</span>
            </h1>
        </motion.div>
        )}
        </div>
      </section>
    </div>
  );
}

export default Hero;
