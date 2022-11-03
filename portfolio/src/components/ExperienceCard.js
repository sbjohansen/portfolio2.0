import React from 'react';
import { motion } from 'framer-motion';

const ExperienceCard = ({ experience }) => {
  return (
    <article className='flex flex-col mt-10 rounded-lg items-center space-y-7 shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#09142f] p-10 hover:opacity-100 opacity-40 transition-opacity duration-200 overflow-hidden '>
      <picture>
        <source srcSet={experience.image} type='image/webp' />
        <motion.img
          initial={{
            y: -100,
            opacity: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          src={experience.image}
          alt='Company Photo'
          className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
        />
      </picture>
      <div className='px-0 md:px-10 text-left '>
        <h4 className='text-4xl font-light'>{experience.jobTitle}</h4>
        <p className='font-bold text-2xl mt-1'>{experience.company}</p>
        <div className='flex space-x-2 my-2'>
          {experience.technologies.map((technology) => (
            <img src={technology.url} alt='technology' className='w-10 h-10 rounded-full' />
          ))}
        </div>
        <p className='uppercase py-5 text-gray-300'>
          {experience.startDate} - {experience.isCurrentlyWorkingHere ? 'Present' : new Date(experience.dateEnded).toDateString()}
        </p>

        <ul className='list-disc space-y-4 ml-5 text-lg'>
          {experience?.points?.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
