import React from 'react'
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from 'emailjs-com'
const Contact = () => {
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm("service_gj8tb88","template_vs9v855",e.target,"F0F0dloycg2n1mwI0").then(function(response) {
      window.alert("Message sent");
   }, function(error) {
      console.log('FAILED...', error);
   });

  }
  return (
    <div className="h-screen vsm:h-full text-white flex justify-center items-center p-7 vsm:p-0 vsm:pt-3 flex-col">
      <div className="heading">
        <h1 className="cursive mt-5  text-7xl vsm:text-5xl">Contact me</h1>
        <div className="underlineanim border-cyan-500 border w-64 duration-500 mt-3 vsm:w-60"></div>
      </div>
      <div className=' my-11 flex vsm:flex-col vsm:gap-5  flex-row items-center justify-center gap-10'>
        <div className='flex items-center justify-center flex-row gap-2'>
           <CallIcon className=' text-white hover:text-cyan-500'/>
           <h1 className=' text-cyan-500 '>9669266194</h1>
         </div>
         <div className='flex items-center justify-center flex-row gap-2'>
            <EmailIcon className=' text-white hover:text-cyan-500'/>
            <h1 className=' text-cyan-500  '>jainaditi6194@gmail.com</h1>
         </div>
      </div>
      <div className='flex vsm:flex-col flex-row md:gap-8 gap-12 items-center justify-center '>
        <form onSubmit={sendEmail} className=' w-96 vsm:w-64 md:w-72'>
          <div className='flex flex-col'>
            <input name='name' required className='border border-gray-500 rounded-lg p-5 bg-transparent focus:outline-4 focus:outline-white transition-all pb-0 text-lg' type='text' ></input>
            <label className='floating absolute pt-4 pl-4 text-gray-300 font-thin cursor-text text-lg'>Name</label>
          </div>
          <div className='flex flex-col mt-4'>
            <input name='email' required className='border border-gray-500 rounded-lg p-5 bg-transparent focus:outline-4 focus:outline-white transition-all pb-0 text-lg' type='text' ></input>
            <label className='floating absolute pt-4 pl-4 text-gray-300 font-thin cursor-text text-lg'>Email Address</label>
          </div>
          <div className='flex flex-col mt-4'>
            <textarea name='message' required className='border border-gray-500 rounded-lg p-5 bg-transparent h-60 focus:outline-4 focus:outline-white transition-all pb-0 text-lg' type='text' ></textarea>
            <label className='floating absolute pt-4 pl-4 text-gray-300 font-thin cursor-text text-lg'>Message</label>
          </div>
          <button
            type='submit'
            data-te-ripple-init
            data-te-ripple-color="light"
            class=" bg-cyan-500 mt-5 inline-block w-full rounded bg-primary px-6 pt-2.5 pb-2 text-3xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]">
            Send
          </button>
        </form>
        <div class=" vsm:mb-20 relative vsm:w-full vsm:h-40 h-full w-80 md:w-40 rounded-lg shadow-lg dark:shadow-black/20">
        
        </div>
      </div>
    </div>
  )
}

export default Contact;