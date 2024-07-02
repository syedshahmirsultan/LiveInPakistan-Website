import Link from 'next/link';
import React from 'react';

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
        <section className=' w-full mt-24'>
            <div className='p-4 md:p-8 space-y-3 md:space-y-8'>
                {/* Heading */}
             <Link href="/about"> <h1 className="text-green-950 font-extrabold text-4xl md:text-6xl text-center">
     Visit
        </h1></Link></div>
        </section>
    );
}

export default Visit;
