import Link from 'next/link';
import React from 'react';
import Image from 'next/image'
const About = () => {
    return (
        <main className=' w-full mt-40'>
            <div className='p-4 md:p-8 flex flex-col gap-y-12 md:gap-y-8'>
                {/* Heading */}
       <Link href="/About"> <h1 className="text-green-900 font-extrabold text-5xl md:text-7xl text-center">
     About
        </h1></Link> 
        <p className=" text-lg text-green-900 break-words mt-10 md:mt-20 pr-4 pl-4">
       <span className="font-bold"> Pakistan</span> is the site of several ancient cultures, including the 8,500-year-old Neolithic site of Mehrgarh in Balochistan, the Indus Valley civilisation of the Bronze Age, and the ancient Gandhara civilization. The regions that compose the modern state of Pakistan were the realm of multiple empires and dynasties, including the Achaemenid, the Maurya, the Kushan, the Gupta; the Umayyad Caliphate in its southern regions, the Samma, the Hindu Shahis, the Shah Miris, the Ghaznavids, the Delhi Sultanate, the Mughals, and most recently, the British Raj from 1858 to 1947.</p> 
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mt-16">History</h2>
        <p className=" text-lg text-green-900 break-words p-4">Some of the earliest ancient human civilisations in South Asia originated from areas encompassing present-day Pakistan. The earliest known inhabitants in the region were Soanian during the Lower Paleolithic, of whom artefacts have been found in the Soan Valley of Punjab. The Indus region, which covers most of the present-day Pakistan, was the site of several successive ancient cultures including the Neolithic (7000&ndash;4300 BCE) site of Mehrgarh, and the 5,000-year history of urban life in South Asia to the various sites of the Indus Valley Civilization, including Mohenjo-daro and Harappa.</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mt-16">Independence</h2>
        <div className='flex flex-col gap-y-6 md:flex-row justify-between'>
            <p className=" text-lg text-green-900 break-words p-4">Pakistan gained its independence on August 14, 1947. The country&apos;s founding father, Muhammad Ali Jinnah, played a crucial role in the creation of Pakistan, alongside key leaders such as Allama Iqbal and Liaquat Ali Khan. Their efforts, along with the support of countless others, were instrumental in establishing a separate nation for Muslims of the Indian subcontinent. Pakistan achieved independence from British colonial rule, which had dominated the region for nearly two centuries.</p>
        <div className="flex flex-col w-full gap-y-2 items-center"><Image src="/images/Jinnah.png" alt="Jinnah Image" width={200} height={200} className="object-fit rounded-md"/>
        <text className="text-green-900 text-md font-semibold ml-2">Muhammad Ali Jinnah</text></div>
        </div> 
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mt-16">Geography</h2>
        <p className=" text-lg text-green-900 break-words p-4">Pakistan&apos;s diverse geography and climate host a wide array of wildlife across its 881,913 km² area, comparable to France and the UK combined. The country ranks as the 33rd-largest by total area, with a 1,046 km coastline along the Arabian Sea and Gulf of Oman, and significant land borders with Afghanistan, China, India, and Iran. Pakistan's landscapes include coastal plains, deserts, forests, hills, and glaciated mountains, divided into the northern highlands, the Indus River plain, and the Balochistan Plateau. The northern highlands feature some of the world&apos;s highest peaks, including K2 and Nanga Parbat. The climate varies from tropical to temperate with four distinct seasons and a monsoon period that often brings heavy rainfall and flooding.</p>
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mt-16">Science and Technology</h2>
        <div className='flex flex-col gap-y-6 md:flex-row justify-between'>
        <p className=" text-lg text-green-900 break-words p-4">Pakistan has garnered global acclaim in Science and Technology, highlighted by luminaries like Nobel laureates Abdus Salam in theoretical physics and Salimuzzaman Siddiqui in chemistry. Dr. Abdul Qadeer Khan's pivotal role in Pakistan's nuclear program has also been significant. Additionally, Naveed Sherwani's contributions to chip design, reflected in his widely-used textbooks, underscore Pakistan's growing influence in scientific research and innovation worldwide.</p>
        <div className="flex flex-col gap-y-4 md:flex-row md:gap-x-6">
        <div className="flex flex-col w-full gap-y-2 items-center">
            <Image src="/images/abdulQadeerKhan.png" alt="Image of Abdul Qadeer Khan" width={200} height={200} className='object-fit rounded-md'/>
            <text className="text-green-900 text-md font-semibold ml-2">Dr Abdul Qadeer Khan</text>
        </div>
        <div className="flex flex-col w-full gap-y-2 items-center">
            <Image src="/images/abdusSalam.png" alt="Image of Abdus Salam" width={200} height={200} className='object-fit rounded-md'/>
            <text className="text-green-900 text-md font-semibold ml-2">Prof Abdus Salam</text>
        </div></div>
        
        </div><h2 className="text-3xl md:text-4xl font-extrabold text-center text-green-900 mt-16">Religion</h2>
        <p className=" text-lg text-green-900 break-words p-4">Islam is the state religion, with freedom of religion guaranteed by the constitution. The majority are Muslims (96.47%), followed by Hindus (2.14%) and Christians (1.27%). Minorities include Sikhs, Buddhists, Jains, Zoroastrians (Parsi), and the unique Kalash people who practice animism. Additionally, a small percentage profess no faith, as seen in the 1998 census.</p>
        </div></main>
    );

}
export default About;
