import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { ReactComponent as Logo } from '../assets/dwkomlogo-putih.svg'; 
import { ReactComponent as Logo1 } from '../assets/dw-logoputih.svg'; 
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const menuItems = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Works', href: '/works' },
        { name: 'Contact', href: '/contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`px-4 fixed w-full top-0 z-50 backdrop-blur-md bg-black bg-opacity-30 transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
            <div className="container mx-auto flex justify-between items-center">
               <Link to="/">
                <Logo href="/Home" alt="Logo" className={`h-8 w-auto md:h-10 transition-all duration-300 $
                {isScrolled ? 'h-6' : 'h-8'}`} />
                </Link>
                <div className="">
                    <button className="text-white hover:text-white duration-200 scale-125 hover:md:scale-150 " onClick={toggleMenu}> 
                        <FaBars /> 
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`bg-black h-screen fixed inset-0 transform transition-transform duration-300 ease-in-out ${
                    isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <button
                    className="text-white absolute top-4 right-4 text-3xl font-thin"
                    onClick={toggleMenu}
                >
                    <FaTimes />
                </button>
                {menuItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="text-white flex flex-col items-center text-4xl py-10 md:py-5 mt-9 hover:underline duration-200"
                    >
                        {item.name}
                    </a>
                ))}
                <div className="flex items-center justify-center">
                    <Logo1 alt="Logo" className="h-16 absolute bottom-10 md:h-24" />
                </div>
            </div>
        </nav>  
    );
}

export default NavBar;
