"use client"
import { useToast } from "@/components/ui/use-toast";
import { useState } from "react";

const Contact = () => {
    const { toast } = useToast();
    //Handle Submit Function
    async function handleSubmit(event:any) {
        event.preventDefault();
        const formData = new FormData(event.target);

        formData.append("access_key", "907c3e71-4a15-4c8d-a342-9a8853f75863");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: json
        });
        const result = await response.json();
        if (result.success) {
            
        toast({
                title:"Successfully",
                description: "Your message has been sent.",
              })
        }
    }

    return (
        <main className='w-full pt-40 pb-40 flex justify-center'>
            <form onSubmit={handleSubmit} 
            className="bg-white shadow-lg rounded-lg w-full p-6 md:p-12 md:max-w-3xl flex flex-col items-center gap-y-6 md:gap-y-8">
                <h2 className='text-3xl md:text-4xl text-green-700 font-bold'>Contact Me</h2>
                <div className='flex flex-col md:flex-row gap-y-4 md:gap-x-6'>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-gray-600 text-lg font-medium'>Full Name</label>
                        <input type="text" placeholder="Enter your Name" name='name' className='text-gray-800 bg-gray-100 h-10 w-72 md:w-80 rounded-md border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent' required />
                    </div>
                    <div className='flex flex-col gap-y-2'>
                        <label className='text-gray-600 text-lg font-medium'>Email Address</label>
                        <input type="email" placeholder="Enter your Email" name='email' className='text-gray-800 bg-gray-100 h-10 w-72 md:w-80 rounded-md border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent' required />
                    </div>
                </div>
               
                <div className='flex flex-col gap-y-2'>
                    <label className='text-gray-600 text-lg font-medium'>Message</label>
                    <textarea placeholder="Enter your message" name='message' className='text-gray-800 bg-gray-100 h-28 w-full md:w-[36rem] rounded-md border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent' required></textarea>
                </div>
                <button type='submit' className="px-6 py-3 rounded-md bg-green-500 text-white hover:bg-green-600 font-medium text-lg">
                     Send Message</button>
            </form>
        </main>
    );
}

export default Contact;