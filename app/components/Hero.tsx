"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

// Images Url Array
const imagesUrl = [
 "/images/image1.png",
 "/images/image2.png",
 "/images/image3.png",
 "/images/image4.png"
];

// Hero Section Function
const Hero = () => {
  // Created State for Image Index Handling
  const [currentImageIndex, setCurrentImageIndex] = useState<any>(0);

  // Use Effect hook used to render images
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentImageIndex((i: number) => (i == imagesUrl.length - 1 ? 0 : i + 1));
    }, 3000);

    return () => clearInterval(timer);
  }, [currentImageIndex]);

  return (
    <div className='relative '>
      <div key={currentImageIndex} className='relative  w-full h-56 md:h-[580px]'>
        <Image
          alt="Hero Image"
          src={imagesUrl[currentImageIndex]} 
          width={1000}
          height={500}
          className='object-contain md:object-cover w-full h-full md:h-[580px] '
        />
      </div>
      <div className='absolute w-full h-full inset-20 md:inset-0 bg-black/30  bottom-0 top-0 left-0 right-0   text-center'>
<h1 className="text-4xl md:text-9xl font-extrabold text-white mt-20 md:mt-40 z-50">PAKISTAN</h1>
<p className='text-white text-2xl md:text-5xl font-medium z-50'>Your adventure begins here</p>
      </div>
    </div>
  );
};

export default Hero;