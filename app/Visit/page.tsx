import Link from 'next/link';
import React from 'react';
import Image from 'next/image'




// VisitSitesInformation Array
const visitSitesInformation = [
    { imageUrl:"/images/ansoolake.png",
        text:"Ansoo Lake, nestled in Khyber Pakhtunkhwa&apos;s Mansehra District, Pakistan, is renowned for its tear-shaped silhouette set amidst the majestic Himalayan peaks. At an altitude of approximately 13,927 feet (4,245 meters), it offers a tranquil haven for trekkers and nature enthusiasts alike, its turquoise waters mirroring the snowy summits that surround it. Legends abound about Ansoo Lake, with one tale suggesting it formed from the tears of a celestial being mourning a lost love, imparting a poignant romanticism to its serene waters. Another myth speaks of a mythical creature whose sorrowful cries created the lake, its shape resembling a tear shed for eternity. These mythical narratives intertwine with the lake&apos;s natural beauty, adding layers of intrigue and allure to this remote and enchanting destination.",
        name:"Ansoo Lake"

      },
      { imageUrl:"/images/damanekoh.png",
          text:"Daman-e-Koh, nestled in the Margalla Hills overlooking Islamabad, Pakistan, is a renowned viewpoint celebrated for its breathtaking panoramic vistas. Perched at an altitude of around 2,500 feet (760 meters), it offers visitors sweeping views of Islamabad&apos;s skyline, juxtaposed against the verdant hillsides. This picturesque spot is a haven for nature lovers, photographers, and families alike, drawing them with its serene atmosphere and lush surroundings. Daman-e-Koh is not only a popular destination for picnics and leisurely walks but also serves as a perfect vantage point to witness stunning sunsets and city lights twinkling at night. Accessible via a scenic drive or hike, it stands as a symbol of Islamabad&apos;s natural beauty and tranquility, providing a memorable experience for all who visit.",
          name:"Daman-e-Koh"

        },
        { imageUrl:"/images/deosaiNationalPark.png",
          text:"Deosai National Park, located in Gilgit Baltistan&apos;s Skardu District, Pakistan, is a captivating sanctuary renowned for its vast plains and diverse wildlife against the stunning backdrop of the Himalayas. Spanning an average elevation of 13,500 feet (4,114 meters), it offers panoramic views of expansive meadows, crystal-clear lakes, and towering snow-capped peaks that beckon nature enthusiasts and adventurers alike. The park is notably dubbed the 'Land of Giants' due to its thriving population of Himalayan brown bears, thriving in their protected habitats amidst this pristine wilderness. Deosai National Park&apos;s high-altitude environment supports a remarkable variety of flora and fauna, contributing to its status as a biodiversity hotspot in the region, where visitors can encounter rare species of plants and animals in their natural habitats.",
          name:"Deosai National Park"

        },
        { imageUrl:"/images/Derawarfort.png",
          text:"Derawar Fort, located in Bahawalpur, Punjab, is a striking testament to the region&apos;s rich history and architectural grandeur. This impressive fortress stands tall amidst the Cholistan Desert, its massive walls rising dramatically against the barren landscape. Built in the 9th century by Rai Jajja Bhatti, the fort was later captured by Nawab Bahawal Khan in the 18th century, who renovated and expanded it. Derawar Fort is renowned for its imposing structure and intricate craftsmanship, with its 40 bastions and towering ramparts drawing visitors from around the world. The fort&apos;s strategic location once served as a key defense against invasions and is now a popular tourist attraction, offering panoramic views of the surrounding desert. Legends surrounding Derawar Fort speak of its haunted corridors and mysterious underground tunnels, adding an air of mystique to its historical significance.",
          name:"Derawar Fort"

        },
        { imageUrl:"/images/fairyMeadows.png",
          text:"Fairy Meadows, nestled in the Diamer District of Gilgit Baltistan, Pakistan, is celebrated for its breathtaking alpine meadows and unparalleled views of Nanga Parbat, the ninth-highest mountain in the world. Situated at an elevation of about 10,800 feet (3,300 meters), it serves as a base camp for trekkers and mountaineers exploring the majestic Himalayan range. The meadows, adorned with wildflowers during the summer months, offer a serene retreat amidst the rugged terrain. Fairy Meadows is renowned for its ethereal beauty and the sense of tranquility it evokes in visitors who come to witness its panoramic vistas. Its natural splendor and proximity to Nanga Parbat continue to draw adventurers and nature enthusiasts seeking a glimpse of Pakistan&apos;s pristine mountain landscapes.",
          name:"Fairy Meadows"

        },
        { imageUrl:"/images/fortMunro.png",
          text:"Fort Munro, situated in the Dera Ghazi Khan District of Punjab, Pakistan, is celebrated for its picturesque landscapes and temperate climate, making it a favored destination for both tourists and locals seeking refuge from the plains. Nestled at an elevation of around 6,470 feet (1,972 meters) above sea level, it provides breathtaking vistas of the surrounding hills and valleys, offering a serene escape amidst nature&apos;s beauty. Historically, Fort Munro served as a vital outpost during the British colonial era, reflecting its strategic significance in the region&apos;s past. Today, it remains a tranquil retreat known for its pleasant weather, especially appealing during the scorching summer months, attracting visitors eager to enjoy cooler temperatures and unwind in its peaceful ambiance.",
          name:"Fort Munro"

        },
        { imageUrl:"/images/hunzavalley.png",
          text:"Hunza Valley, nestled in the Hunza District of Gilgit Baltistan, Pakistan, is celebrated for its stunning landscapes and rich cultural heritage. Surrounded by towering peaks of the Karakoram Range, the valley is renowned for its terraced fields, fruit orchards, and the vibrant blue waters of the Hunza River flowing through it. This idyllic setting attracts tourists seeking tranquility amidst breathtaking scenery, with opportunities for trekking, mountaineering, and cultural exploration aplenty. Hunza Valley is also famous for its longevity myths, where local inhabitants are reputedly known for their exceptional health and long lifespans, often attributed to their diet rich in organic produce and unpolluted environment. These legends add an intriguing dimension to the valley&apos;s allure, blending natural beauty with tales of resilience and vitality.",
          name:"Hunza Valley"

        },
        { imageUrl:"/images/kalashValley.png",
          text:"Kalash Valley, located in the Chitral District of Khyber Pakhtunkhwa, Pakistan, is a cultural gem nestled amidst the stunning Hindu Kush mountains. Renowned for its unique Kalash people, who maintain their distinct traditions and lifestyle, the valley offers a glimpse into a vibrant ancient culture. The Kalash are known for their colorful festivals, intricate handicrafts, and traditional music and dances, which attract tourists seeking cultural immersion and authenticity. The valley&apos;s picturesque landscape, with terraced fields and lush greenery, further enhances its allure. Mythologically, the Kalash people are believed to be descendants of Alexander the Great&apos;s army, adding a layer of historical intrigue to their heritage. This rich blend of culture, history, and natural beauty makes Kalash Valley a captivating destination for travelers seeking to explore Pakistan&apos;s diverse cultural tapestry.",
          name:"Kalash Valley"

        },
        { imageUrl:"/images/kartarpur.png",
          text:"Kartarpur, situated in Narowal District, Punjab, is renowned as the sacred site of Gurdwara Darbar Sahib, one of the most revered pilgrimage destinations for Sikhs worldwide. This historic town holds immense significance as it was here that Guru Nanak Dev, the founder of Sikhism, spent the last years of his life, spreading his message of peace, harmony, and unity among all people. The Gurdwara, overlooking the tranquil waters of the Ravi River, stands as a testament to Guru Nanak&apos;s teachings and attracts devotees who seek spiritual solace and inspiration. Kartarpur&apos;s serene environment and historical importance foster a sense of reverence and reflection among visitors, offering a place for deep connection with Sikh heritage and values. Its peaceful ambiance and scenic beauty make it not just a religious site but also a cultural and historical landmark cherished by Sikhs and admired by visitors of diverse backgrounds.",
          name:"Kartarpur "

        },
        { imageUrl:"/images/katasRajTemple.png",
          text:"Katas Raj Temple, located near Chakwal in Punjab, Pakistan, is a revered Hindu pilgrimage site renowned for its historical and cultural significance. Dating back over a millennium, this complex of ancient temples is dedicated to Lord Shiva and holds deep spiritual importance for Hindu devotees. The main temple, surrounded by a pool known as Shiva&apos;s tears, is believed to have been created from the teardrops shed by Lord Shiva upon the death of his wife, Sati. This mythical origin lends a mystical aura to Katas Raj, drawing pilgrims and tourists alike to witness its sacred architecture and serene surroundings. The temple complex also features intricate carvings, sacred shrines, and a tranquil atmosphere that invites reflection and reverence, making it a cherished symbol of religious harmony and cultural heritage in Pakistan.",
          name:"Katas Raj Temple"

        },
        { imageUrl:"/images/khanpurdam.png",
          text:"Khanpur Dam, nestled in Khanpur, Khyber Pakhtunkhwa, is renowned for its scenic beauty and diverse recreational activities. Boating enthusiasts can choose between paddleboats and motorboats, cruising along the reservoir to soak in panoramic views of surrounding hills and wildlife. Fishing is popular here, with anglers enjoying the challenge of catching various freshwater fish species. Families and groups frequent the dam&apos;s well-maintained picnic spots, offering ideal settings for leisurely meals amidst nature. For thrill-seekers, Khanpur Dam offers cliff diving opportunities from designated points along the rocky cliffs, providing an adrenaline rush and stunning views from mid-air. Water sports enthusiasts can engage in activities like jet skiing and kayaking, exploring the reservoir&apos;s expansive waters in an adventurous manner. Moreover, certified divers can delve into the dam&apos;s depths through underwater diving and snorkeling, discovering submerged landscapes and freshwater aquatic life, making Khanpur Dam a versatile destination for both relaxation and adventure seekers alike.",
          name:"Khanpur Dam"

        },
        { imageUrl:"/images/kundmalirbeach.png",
          text:"Kund Malir Beach, nestled within the expansive Hingol National Park in Balochistan, Pakistan, is renowned for its pristine golden sands and azure waters, set against the rugged Makran Coastal Range. This secluded paradise offers a serene escape amidst breathtaking coastal scenery, attracting visitors seeking solitude and natural beauty. The beach&apos;s remote location and untouched environment make it a heaven for wildlife enthusiasts and photographers alike, with opportunities to spot diverse marine and bird species. Its untouched charm and dramatic landscapes continue to captivate adventurers and travelers exploring Pakistan&apos;s lesser-known coastal treasures.",
          name:"Kund Malir Beach"

        },
        { imageUrl:"/images/lahorefort.png",
          text:"Lahore Fort, located in Lahore, Punjab, stands as a majestic testament to Pakistan&apos;s rich cultural heritage and historical significance. This UNESCO World Heritage site dates back centuries, its origins tracing to the Mughal era under Emperor Akbar in the 16th century. Renowned for its impressive architecture, the fort encompasses stunning palaces, intricate marble motifs, and expansive gardens, such as the iconic Shalimar Gardens nearby. Serving as a center of Mughal power and administration, Lahore Fort played a pivotal role in shaping the region&apos;s history. Its enduring allure lies in its architectural grandeur and historical legacy, attracting visitors from around the world to marvel at its intricate design and glimpse into Pakistan&apos;s storied past.",
          name:"Lahore Fort"

        },
        { imageUrl:"/images/maklithatta.png",
          text:"Makli Necropolis, located in Thatta District, Sindh, Pakistan, is a UNESCO World Heritage Site renowned for its vast and intricate funerary monuments. Dating back to the 14th century, Makli is one of the largest necropolises in the world, spanning over 10 square kilometers and containing hundreds of thousands of tombs. These tombs showcase a blend of architectural styles, reflecting the cultural and artistic heritage of the region. Makli is famous for its historical significance, serving as the final resting place for kings, queens, saints, and scholars from various dynasties that ruled the area. The necropolis is believed to hold spiritual significance, with many visitors considering it a sacred place of pilgrimage. Legends surrounding Makli Necropolis speak of supernatural occurrences and spiritual energies, but concrete myths specific to the site are scarce in available literature.",
          name:"Makli Necropolis"

        },
        { imageUrl:"/images/mazarequaid.png",
          text:"Mazar-e-Quaid, located in Karachi, Sindh, is a revered mausoleum that serves as the final resting place of Muhammad Ali Jinnah, the founder of Pakistan. This monumental structure, built in striking white marble, stands as a symbol of national pride and unity. Surrounded by a sprawling park, it offers visitors a serene place for reflection and remembrance amidst the bustling cityscape of Karachi. Mazar-e-Quaid is not only a place of historical significance but also a cultural landmark where ceremonies and tributes are regularly held to honor Jinnah&apos;s legacy and vision for Pakistan. While there are no widespread myths associated with Mazar-e-Quaid, its solemnity and grandeur continue to inspire reverence and admiration among all who visit, making it a poignant symbol of Pakistan&apos;s identity and history.",
          name:"Mazar-e-Quaid"

        },
        { imageUrl:"/images/mohenjodaro.png",
          text:"Mohenjo-daro, located in the Larkana District of Sindh, Pakistan, stands as an ancient testament to the Indus Valley Civilization&apos;s advanced urban planning and culture. This UNESCO World Heritage site flourished around 2500 BCE, showcasing sophisticated city planning with its well-organized streets, advanced drainage system, and impressive structures like the Great Bath and the Granary. Mohenjo-daro&apos;s archaeological remains provide invaluable insights into early urban life, trade networks, and social structures of ancient times. As one of the world&apos;s earliest urban centers, it continues to fascinate historians and archaeologists alike, shedding light on the roots of human civilization in the Indian subcontinent.",
          name:"Mohenjo-daro"

        },
        { imageUrl:"/images/monument.png",
          text:"The Pakistan Monument in Islamabad stands as an iconic symbol of national unity and pride, commemorating the country&apos;s rich history and cultural heritage. Designed to resemble a blooming flower or a star-like structure, this impressive monument consists of four towering petals representing the provinces of Pakistan, converging at a central platform symbolizing the nation&apos;s unity. Surrounded by lush gardens and reflecting pools, it offers visitors a serene retreat and panoramic views of the cityscape. The Monument&apos;s Museum showcases Pakistan&apos;s journey to independence, making it a significant educational landmark as well.",
          name:"Pakistan Monument"

        },
        { imageUrl:"/images/naltharValley.png",
          text:"Naltar Valley, located near Gilgit City in Gilgit Baltistan, Pakistan, is celebrated for its stunning natural beauty and serene landscapes. Surrounded by towering mountains, including the rugged peaks of the Karakoram Range, the valley is renowned for its vibrant hues, especially during spring when wildflowers carpet the meadows in vivid colors. Naltar Valley is a haven for adventure enthusiasts, offering opportunities for hiking, skiing, and exploring its pristine lakes. The valley is also famous for its emerald green Naltar Lake, a serene reflection of the surrounding peaks. While the valley&apos;s beauty is well-documented, there are no widely known myths or legends associated with Naltar Valley. Its allure lies in its untouched wilderness and breathtaking scenery, making it a favored destination for nature lovers seeking tranquility amidst Pakistan&apos;s northern splendor.",
          name:"Nalthar Valley"

        },
        { imageUrl:"/images/naranKhagan.png",
          text:"Naran Kaghan, located in the Manshera District of Khyber Pakhtunkhwa, Pakistan, is celebrated for its stunning natural beauty nestled amidst the Himalayan foothills. Situated at an elevation of about 8,202 feet (2,500 meters), this scenic valley is a haven for tourists seeking respite in its lush greenery, pristine lakes, and cascading waterfalls. Naran Kaghan is famous for its accessibility to breathtaking spots like Saiful Muluk Lake, where crystal-clear waters reflect the surrounding snow-capped peaks, and Lalazar Plateau, offering panoramic views of the valley below. The region&apos;s allure lies in its natural splendor and cultural richness, with friendly locals and traditional hospitality enhancing the visitor experience.",
          name:"Naran Khagan"

        },
        { imageUrl:"/images/neelam.png",
          text:"Neelum District, located in Azad Kashmir, Pakistan, is renowned for its stunning natural beauty and picturesque landscapes. Nestled along the Neelum River, this district is adorned with lush green valleys, cascading waterfalls, and snow-capped peaks that attract tourists seeking tranquility and adventure alike. Famous for its vibrant culture and hospitality, Neelum District offers visitors a glimpse into the rich heritage of the Kashmiri people, with traditional handicrafts and warm local cuisine adding to its charm. The allure of Neelum District lies in its pristine beauty and the serenity of its natural surroundings, making it a beloved destination for travelers exploring the northern regions of Pakistan.",
          name:"Neelum District"

        },
        { imageUrl:"/images/Rakaposhi.png",
          text:"Rakaposhi, towering near Gilgit City in Gilgit Baltistan, Pakistan, is celebrated for its majestic presence among mountaineers. As one of the highest peaks in the Karakoram Range, reaching an impressive height of 7,788 meters (25,551 feet), Rakaposhi commands attention with its snow-capped summit that seems to pierce the heavens. Its striking beauty and challenging ascent make it a coveted destination for climbers and adventurers seeking to conquer its formidable slopes. Rakaposhi is renowned for its physical grandeur and the technical prowess required to summit it. Its allure lies primarily in experiencing its breathtaking vistas amidst the rugged landscape of Gilgit Baltistan.",
          name:"Rakaposhi"

        },
        { imageUrl:"/images/rawalakot.png",
          text:"Rawalakot, located in Poonch District, Azad Kashmir, is celebrated for its stunning natural beauty and picturesque landscapes. Nestled amidst lush green hills and valleys, this serene town offers visitors a peaceful retreat away from bustling city life. Known for its pleasant climate and scenic views, Rawalakot attracts tourists seeking relaxation and outdoor adventures such as hiking and nature walks. The town&apos;s vibrant bazaars and local cuisine also add to its charm, providing a glimpse into the rich culture of the region. Its reputation as a haven of tranquility and natural splendor continues to draw travelers eager to explore its hidden treasures and unwind amidst its idyllic surroundings.",
          name:"Rawalakot"

        },
        { imageUrl:"/images/thardesert.png",
          text:"The Thar Desert, straddling the border of Punjab and Sindh in Pakistan, is famed for its expansive dunes and arid landscape that stretches across thousands of square kilometers. Known locally as the 'Great Indian Desert,' it holds a unique allure for travelers drawn to its stark beauty and cultural richness. The desert is home to a resilient community of people who have adapted to its harsh conditions, preserving centuries-old traditions and crafts. Thar Desert is renowned for its vibrant festivals, showcasing colorful attire, music, and dance that celebrate the desert&apos;s spirit and heritage. Its sweeping vistas and cultural vitality continue to captivate visitors seeking a glimpse into the soul of this ancient and enduring landscape.",
          name:"Thar Desert"

        },
        { imageUrl:"/images/UshoForest.png",
          text:"Usho Forest, nestled in the scenic Usho Valley of Khyber Pakhtunkhwa, Pakistan, is celebrated for its lush greenery and serene atmosphere. Situated amidst the towering peaks of the Hindu Kush range, this forest is a haven for biodiversity, offering refuge to a variety of flora and fauna. Its tranquil trails and clear streams attract nature enthusiasts and trekkers seeking solitude amidst nature&apos;s bounty. Usho Forest is also famous for its cultural significance, as it is believed to be a historic site where ancient civilizations once thrived, leaving behind remnants that intrigue archaeologists and historians alike.",
          name:"Usho Forest"

        }
]


