import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'; 
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';


const Home = () => {
  return (
    <div name='home' className='w-full min-h-screen bg-[#0a192f] flex items-center'>
  {/* Container */}
  <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center'>
    <p className='text-pink-600'>👋 Hi, my name is</p>
    <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
      V.J.Rama Raju
    </h1>
    <h3 className='text-2xl sm:text-4xl font-bold text-[#8892b0]'>
      "Looking for Software Engineering | Cloud & DevOps | Backend Engineering | Site Reliability Engineering internships"
    </h3>
    <p className='text-[#8892b0] py-4 max-w-[700px]'>
      🎓 Currently pursuing MS in software engineering systems @ Northeastern University
    </p>
    <div>
      <div className='flex flex-wrap space-x-4 my-2'>
        {/* "View my projects" button */}
        <Link to='Projects' smooth={true} duration={500} className='text-white group border-2 px-4 py-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'>
          View my projects
          <HiArrowNarrowRight className='ml-2 group-hover:rotate-90 duration-300' />
        </Link>

        {/* Link to Resume */}
        <a href='https://drive.google.com/file/d/1jgxuCH8S9Pv1FrEd0of8bWfE5ZlVereY/view?usp=sharing' target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-4 py-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <BsFillPersonLinesFill className='text-2xl' />
          <span className='ml-2'>Resume</span>
        </a>

        {/* Link to LinkedIn */}
        <a href='https://www.linkedin.com/in/ram-cloud-devops/' target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-4 py-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <FaLinkedin className='text-2xl' />
          <span className='ml-2'>LinkedIn</span>
        </a>

        {/* Link to GitHub */}
        <a href='https://github.com/RamaRaju-vj' target="_blank" rel="noopener noreferrer" className='text-white group border-2 px-4 py-2 inline-flex items-center hover:bg-pink-600 hover:border-pink-600'>
          <FaGithub className='text-2xl' />
          <span className='ml-2'>GitHub</span>
        </a>
      </div>
    </div>
  </div>
</div>

  );
};

export default Home;
