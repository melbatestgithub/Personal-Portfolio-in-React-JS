import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full bg-[#0a192f] text-gray-300 shadow-md py-3 px-6 md:px-12 flex justify-between items-center z-50">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <BsFillPersonLinesFill size={24} className="mr-2" />
          <span className="text-xl font-bold">Melaku Zeleke</span>
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-2">
        <li>
          <Link to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} className="nav-link">
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <div onClick={handleClick} className="cursor-pointer">
          {nav ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <ul className={`absolute top-16 right-6 md:hidden ${nav ? 'flex flex-col' : 'hidden'}`}>
        <li>
          <Link onClick={handleClick} to="home" smooth={true} duration={500} className="nav-link">
            Home
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="about" smooth={true} duration={500} className="nav-link">
            About
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500} className="nav-link">
            Skills
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="work" smooth={true} duration={500} className="nav-link">
            Work
          </Link>
        </li>
        <li>
          <Link onClick={handleClick} to="contact" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
