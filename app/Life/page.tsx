import Link from 'next/link';
import React from 'react';
import Image from 'next/image'




const lifeData = [
    {
     name:"Culture",
     text:"The culture of Pakistan is a rich mosaic of traditions, lifestyles, and customs, reflecting the diversity of its people. The national dress, Shalwar Kameez, is worn by both men and women and symbolizes the nation&apos;s cultural identity. In urban areas, Western attire is also common, especially among the younger generation. Traditional dresses vary by region; for instance, Sindhi Ajrak and Balochi embroidered dresses are renowned for their intricate designs, while Punjabis often wear vibrant, colorful attire. Festivals play a significant role in Pakistani culture, with Eid-ul-Fitr and Eid-ul-Adha being the most widely celebrated religious holidays, marked by communal prayers, feasting, and giving charity. Basant, the kite-flying festival in Punjab, brings a burst of color to the skies, while the Sindhi Topi and Ajrak Day celebrate Sindhi heritage. Weddings in Pakistan are grand, multi-day events filled with customs like Mehndi, where hands are decorated with henna. The traditional music and dance, including Bhangra and Luddi, add a festive spirit to celebrations. Pakistani culture is also reflected in its hospitality, with guests and travelers often welcomed warmly with traditional sweets and tea, earning the country a global reputation for its hospitality. This vibrant culture, rich in traditions and festivals, showcases the unity and diversity of the Pakistani people.",
     imageUrl:"/images/culture.png"
    },
    {
        name:"Food",
        text:"Food in Pakistan is a vibrant blend of flavors and traditions, integral to its cultural identity. Famous dishes like Karachi&apos;s biryani, Lahore&apos;s nihari, and Balochi sajji highlight the regional diversity, while traditional foods such as kebabs, haleem, and saag are cherished nationwide. Pakistani cuisine is distinguished by its rich use of spices and herbs, creating aromatic dishes that contrast with the milder flavors of Western cuisines. Despite this, Western dishes are widely available in major cities, with hotels and restaurants offering a variety of options like pizzas, burgers, and pasta. International food chains are also present, catering to diverse tastes. This coexistence of traditional and Western cuisine reflects Pakistan&apos;s evolving food culture, rooted in rich traditions yet embracing global influences. The use of ingredients like cumin, coriander, and garam masala gives Pakistani food its distinctive intensity, making it a unique culinary experience. Additionally, different fruits are grown in various regions, such as mangoes in Sindh and Punjab, and apples in Balochistan, enhancing the country&apos;s rich agricultural landscape. Whether enjoying local specialties or international favorites, the food scene in Pakistan offers something for everyone, appealing to both locals and tourists alike.",
        imageUrl:"/images/food.png"
       },
       {
        name:"Hotels",
        text:"Pakistan boasts a diverse range of hotels and restaurants that cater to both local and international tastes. The country&apos;s hospitality scene includes luxurious hotels like the 5-star Serena Hotel, known for its elegance and top-notch service, and the Pearl Continental (PC) Hotel chain, offering upscale accommodations across major cities. Other renowned establishments include the Avari Hotels, recognized for their hospitality and fine dining options, and Mövenpick Hotels, known for their international standards and scenic locations. Pakistan&apos;s urban centers also feature a variety of dining experiences, from traditional Pakistani cuisine at local eateries to global flavors served at upscale restaurants like Monal in Islamabad, celebrated for its panoramic views of the city and Margalla Hills. These establishments not only showcase Pakistan&apos;s hospitality but also provide a blend of comfort and gourmet delights, making them popular choices for travelers and locals alike.",
        imageUrl:"/images/hotels.png"
       },
       {
        name:"Health Care",
        text:"Healthcare in Pakistan is a diverse landscape marked by a mix of public and private institutions. The country hosts several renowned hospitals known for their quality healthcare services. Hospitals affiliated with the armed forces, such as the Armed Forces Institute of Cardiology (AFIC) in Rawalpindi and Combined Military Hospital (CMH) in Lahore, are esteemed for their advanced medical facilities and skilled personnel. In the private sector, Aga Khan University Hospital in Karachi and Shaukat Khanum Memorial Cancer Hospital & Research Centre in Lahore are leaders in healthcare, offering specialized treatments and compassionate care. While these institutions set benchmarks, the public healthcare system faces challenges, with hospitals often struggling with infrastructure and resource deficiencies. Other notable hospitals include Lahore&apos;s Jinnah Hospital, Karachi&apos;s Liaquat National Hospital, Islamabad&apos;s Pakistan Institute of Medical Sciences (PIMS), and Rawalpindi&apos;s Holy Family Hospital, each playing crucial roles in providing medical care across the country.",
        imageUrl:"/images/healthcare.png"
       },
       {
        name:"Languages",
        text:"Languages in Pakistan reflect its rich cultural diversity with numerous languages spoken across the country. Urdu, the national language and lingua franca, is widely understood and spoken, alongside regional languages like Punjabi, Sindhi, Pashto, and Balochi, which vary in prevalence depending on the region. English holds significant importance as an official language of Pakistan, recognized in the constitution, with approximately 58% of the population capable of speaking it fluently. Additionally, a substantial portion of the population understands English, contributing to its role in education, government, and business. Other prominent languages include Saraiki, Kashmiri, Brahui, and Hindko, each contributing to Pakistan&apos;s linguistic tapestry. This linguistic diversity not only enriches Pakistan&apos;s cultural fabric but also facilitates communication across its diverse communities, fostering national unity amidst regional variations.",
        imageUrl:"/images/languages.png"
       },
       {
        name:"Parks",
        text:"Parks in Pakistan are vibrant spaces that offer respite and recreation amidst bustling cities and serene landscapes. Islamabad&apos;s Margalla Hills National Park stands out for its scenic trails and diverse flora and fauna, attracting hikers and nature enthusiasts alike. Lahore&apos;s Shalimar Gardens, a UNESCO World Heritage Site, is renowned for its Mughal architecture and lush greenery, offering a glimpse into the region&apos;s historical legacy. Karachi&apos;s Bagh Ibn-e-Qasim Park, overlooking the Arabian Sea, is a popular destination for families, featuring playgrounds and serene waterfront views. Other notable parks include Peshawar&apos;s Bagh-e-Naran, Quetta&apos;s Ayub National Park, and Faisalabad&apos;s Jinnah Gardens, each providing recreational spaces amidst urban environments. Rawalpindi&apos;s Ayub Park and Multan&apos;s Shah Rukn-e-Alam Park also stand as prominent green oases, reflecting Pakistan&apos;s commitment to preserving natural beauty and promoting community gatherings. These parks not only serve as leisure spots but also celebrate Pakistan&apos;s cultural and environmental heritage, offering tranquility and a sense of belonging to visitors and locals alike.",
        imageUrl:"/images/parks.png"
       },
       {
        name:"Shopping Malls",
        text:"Shopping malls in Pakistan are vibrant hubs of commerce and leisure, offering a diverse array of retail experiences across major cities. Karachi&apos;s Dolmen Mall Clifton and LuckyOne Mall stand out as premier shopping destinations, featuring international brands, upscale boutiques, and entertainment options like cinemas and food courts. Lahore&apos;s Packages Mall and Emporium Mall are celebrated for their spacious layouts, luxury brands, and family-friendly amenities, making them popular choices for both shopping and entertainment. Islamabad&apos;s Centaurus Mall and Giga Mall provide a blend of retail therapy and leisure activities, with indoor attractions and dining options that cater to diverse tastes. Rawalpindi&apos;s Saddar Bazaar and Islamabad&apos;s F-10 Markaz offer bustling shopping districts with a mix of traditional markets and modern shopping complexes, showcasing Pakistan&apos;s retail diversity. Multan&apos;s Mall of Multan and Faisalaba&apos;s Sitara Mall also contribute to the country&apos;s growing mall culture, offering convenience and a range of shopping experiences that cater to local and international visitors alike.",
        imageUrl:"/images/shoppingMalls.png"
       }
]

