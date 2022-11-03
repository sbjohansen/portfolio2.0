import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Hero from './components/Hero';
import WorkExperience from './components/WorkExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid';
import { skills, projects, experiences, pageInfo, socials } from './data/data';

function App() {
  return (
    <div className='bg-[#1b2c52] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#1b2c52]'>
      <Header socials={socials} />
      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <Projects projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <footer className='sticky bottom-5 w-full cursor-pointer'>
        <div>
          <a href='#hero'>
            <ArrowUpCircleIcon className='h-10 w-10 mx-auto text-gray-500 hover:text-gray-400' />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
