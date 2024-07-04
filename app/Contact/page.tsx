import React from 'react';

const Contact = () => {
    return (
        <main className='w-full mt-40 flex-col items-center justify-center'>
        <form className="bg-gray-100/50 shadow-md rounded-md w-full p-4 md:p-8 md:max-w-5xl md:mx-auto flex flex-col gap-y-3 md:gap-y-8">
<h2 className='text-3xl md:text-4xl text-green-950 font-bold'>Contact Me</h2>
<div className='flex gap-x-2'>
   <label className='text-green-950 md:text-xl font-medium'>
    Full Name</label>
    <input type="text" placeholder="Enter your Name" className='' required/> 
</div>
<div className='flex gap-x-2'>
   <label className='text-green-950 md:text-xl font-medium'>
    Email Address</label>
    <input type="email" placeholder="Enter your Email" className='' required/> 
</div>
<div className='flex gap-x-2'>
   <label className='text-green-950 lg md:text-xl font-medium'>
    Subject</label>
    <input type="text" placeholder="Enter Subject ..." className='' required/> 
</div>
<div  className='flex gap-x-2'>
   <label className='text-green-950 md:text-xl font-medium'>
    Message</label>
    <textarea  placeholder="Enter your message" className='' required/> 
</div>
<button type='submit' className="px-5 py-2.5 rounded-md  flex justify-center text-white bg-green-950 hover:bg-green-900 font-semibold text-sm">Send Message</button>
        </form>
             </main>
    );
}

export default Contact;
