import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <nav className='fixed w-full h-[80px] flex items-center justify-between px-4 bg-[#0a192f] text-gray-300 z-50'>
      <Link to='home' smooth={true} duration={500}>
        <img src={Logo} alt='Logo' className='w-[200px] cursor-pointer' />
      </Link>
      
      {/* Desktop Nav Links */}
      <div className='hidden md:flex items-center space-x-6'>
        <ul className='flex items-center space-x-6'>
          <li><Link to='home' smooth={true} duration={500}>Home</Link></li>
          <li><Link to='about' smooth={true} duration={500}>About</Link></li>
          <li><Link to='skills' smooth={true} duration={500}>Skills</Link></li>
          <li><Link to='Projects' smooth={true} duration={500}>Projects</Link></li>
          <li><Link to='contact' smooth={true} duration={500}>Contact</Link></li>
        </ul>
        {/* Social Icons */}
        <ul className='flex items-center space-x-6'>
          <li>
            <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-pink-500 text-2xl" />
            </a>
          </li>
          <li>
            <a href='https://github.com/RamaRaju-vj' target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-pink-500 text-2xl" />
            </a>
          </li>
          <li>
            <a href='mailto:vadapalli.j@northeastern.edu'>
              <HiOutlineMail className="text-pink-500 text-2xl" />
            </a>
          </li>
          <li>
            <a href='https://drive.google.com/file/d/1yvYPK-1jXzIpcqOzCIhybje7wtUzWMZz/view?usp=sharing' target="_blank" rel="noopener noreferrer">
              <BsFillPersonLinesFill className="text-pink-500 text-2xl" />
            </a>
          </li>
        </ul>
      </div>
      {/* Hamburger Icon */}
      <div onClick={handleClick} className='md:hidden z-10 text-gray-300'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile Menu */}
      <ul className={`${nav ? 'flex' : 'hidden'} absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex-col justify-center items-center`}>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='home' smooth={true} duration={500}>Home</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='about' smooth={true} duration={500}>About</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='skills' smooth={true} duration={500}>Skills</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='Projects' smooth={true} duration={500}>Projects</Link></li>
        <li className='py-6 text-4xl'><Link onClick={handleClick} to='contact' smooth={true} duration={500}>Contact</Link></li>
        
        {/* Social Icons */}
        <li className='pt-6 text-3xl'>
          <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </li>
        <li className='pt-6 text-3xl'>
          <a href='https://github.com/RamaRaju-vj/RamaRaju-vj' target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
        </li>
        <li className='pt-6 text-3xl'>
          <a href='mailto:vadapalli.j@northeastern.edu'>
            <HiOutlineMail />
          </a>
        </li>
        <li className='pt-6 text-3xl'>
          <a href='https://drive.google.com/file/d/1yvYPK-1jXzIpcqOzCIhybje7wtUzWMZz/view?usp=sharing' target="_blank" rel="noopener noreferrer">
            <BsFillPersonLinesFill />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
