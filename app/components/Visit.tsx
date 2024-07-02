import Link from 'next/link';
import React from 'react';

const Visit = () => {
    return (
        <section className=' w-full mt-24'>
            <div className='p-4 md:p-8 space-y-3 md:space-y-8'>
             <Link href="/about"> <h1 className="text-green-900 font-extrabold text-4xl md:text-6xl text-center">
     Visit
        </h1></Link></div>
        </section>
    );
}

export default Visit;
