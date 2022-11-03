import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import { Link } from 'react-router-dom';

const Hero = ({ pageInfo }) => {
  const [text] = useTypewriter({
    words: [`Hi, My name is ${pageInfo.name}`, "I'm a Junior Fullstack Developer"],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />

      <img src={pageInfo.image} alt='Portfolio' className='relative rounded-full w-32 h-32 object-cover mx-auto' />

      <div className='z-20'>
        <h2 className='text-sm uppercase text-gray-200 pb-2 tracking-[10px] z-20'>{pageInfo.role}</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10 z-20'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#4ade80' />
        </h1>
        <div className='pt-5'>
          <a href='#about'>
            <button className='heroButton '>About</button>
          </a>
          <a href='#experience'>
            <button className='heroButton'>Experience</button>
          </a>
          <a href='#skills'>
            <button className='heroButton'>Skills</button>
          </a>
          <a href='#projects'>
            <button className='heroButton'>Projects</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
