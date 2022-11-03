import React from 'react';
import { motion } from 'framer-motion';

const About = ({ pageInfo }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-200 text-2xl'>About</h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        viewport={{ once: true }}
        src={pageInfo.profilePic}
        alt='Portfolio Photo'
        className='-mb-20 md:mb-0 shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-54 md:h-75 xl:w-auto xl:h-[700px] grayscale'
      />
      <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold '>
          Here is my <span className='text-green-400'>background.</span>
        </h4>
        <p className='text-base'>{pageInfo.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
