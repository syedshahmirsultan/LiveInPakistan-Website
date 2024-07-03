import Link from 'next/link';  
import React from 'react';  
import Image from 'next/image';  

const About = () => {
    return (
        <main className='w-full mt-40'>
            <div className='p-4 md:p-8 flex flex-col gap-y-12 md:gap-y-8'>
                {/* Heading */}
                <Link href="/About">
                    <h1 className="text-green-900 font-extrabold text-5xl md:text-7xl text-center">
                        About
                    </h1>
                </Link> 
                {/* Paragraph about Pakistan */}
                <p className="text-lg mt-8 text-green-950 break-words">
                    <span className='font-bold'>Pakistan</span>, officially the Islamic Republic of Pakistan, is a country in South Asia. It is the fifth-most populous country, with a population of over 241.5 million, having the second-largest Muslim population as of 2023. Islamabad is the nation's capital, while Karachi is its largest city and financial centre. Pakistan is the 33rd-largest country by area and the ninth-largest in Asia. Bounded by the Arabian Sea on the south, the Gulf of Oman on the southwest, and the Sir Creek on the southeast, it shares land borders with India to the east; Afghanistan to the west; Iran to the southwest; and China to the northeast. It shares a maritime border with Oman in the Gulf of Oman, and is separated from Tajikistan in the northwest by Afghanistan's narrow Wakhan Corridor.
                    <br/><br/>
                    Pakistan is divided into four provinces: Punjab, Sindh, Khyber Pakhtunkhwa, and Balochistan, each with its own distinct culture and heritage. Gilgit-Baltistan, while not a province, is an autonomous territory with its own legislative assembly. The national bird of Pakistan is the Chukar partridge, and the national animal is the Markhor, a wild goat species native to the mountainous regions of the country.
                </p>
                {/* Images of national bird and animal */}
                <div className="flex flex-col items-center md:justify-center md:flex-row gap-y-8 md:gap-x-4 mt-8">
                    <div className="flex-col">
                        <Image src="/images/chukar.png" alt="Chukar Partridge Image" width={250} height={250} className="object-fit rounded-md"/> 
                        <p className="text-green-900 text-lg mt-2 font-bold text-center">Chukar Partridge</p> 
                    </div>
                    <div className="flex-col">
                        <Image src="/images/markhor.png" alt="Markhor Image" width={200} height={200} className="object-fit rounded-md"/> 
                        <p className="text-green-900 text-lg mt-2 font-bold text-center">Markhor</p> 
                    </div>
                </div>
                {/* History section */}
                <h2 className="text-5xl md:text-5xl font-extrabold text-center text-green-900 mt-16">History</h2>
                <p className="text-lg text-green-950 break-words p-4">Some of the earliest ancient human civilizations in South Asia originated from areas encompassing present-day Pakistan. The earliest known inhabitants in the region were Soanian during the Lower Paleolithic, of whom artifacts have been found in the Soan Valley of Punjab. The Indus region, which covers most of the present-day Pakistan, was the site of several successive ancient cultures including the Neolithic (7000–4300 BCE) site of Mehrgarh, and the 5,000-year history of urban life in South Asia to the various sites of the Indus Valley Civilization, including Mohenjo-daro and Harappa.</p>
                {/* Independence section */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mt-16">Independence</h2>
                <div className='flex flex-col gap-y-6 md:flex-row justify-between'>
                    <p className="text-lg text-green-950 break-words p-4">Pakistan gained its independence on August 14, 1947. The country's founding father, Muhammad Ali Jinnah, played a crucial role in the creation of Pakistan, alongside key leaders such as Allama Iqbal and Liaquat Ali Khan. Their efforts, along with the support of countless others, were instrumental in establishing a separate nation for Muslims of the Indian subcontinent. Pakistan achieved independence from British colonial rule, which had dominated the region for nearly two centuries.</p>
                    <div className="flex flex-col w-full gap-y-2 items-center">
                        <Image src="/images/Jinnah.png" alt="Muhammad Ali Jinnah Image" width={200} height={200} className="object-fit rounded-md"/>
                        <text className="text-green-900 text-lg font-bold text-center">Muhammad Ali Jinnah</text>
                    </div>
                </div> 
                {/* Geography section */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mt-16">Geography</h2>
                <p className="text-lg text-green-950 break-words p-4">Pakistan's diverse geography and climate host a wide array of wildlife across its 881,913 km² area, comparable to France and the UK combined. The country ranks as the 33rd-largest by total area, with a 1,046 km coastline along the Arabian Sea and Gulf of Oman, and significant land borders with Afghanistan, China, India, and Iran. Pakistan's landscapes include coastal plains, deserts, forests, hills, and glaciated mountains, divided into the northern highlands, the Indus River plain, and the Balochistan Plateau. The northern highlands feature some of the world's highest peaks, including K2 and Nanga Parbat. The climate varies from tropical to temperate with four distinct seasons and a monsoon period that often brings heavy rainfall and flooding.</p>
                {/* Science and Technology section */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mt-16">Science and Technology</h2>
                <div className='flex flex-col gap-y-6 md:flex-row md:justify-between mt-4'>
                    <p className="text-lg text-green-950 w-full md:w-[65%] break-words p-4">Pakistan has garnered global acclaim in Science and Technology, highlighted by luminaries like Nobel laureates Abdus Salam in theoretical physics and Salimuzzaman Siddiqui in chemistry. Dr. Abdul Qadeer Khan's pivotal role in Pakistan's nuclear program has also been significant. Additionally, Naveed Sherwani's contributions to chip design, reflected in his widely-used textbooks, underscore Pakistan's growing influence in scientific research and innovation worldwide.</p>
                    <div className="flex flex-col gap-y-8 md:flex-row md:gap-x-3">
                        <div className="flex flex-col w-full gap-y-2 items-center">
                            <Image src="/images/abdulQadeerKhan.png" alt="Image of Abdul Qadeer Khan" width={240} height={270} className='object-fit rounded-md'/>
                            <text className="text-green-900 text-lg font-bold text-center">Dr Abdul Qadeer Khan</text>
                        </div>
                        <div className="flex flex-col w-full gap-y-2 items-center">
                            <Image src="/images/abdusSalam.png" alt="Image of Abdus Salam" width={200} height={200} className='object-fit rounded-md'/>
                            <text className="text-green-900 text-lg font-bold text-center">Prof Abdus Salam</text>
                        </div>
                    </div>
                </div>
                {/* Religion section */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 mt-16">Religion</h2>
                <p className="text-lg text-green-950 break-words p-4">Islam is the state religion, with freedom of religion guaranteed by the constitution. The majority are Muslims (96.47%), followed by Hindus (2.14%) and Christians (1.27%). Minorities include Sikhs, Buddhists, Jains, Zoroastrians (Parsi), and the unique Kalash people who practice animism. Additionally, a small percentage profess no faith, as seen in the 1998 census.</p>
            </div>
        </main>
    );
}

export default About;
