import React from 'react';
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import { send } from 'emailjs-com';

const Contact = () => {
  const [toSend, setToSend] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [msgSent, setMsgSent] = React.useState(false);

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send('service_6uinwde', 'template_jpzdynn', toSend, '0t6qwuQxFnilxKe2U')
      .then(() => {
        setMsgSent(true);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
  };

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-100 text-2xl'>Contact</h3>
      <div className='flex flex-col space-y-10'>
        <h4 className='text-4xl font-semibold text-center'>If You want to contact me, here is the best way to do it:</h4>

        <form onSubmit={(e) => onSubmit(e)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input onChange={handleChange} name='name' className='contactInput' type='text' placeholder='name' value={toSend.name} />
            <input onChange={handleChange} name='email' className='contactInput' type='email' placeholder='email' value={toSend.email} />
          </div>
          <input onChange={handleChange} name='subject' className='contactInput' type='text' placeholder='subject' value={toSend.subject} />
          <textarea onChange={handleChange} name='message' className='contactInput' placeholder='message' value={toSend.message} />
          <button type='submit' className='bg-green-400 py-5 px-10 rounded-md text-black font-bold text-lg'>
            Submit
          </button>
          {msgSent && <p className='text-green-500'>Message sent!</p>}

          <div className='flex items-center space-x-5 justify-left pb-3 pt-10'>
            <EnvelopeIcon className='text-green-400 h-7 w-7 animate-pulse text-2xl' />
            <p>contact@sbjohansen.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-left pb-10'>
            <MapPinIcon className='text-green-400 h-7 w-7 animate-pulse text-2xl' />
            <p>Bergen, Norway</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
