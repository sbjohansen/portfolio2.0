import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

const Header = ({ socials }) => {
  return (
    <header className='sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:items-center'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        {/* Social Icons */}
        {socials.map((social) => (
          <SocialIcon url={social.url} key={social._id} fgColor='gray' bgColor='transparent' />
        ))}
        <a href='https://github.com/sbjohansen' target='_blank' rel='noreferrer'>
          <span className='text-[14px] ml-2 text-[#808080]'>
            <i className='fab fa-github fa-2x'></i>
          </span>
        </a>
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className='flex flex-row items-center'>
        <SocialIcon url={'#contact'} className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' />
        <p className='uppercase hidden md:inline-flex text-sm text-gra-400'>Get In Touch</p>
      </motion.div>
    </header>
  );
};

export default Header;
