import React from 'react';
import { motion } from 'framer-motion';

const Skill = ({ skill, directionLeft }) => {
  return (
    <div className='group relative flex curson-pointer'>
      <motion.img
        initial={{
          x: directionLeft ? -200 : 200,
        }}
        transition={{
          duration: 1,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        src={skill.url}
        alt='Skill Icon'
        className='w-24 h-24 rounded-full xl:w-32 xl:h-32 object-cover filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 xl:w-32 xl:h-32 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{skill.progress}% </p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
