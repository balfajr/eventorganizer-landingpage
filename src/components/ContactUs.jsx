import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';





const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    service: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_wsqi6um',
      'template_qgpbbzq',
    )
  }
  
  return (
    <div className="font-prompt h-full bg-gradient-to-b from-black from-20% to-stone-950">
      <div className="h-full flex flex-col justify-start items-center py-24">
        <div className="text-white">
        

          <h1 className="text-3xl text-center">
            Let's create something extraordinary together
            <p className="text-center text-base font-thin">
              Drop us a line through the form below and we'll get back to you.
            </p>
          </h1>
        </div>

        <form className="col-span-12 grid grid-cols-12 mt-10 w-3/4 bg-transparent">
          {/* Name Field */}
          <div className="col-span-12 h-fit border-b border-gray-200 mt-10 py-5">
            <div className="flex flex-col">
              <div className="flex">
                <div className="font-medium text-xs md:text-2xl ml-10">
                  <div className="uppercase text-white">What's your name?</div>
                </div>
              </div>
              <input
                type="text"
                className="font-light placeholder:text-gray-500 pl-[88px] h-auto outline-none bg-transparent text-lg mt-5 py-[13px] text-white w-full"
                placeholder="Mamank Racing *"
              />
            </div>
          </div>

          {/* Email Field */}
          <div className="col-span-12 h-fit border-b border-gray-200 py-5">
            <div className="flex flex-col">
              <div className="flex">
                <div className="font-medium text-xs md:text-2xl ml-10">
                  <div className="uppercase text-white">What's your email?</div>
                </div>
              </div>
              <input
                type="email"
                className="font-light pl-[88px] placeholder:text-gray-500 h-auto outline-none bg-transparent text-lg mt-5 text-white w-full py-[13px]"
                placeholder="Mamank@Mamank.com *"
              />
            </div>
          </div>

          {/* Organization Field */}
          <div className="col-span-12 h-fit border-b border-gray-200 py-5">
            <div className="flex flex-col">
              <div className="flex">
                <div className="font-medium text-xs md:text-2xl ml-10">
                  <div className="uppercase text-white">What's the name of your organization?</div>
                </div>
              </div>
              <input
                type="text"
                className="font-light pl-[88px] h-auto outline-none placeholder:text-gray-500 bg-transparent text-lg mt-5 py-[13px] text-white w-full"
                placeholder="Mamank & Racing *"
              />
            </div>
          </div>

          {/* Services Field */}
          <div className="col-span-12 h-fit border-b border-gray-200 py-5">
            <div className="flex flex-col">
              <div className="flex">
                <div className="font-medium text-xs md:text-2xl ml-10">
                  <div className="uppercase text-white">What services are you looking for?</div>
                </div>
              </div>
              <input
                type="text"
                className="font-light pl-[88px] placeholder:text-gray-500 h-auto outline-none bg-transparent text-lg mt-5 py-[13px] text-white w-full"
                placeholder="Event Management *"
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="col-span-12 h-fit border-b border-gray-200 py-5">
            <div className="flex flex-col">
              <div className="flex">
                <div className="font-medium text-xs md:text-2xl ml-10">
                  <div className="uppercase text-white">Your message?</div>
                </div>
              </div>
              <textarea
                className="font-light resize-y pl-[88px] placeholder:text-gray-500 h-auto outline-none bg-transparent text-lg py-[13px] text-white w-full mt-5"
                placeholder="Hallo, can you help me with..."
                rows="3"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-span-9 max-sm:col-span-12 max-xl:col-span-12 w-full flex items-end justify-between gap-6 mt-10">
            <button
              type="submit"
              className="text-4xl outline-none uppercase flex justify-center underline hover:no-underline items-center overflow-hidden transition-all duration-200 text-white"
            >
              <div id="submit-contact">
                <span className="text-4xl">Submit</span>
              </div>
            </button>
          </div>
        </form>
      </div>
      <div className='text-white flex flex-col justify-center items-center pb-20'>
      <p>Follow us on</p>
        <a href="https://www.instagram.com/dwkom_event/?hl=en" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;
