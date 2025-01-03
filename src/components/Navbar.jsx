import React from 'react';
import logo from '../assets/logo.webp';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaSquareTwitter } from 'react-icons/fa6';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className='mx-2 w-10' src={logo} alt="logo" />
      </div>
      <div className='m-8 flex atems-center justify-center gap-4 text-2xl'>
        <a href="https://www.linkedin.com/feed/?trk=joogle" target='_blank'>
        <FaLinkedin/>
        </a>
        <a href='https://www.github.com' target="_blank">
        <FaGithub/>
        </a>
        <a href="https://www.instagram.com/" target='_blank'>
        <FaInstagram/>
        </a>
        <a href="#" target='_blank'>
        <FaSquareTwitter/>
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
