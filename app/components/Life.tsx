import Link from 'next/link';
import React from 'react';

//Life Section Function
const Life = () => {
    return (
        <section className=' w-full mt-48'>
        <div className='p-4 md:pt-4 space-y-8 md:space-y-8'>
            {/* Heading */}
         <Link href="/life"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
 Life
    </h1></Link>
    {/*Text */}
    <p className=" text-lg text-green-800 break-words md:pr-8 md:pl-8">
    Many expats live and work in Pakistan without major issues, though the country does have some security challenges. Safety has improved since 2012, and cities like Islamabad, Lahore, and Karachi have large expat communities that work to keep foreign nationals safe. Expats can also benefit from establishing a network of local contacts, including other expats, who can offer guidance and community support.    </p>
    {/* Button */}
    <Link href="/study" className=' flex justify-center'><button className=" mt-6 md:mt-3 flex justify-center px-6 py-3 rounded-lg text-sm font-semibold text-white hover:bg-green-900 bg-green-950 animate-bounce duration-500">Read More</button></Link>
    </div></section>
    );
}

export default Life;
