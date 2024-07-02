import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
//Visit Section Function
const Visit = () => {

    //visit Sites Data Array
    const visitSitesData = [
        { imageUrl:"/images/ansoolake.png",
          location:"Manshera District, KPK",
          name:"Ansoo Lake"

        },
        { imageUrl:"/images/damanekoh.png",
            location:"Margalla Hills, Islamabad",
            name:"Daman-e-Koh"
  
          },
          { imageUrl:"/images/deosaiNationalPark.png",
            location:"Skardu District, Gilgit Baltistan,",
            name:"Deosai National Park"
  
          },
          { imageUrl:"/images/Derawarfort.png",
            location:"Bahawalpur District, Punjab",
            name:"Derawar Fort"
  
          },
          { imageUrl:"/images/fairyMeadows.png",
            location:"Diamer District, Gilgit Baltistan",
            name:"Fairy Meadows"
  
          },
          { imageUrl:"/images/fortMunro.png",
            location:"DG Khan District, Punjab",
            name:"Fort Munro"
  
          },
          { imageUrl:"/images/hunzavalley.png",
            location:"Hunza District, Gilgit Baltistan",
            name:"Hunza Valley"
  
          },
          { imageUrl:"/images/kalashValley.png",
            location:"Chitral District, KPK",
            name:"Kalash Valley"
  
          },
          { imageUrl:"/images/kartarpur.png",
            location:"Narowal District, Punjab",
            name:"Kartarpur "
  
          },
          { imageUrl:"/images/katasRajTemple.png",
            location:"Near Chakwal, Punjab",
            name:"Katas Raj Temple"
  
          },
          { imageUrl:"/images/khanpurdam.png",
            location:"Khanpur, KPK",
            name:"Khanpur Dam"
  
          },
          { imageUrl:"/images/kundmalirbeach.png",
            location:"Hingol National Park, Balochistan",
            name:"Kund Malir Beach"
  
          },
          { imageUrl:"/images/lahorefort.png",
            location:"Lahore, Punjab",
            name:"Lahore Fort"
  
          },
          { imageUrl:"/images/maklithatta.png",
            location:"District Thatta, Sindh",
            name:"Makli Thatta"
  
          },
          { imageUrl:"/images/mazarequaid.png",
            location:"Karachi, Sindh",
            name:"Mazar-e-Quaid"
  
          },
          { imageUrl:"/images/mohenjodaro.png",
            location:"Larkana District, Sindh",
            name:"Mohenjo-daro"
  
          },
          { imageUrl:"/images/monument.png",
            location:"Islamabad",
            name:"Pakistan Monument"
  
          },
          { imageUrl:"/images/naltharValley.png",
            location:"Near Gilgit City, Gilgit Baltistan",
            name:"Nalthar Valley"
  
          },
          { imageUrl:"/images/naranKhagan.png",
            location:"Manshera District, KPK",
            name:"Naran Khagan"
  
          },
          { imageUrl:"/images/neelam.png",
            location:"Neelum District, Azad Kashmir",
            name:"Neelum District"
  
          },
          { imageUrl:"/images/Rakaposhi.png",
            location:"Near Gilgit City, Gilgit Baltistan",
            name:"Rakaposhi"
  
          },
          { imageUrl:"/images/rawalakot.png",
            location:"Poonch District, Azad Kashmir",
            name:"Rawalakot"
  
          },
          { imageUrl:"/images/thardesert.png",
            location:"border of Punjab and Sindh",
            name:"Thar Desert"
  
          },
          { imageUrl:"/images/UshoForest.png",
            location:"Usho Valley, KPK",
            name:"Usho Forest"
  
          }
    ]

    //Return Statement
    return (
        <section className=' w-full mt-40'>
            <div className='p-4 md:pt-4 space-y-12 md:space-y-8'>
                {/* Heading */}
             <Link href="/visit"> <h1 className="text-green-950 mb-20 font-extrabold text-5xl md:text-7xl text-center">
     Visit
        </h1></Link>
       {/* VisitSitesData Array Mapping*/} 
        <div className="w-full  md:max-w-7xl md:mx-auto grid grid-cols-1 gap-y-4 md:grid-cols-4 md:gap-x-4">
           {
            visitSitesData.map((item,index)=>{
                return (
                 <Link href="/visit"  key={index} ><div className="w-full h-56 relative">
                    <Image src={item.imageUrl} alt={item.name} layout="fill" className="relative"/>
                    <div className='absolute bg-black/40 hover:bg-black/0 top-0 bottom-0 left-0 right-0 inset-0'>
                      <p className="text-2xl font-bold text-white flex justify-center mt-20 items-center">{item.name}</p>
                      <p className='text-lg font-semibold text-white flex justify-center  mt-2'>{item.location}</p>  </div>
                    </div></Link> 
                )
            })
           } </div>
            </div>
        </section>
    );
}

export default Visit;


