import Link from 'next/link';
import React from 'react';

//Life Section Function
const Life = () => {
    return (
        <section className=' w-full mt-40'>
        <div className='p-4 md:pt-4 space-y-8 md:space-y-8'>
            {/* Heading */}
         <Link href="/life"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
 Life
    </h1></Link>
    {/*Text */}
    </div></section>
    );
}

export default Life;
