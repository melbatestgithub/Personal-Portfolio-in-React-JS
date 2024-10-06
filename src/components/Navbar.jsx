import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full bg-[#0a192f] text-gray-300 shadow-lg py-4 px-6 md:px-12 flex justify-between items-center z-50 transition-all duration-500 ease-in-out">
      <div className="flex items-center">
        <Link to="/" className="flex items-center text-white hover:text-[#64ffda] transition duration-300 ease-in-out">
          <BsFillPersonLinesFill size={30} className="mr-2" />
          <span className="text-2xl font-bold">M Z</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li className="hover:text-[#64ffda] transition duration-300 ease-in-out">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-[#64ffda] transition duration-300 ease-in-out">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-[#64ffda] transition duration-300 ease-in-out">
          <a href="#skill">Skills</a>
        </li>
        <li className="hover:text-[#64ffda] transition duration-300 ease-in-out">
          <a href="#work">Work</a>
        </li>
        <li className="hover:text-[#64ffda] transition duration-300 ease-in-out">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Hamburger Icon */}
      <div className="md:hidden z-10" onClick={handleClick}>
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={`fixed top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center transition-transform duration-500 ease-in-out transform ${
          nav ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <a href="#home" onClick={handleClick}>Home</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <a href="#about" onClick={handleClick}>About</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <a href="#skill" onClick={handleClick}>Skills</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <a href="#work" onClick={handleClick}>Work</a>
        </li>
        <li className="py-6 text-4xl hover:text-[#64ffda]">
          <a href="#contact" onClick={handleClick}>Contact</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
