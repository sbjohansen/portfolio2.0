import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightCircleIcon } from '@heroicons/react/24/solid';
const Projects = ({ projects }) => {
  return (
    <div className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects</h3>

      <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1b2c52]'>
        {projects.map((project, index) => (
          <motion.div key={index} className='w-screen shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen'>
            <motion.img
              initial={{
                opacity: 0,
                y: -300,
              }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{
                y: 0,
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              src={project.image}
              alt='Portfolio Photo'
              className='relative w-172 h-72 object-cover mx-auto rounded-md border-white border-4'
            />
            <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
              <h4 className='text-4xl font-semibold text-center'>
                <span className=''>
                  Project {index + 1} of {projects.length}:{' '}
                </span>
                <span className='text-green-400'>{project.title}</span>
              </h4>
              <div className='flex items-center space-x-2 justify-center'>
                {project?.technologies.map((technology, index) => (
                  <motion.img
                    key={index}
                    initial={{
                      opacity: 0,
                      y: -300,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    whileInView={{
                      y: 0,
                      opacity: 1,
                    }}
                    viewport={{
                      once: true,
                    }}
                    src={technology.image}
                    alt='Portfolio Photo'
                    className='h-10 w-10  '
                  />
                ))}
              </div>
              <p className='text-lg text-center md:text-left'>{project.summary}</p>
              <div className='flex items-center space-x-2 md:justify-evenly'>
                <div className='flex justify-center items-center'>
                  <a href={project.githubLink} target='_blank' rel='noreferrer'>
                    <span className='h-14 w-14 mx-auto text-green-400 hover:text-green-700'>
                      <i className='fab fa-github fa-3x'>Github</i>
                    </span>
                  </a>
                  <span className='pl-5'>Github</span>
                </div>
                <div className='flex space-x-2 justify-center items-center'>
                  <div className='flex justify-center items-center'>
                    <a href={project.demo} target='_blank' rel='noreferrer'>
                      <ArrowRightCircleIcon className='h-14 w-14 mx-auto text-green-400 hover:text-green-700' />
                    </a>
                    <span className='pl-5'>Website</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='w-full absolute top-[30%] bg-[#686c6f]/20 left-0 h-[500px] -skew-y-12' />
    </div>
  );
};

export default Projects;
