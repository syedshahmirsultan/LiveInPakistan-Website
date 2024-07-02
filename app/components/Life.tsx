import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
//Life Section Function
const Life = () => {

    const lifeImagesData =[
        { imagesUrl:"/images/culture.png",
        name:"Culture"
    },
    { imagesUrl:"/images/food",
        name:"Food"
    },
    { imagesUrl:"/images/hotels.pg",
        name:"Hotels"
    },
    { imagesUrl:"/images/healthcare.png",
        name:"Health Care"
    },
    { imagesUrl:"/images/languages.png",
        name:"Languages"
    }
]
    return (
        <section className=' w-full mt-40'>
        <div className='p-4 md:pt-4 space-y-8 md:space-y-8'>
            {/* Heading */}
         <Link href="/life"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
 Life
    </h1></Link>
    {/* Mapping of lifeImagesData Array*/}
    <div className='w-full p-2 md:max-w-7xl md:mx-auto grid grid-cols-1 md:grid-cols-5 gap-y-4 md:gap-x-2'>
    {
        lifeImagesData.map((item,index)=> {
            return (
             <Link href="/life">  <div className="w-full h-80 relative">
            <Image src={item.imagesUrl} alt={item.name} layout="fill" className="relative"/>
            <div className='absolute top-0 bottom-0 left-0 right-0 inset-0 bg-black/40 hover:bg-black/0'>
         <text className='text-xl text-gray-100 font-bold mt-12'>{item.name}</text>
            </div>
                </div></Link> 
            )
        })
    }

    </div>
    </div></section>
    );
}

export default Life;
