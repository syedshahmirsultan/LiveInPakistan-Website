import React from 'react';

const Contact = () => {
    return (
        <main className='w-full mt-40 flex-col items-center justify-center'>
        <form className="bg-green-950 shadow-md rounded-md w-full p-4 md:p-12 md:max-w-3xl md:mx-auto flex flex-col items-center gap-y-2 md:gap-y-4">
<h2 className='text-3xl md:text-4xl text-white font-bold'>Contact Me</h2>
<div className='flex gap-x-2'>
   <label className='text-white text-lg font-semibold'>
    Full Name</label>
    <input type="text" placeholder="Enter your Name" className='text-white text-md text-center text-whitebg-white h-8 w-72 rounded-md border border-green-900' required/> 
</div>
<div className='flex gap-x-2'>
   <label className='text-white text-lg  font-semibold'>
    Email Address</label>
    <input type="email" placeholder="Enter your Email" className='text-white text-md text-center text-whitebg-white h-8 w-72 rounded-md border border-green-900' required/> 
</div>
<div className='flex gap-x-2'>
   <label className='text-white text-lg font-semibold'>
    Subject</label>
    <input type="text" placeholder="Enter Subject ..." className='text-white text-md text-center text-whitebg-white h-8 w-72 rounded-md border border-green-900' required/> 
</div>
<div  className='flex gap-x-2'>
   <label className='text-white text-lg font-semibold'>
    Message</label>
    <textarea  placeholder="Enter your message" className='outline-none text-whitebg-white text-lg h-20 w-80 rounded-md border border-gray-500' required/> 
</div>
<button type='submit' className="px-5 py-2.5 rounded-md  flex justify-center text-green-950 bg-white hover:bg-gray-100 font-medium text-sm">Send Message</button>
        </form>
             </main>
    );
}

export default Contact;