const Life = () => {
    return (
        <main className='w-full mt-40'>
            <div className='p-4 md:p-8 flex flex-col gap-y-12 md:gap-y-8'>
                {/* Heading */}
                    <h1 className="text-green-900 font-extrabold text-5xl md:text-7xl text-center">
                        Life
                    </h1>
                    <p className="text-lg mt-12 text-green-950 break-words">Life in Pakistan is a vibrant tapestry of diverse cultures, rich traditions, and linguistic variety. The country is home to several languages, including Urdu, Punjabi, Sindhi, Pashto, and Balochi, with English widely spoken and understood, especially in urban areas. Pakistani cuisine is renowned for its flavorful dishes like biryani, kebabs, and nihari, reflecting the nation&apos;s culinary heritage. The healthcare system in Pakistan includes both public and private sectors; while the public system faces challenges in accessibility and quality, private hospitals and Armed Forces-affiliated hospitals offer quite good services. Pakistan boasts numerous luxurious hotels, such as the Marriott, Serena, Pearl Continental (PC), Avari, and Mövenpick hotels, along with beautiful parks like Shalimar Gardens, Margalla Hills National Park, Jinnah Park, Changa Manga Forest, and Bagh-e-Jinnah, offering residents and visitors a blend of comfort and natural beauty. The nation&apos;s hotels and parks are a testament to its hospitality and scenic charm, attracting tourists from around the world.</p>
                 {/* Mapping of lifeData Array*/}
                 <div className="mt-20">
        {
            lifeData.map((item,index)=> {
                return (
            <div key={index} className="mt-24 md:mt-40 gap-y-8 md:gap-y-12">
           <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 ">{item.name}</h2>
           <div className="flex flex-col-reverse gap-y-8 md:justify-between md:flex-row mt-8 md:mt-12">
            <p className="text-lg text-green-950 break-words w-[90%] p-2 md:p-8">{item.text}</p>
            <Image src={item.imageUrl} alt={item.name} width={500} height={400} className="mt-4 md:mt-0 object-fit rounded-md"/>
            </div></div>
                )
            })
        }
        
        </div>
                 </div></main>
    );
}

export default Life;
