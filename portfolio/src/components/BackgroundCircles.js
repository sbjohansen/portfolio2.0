import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '50%', '20%'],
      }}
      transition={{
        duration: 2.5,
      }}
      className='relative flex justify-center items-center z-0'>
      <div className='absolute border border-[#1e3878] rounded-full w-[200px] h-[200px] mt-52 animate-ping z-0' />
      <div className='absolute border border-[#1e315c] rounded-full w-[300px] h-[300px] mt-52 z-0' />
      <div className='absolute border border-[#1e315c] rounded-full w-[500px] h-[500px] mt-52 z-0' />
      <div className='absolute border border-[#737278] rounded-full opacity-10 h-[650px] w-[650px] animate-pulse mt-52 z-0' />
      <div className='absolute border border-[#2e57bd] rounded-full w-[800px] h-[800px] mt-52 animate-ping opacity-50 z-0' />
    </motion.div>
  );
};

export default BackgroundCircles;
