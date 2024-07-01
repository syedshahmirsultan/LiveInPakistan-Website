"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Images Url Array
const imagesUrl = [
  "/images/swat.png",
  "/images/skardu.png",
  "/images/ansoolake.png",
  "/images/damanekoh.png",
  "/images/deosaiNationalPark.png",
  "/images/Derawarfort.png",
  "/images/fairyMeadows.png",
  "/images/fortMunro.png",
  "/images/hunzavalley.png",
  "/images/kalashValley.png",
  "/images/katarpur.png",
  "/images/katasRajTemple.png",
  "/images/khanpurdam.png",
  "/images/kundmalirbeach.png",
  "/images/lahorefort.png",
  "/images/maklithatta.png",
  "/images/monument.png",
  "/images/naltharValley.png",
  "/images/naranKhagan.png",
  "/images/neelam.png",
  "/images/rawalakot.png"
];

// Hero Section Function
const Hero = () => {
  // Created State for Image Index Handling
  const [currentImageIndex, setCurrentImageIndex] = useState<any>(0);

  // Use Effect hook used to render images
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((i: number) => (i == imagesUrl.length - 1 ? 0 : i + 1));
    }, 4000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className='relative'>
      <div key={currentImageIndex} className='relative w-full h-[500px]'>{/*imagesUrl[currentImageIndex]*/}
        <Image
          alt="Hero Image"
          src={"/images/hunzavalley.png"} 
          width={1000}
          height={500}
          className='object-cover w-full h-[500px]'
        />
      </div>
      <div className='absolute w-full h-full inset-20 md:inset-0  bottom-0 top-0 left-0 right-0   text-center'>
<h1 className="text-3xl md:text-8xl font-extrabold text-white mt-40">PAKISTAN</h1>
<p className='text-white text-2xl md:text-4xl font-medium'>Your adventure begins here</p>
      </div>
    </div>
  );
};

export default Hero;