const Visit = () => {
    return (
        <section className=' w-full pt-16'>
            <div className='p-4 md:p-8 gap-y-12 md:gap-y-8'>
                {/* Heading */}
        <h1 className="text-green-900 font-extrabold text-4xl md:text-7xl text-center">
     Places To Visit In Pakistan
        </h1>
        <p className="text-lg mt-12 text-green-950 break-words">
        Pakistan, renowned for its breathtaking natural beauty, attracts millions of tourists annually. From the majestic peaks of the Karakoram Range to the serene valleys of Swat and Hunza, Pakistan offers a diverse tapestry of landscapes. Each year, approximately 1.75 million tourists visit Pakistan to explore its rich cultural heritage, ancient archaeological sites like Mohenjo-daro and Taxila, and vibrant cities such as Lahore and Karachi. With hospitality as warm as its weather, Pakistanis welcome travelers seeking adventure, history, and unparalleled scenic vistas year-round.</p>
        
        {/* Mapping of visitSitesInformation Array*/}
        <div className="mt-20">
        {
            visitSitesInformation.map((item,index)=> {
                return (
            <div key={index} className="pt-24 md:pt-40 gap-y-8 md:gap-y-12">
           <h2 className="text-4xl md:text-5xl font-extrabold text-center text-green-900 ">{item.name}</h2>
           <div className="flex flex-col-reverse gap-y-8 md:justify-between md:flex-row mt-8 md:mt-12">
            <p className="text-lg text-green-950 break-words w-[90%] p-2 md:p-8">{item.text}</p>
            <Image src={item.imageUrl} alt={item.name} width={500} height={400} className="mt-4 md:mt-0 object-fit rounded-md"/>
            </div></div>
                )
            })
        }
        
        </div></div></section>
    );
}

export default Visit;
