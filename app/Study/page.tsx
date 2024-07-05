import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const universitiesData = [
   
    {
        name:"1. QAU",
        href:"https://qau.edu.pk/",
        text:"Quaid-e-Azam University (QAU), situated in Islamabad, Pakistan, stands as a premier institution renowned for its academic prowess and research excellence since its establishment in 1967. The university consistently ranks among Pakistan&apos;s top educational institutions and enjoys international recognition, particularly for its strong programs in natural sciences such as physics, chemistry, and biology. QAUs faculty comprises esteemed scholars and researchers who actively contribute to advancements in their respective fields. While QAU&apos;s main campus is located in Islamabad, it does not have branches in other cities, yet it draws students nationwide due to its academic reputation and vibrant campus life. Nestled against the picturesque backdrop of the Margalla Hills, QAU provides a stimulating environment conducive to learning and research. The university&apos;s commitment to innovation and intellectual growth makes it a pivotal center for higher education and scientific inquiry in Pakistan.",
        imageUrl:"/images/quaideAzamUniversity.png"
    },
    {
        name:"2. NUST",
        href:"https://nust.edu.pk/",
        text:"National University of Sciences and Technology (NUST) Pakistan stands as a beacon of academic excellence, known globally for its cutting-edge research and rigorous education programs. Renowned for its engineering and technology fields, NUST consistently ranks among the top universities worldwide. Its campuses are located in key cities across Pakistan, including Islamabad, Rawalpindi, Risalpur, and Quetta, each contributing uniquely to its multidisciplinary approach to learning. NUST&apos;s commitment to innovation and leadership in science extends across diverse disciplines, fostering a vibrant environment for students and researchers alike. With state-of-the-art facilities and a strong emphasis on practical applications, NUST prepares graduates to tackle complex challenges in today&apos;s interconnected world, making significant contributions to both local and global communities.",
        imageUrl:"/images/nust.png"
    },
    
    {
        name:"3. CUI",
        href:"https://www.comsats.edu.pk/",
        text:"COMSATS University (CUI) Pakistan, established in 1998, has gained acclaim for its exceptional focus on science and technology education nationwide. It ranks prominently among Pakistani universities, particularly excelling in fields such as computer science, engineering, and bioinformatics. Internationally, CUI is recognized for its contributions to sustainable development and scientific research, bolstering its reputation in global rankings. The university operates campuses in key cities across Pakistan, including Islamabad, Lahore, Abbottabad, Wah, Attock, Sahiwal, and Vehari. Each campus fosters a dynamic academic environment equipped with modern facilities and supports a diverse student body. CUI&apos;s strategic presence in these locations not only promotes educational accessibility but also drives regional development through knowledge dissemination and community engagement initiatives.",
        imageUrl:"/images/comsats.png"
    },
    {
        name:"4. LUMS",
        href:"https://www.lums.edu.pk/",
        text:"Lahore University of Management Sciences (LUMS), located in Lahore, Pakistan, is one of the country&apos;s premier higher education institutions. It also has a branch in Karachi, expanding its educational footprint. LUMS is renowned globally, often ranking among the top universities in Asia. It is particularly famous for its rigorous programs in business management and computer science. The institution is well-regarded for producing highly skilled graduates who excel in their respective fields. The curriculum at LUMS is primarily in English, aligning with international standards and enabling students to compete globally. Its strong emphasis on research, innovation, and practical application makes it a sought-after university for aspiring professionals.",
        imageUrl:"/images/lumsUniversity.png"
    },
    {
        name:"5. PU",
        href:"https://www.pu.edu.pk/",
        text:"The University of the Punjab (PU), located in Lahore, Pakistan, is renowned globally for its academic excellence and rich history dating back to 1882. It consistently ranks among the top universities in Pakistan and holds a prominent position in South Asia. PU is particularly esteemed for its programs in social sciences, humanities, and natural sciences, attracting students from across the country and beyond. As one of the oldest and largest universities in Pakistan, PU has expanded its influence with campuses in several cities, including Gujranwala, Jhelum, and Khanspur. Its commitment to research, education, and community development continues to uphold its stature as a leading educational institution in the region, offering a diverse array of disciplines and fostering a vibrant academic environment.",
        imageUrl:"/images/punjabUniversity.png"
    },
    {
        name:"6. UAF",
        href:"https://web.uaf.edu.pk/",
        text:"The University of Agriculture, Faisalabad (UAF) in Pakistan is renowned globally for its excellence in agricultural sciences and research. Established in 1906 as the first major institution dedicated to agricultural education in the region, UAF has consistently upheld its reputation as a leading center for agricultural studies. It ranks among the top universities worldwide for its agricultural programs, offering cutting-edge research opportunities and innovative practices in crop sciences, livestock management, and agricultural economics. UAF&apos;s main campus is located in Faisalabad, Punjab, while it also has branches in several key cities across Pakistan, including Toba Tek Singh, Burewala, and Dera Ghazi Khan. This extensive network allows UAF to cater to diverse agricultural landscapes and contribute significantly to the agricultural sector&apos;s development and sustainability initiatives in Pakistan and beyond.",
        imageUrl:"/images/agricultureUniversity.png"
    },
    {
        name:"7. UET",
        href:"https://www.uet.edu.pk/home/",
        text:"The University of Engineering and Technology (UET) Pakistan is renowned globally for its excellence in engineering education and research. It consistently ranks among the top universities in Pakistan and is highly regarded for its engineering programs, particularly in fields such as electrical engineering, mechanical engineering, and civil engineering. UET has campuses in several major cities across Pakistan, including Lahore, where the main campus is located, as well as in Taxila, Faisalabad, and Multan. Its commitment to producing skilled engineers equipped with cutting-edge knowledge and practical experience has established UET as a cornerstone institution in Pakistan&apos;s higher education landscape. The university&apos;s focus on innovation, research, and industry collaboration continues to shape the future of engineering education in the region, contributing significantly to technological advancements and national development initiatives.",
        imageUrl:"/images/uet.png"
    },
    {
        name:"8. AKU ",
        href:"https://www.aku.edu/Pages/home.aspx",
        text:"Aga Khan University (AKU) in Pakistan is a prominent institution with branches in Karachi and Hyderabad. Known for its excellence in healthcare education, AKU consistently ranks among the top universities globally, particularly in the field of medicine. According to recent rankings, it is placed within the top 500 universities worldwide. AKU is famous for its state-of-the-art facilities, distinguished faculty, and rigorous academic standards. The university is renowned for its medical and nursing programs, which attract students worldwide. The curriculum at AKU is primarily in English, ensuring a broad international reach and facilitating global collaboration. With a strong emphasis on research and community service, AKU continues to make substantial impacts in public health and medical sciences.",
        imageUrl:"/images/aghaKhanUniversity.png"
    },
    {
        name:"9. PIEAS",
        href:"https://www.pieas.edu.pk/",
        text:"Pakistan Institute of Engineering and Applied Sciences (PIEAS) is renowned globally for its excellence in nuclear engineering and sciences. It consistently ranks among the top educational institutions in Pakistan and is highly regarded internationally, particularly in the field of nuclear technology. PIEAS&apos;s commitment to cutting-edge research and academic rigor has earned it recognition as a leading institution in South Asia. Founded in Islamabad, the capital city of Pakistan, PIEAS has expanded its influence with branches in various cities, including Lahore and Karachi. The institute&apos;s multidisciplinary approach, focusing on engineering, applied sciences, and nuclear technology, continues to attract students and researchers from around the world, contributing significantly to advancements in science and technology.",
        imageUrl:"/images/pieas.png"
    },
    {
        name:"10. IST",
        href:"https://www.ist.edu.pk/",
        text:"The Institute of Space Technology (IST) in Pakistan is renowned globally for its expertise in aerospace engineering and satellite technology. It consistently ranks among the top universities worldwide in these fields, boasting a strong emphasis on research and innovation. Established in Islamabad, the capital city of Pakistan, IST has expanded its influence with campuses in other major cities like Karachi and Lahore. IST&apos;s commitment to cutting-edge research and development has earned it recognition as a leader in space sciences and engineering education, contributing significantly to Pakistan&apos;s advancements in satellite technology and space exploration.",
        imageUrl:"/images/spaceUniversity.png"
    },
    {
        name:"11. UoK",
        href:"https://uok.edu.pk/",
        text:"The University of Karachi (UoK), located in Karachi, Pakistan, is renowned globally for its excellence in the field of research and education. It consistently ranks among the top universities in Pakistan and is highly regarded for its programs in social sciences, natural sciences, and business studies. UoK&apos;s commitment to academic rigor and innovation has earned it recognition in international rankings, particularly in the domains of environmental sciences and microbiology. Established in 1951, UoK has expanded its influence beyond Karachi, with campuses and affiliated institutions in major cities across Pakistan, including Lahore, Islamabad, and Hyderabad. The university&apos;s diverse student body and faculty contribute to its vibrant academic community, fostering intellectual growth and interdisciplinary collaboration. UoK continues to uphold its reputation as a leading institution dedicated to advancing knowledge and preparing future leaders in various fields of study.",
        imageUrl:"/images/karachiUniversity.png"
    },
    {
        name:"12. UoL",
        href:"https://uol.edu.pk/",
        text:"The University of Lahore (UoL), located in Pakistan, is renowned globally for its excellence in fields such as medicine, engineering, and business studies. It consistently ranks among the top universities in Pakistan and has made significant strides in international rankings, particularly in fields like medicine where its research and academic programs are highly regarded. With its main campus situated in Lahore, the university has expanded its presence to several key cities across Pakistan, including Islamabad, Sargodha, and Gujrat, offering a diverse range of undergraduate and postgraduate programs. UoL&apos;s commitment to academic innovation, research, and community engagement continues to solidify its reputation as a leading institution in the region.",
        imageUrl:"/images/lahoreUniversity.png"
    },
    {
        name:"13. BZU",
        href:"https://bzu.edu.pk/",
        text:"Bahauddin Zakariya University (BZU), located in Multan, Pakistan, is renowned for its academic excellence and contributions to various fields. The university consistently ranks among the top institutions in Pakistan, known particularly for its strong programs in agriculture, engineering, and social sciences. BZU&apos;s commitment to research and education has earned it recognition globally, reflecting in its rankings that highlight its impact on these disciplines. Apart from its main campus in Multan, BZU has branches in several cities across Punjab province, including Lahore, Sahiwal, Layyah, and Vehari, extending its educational reach and influence throughout the region.",
        imageUrl:"/images/bzu.png"
    },
    {
        name:"14. IIUI",
        href:"https://www.iiu.edu.pk/",
        text:"International Islamic University Islamabad (IIUI) in Pakistan is renowned for its strong emphasis on Islamic studies and modern education. Established in 1980, IIUI has carved a niche in producing scholars proficient in both traditional Islamic sciences and contemporary disciplines. It ranks prominently in the field of Islamic studies globally, attracting students from diverse backgrounds seeking a comprehensive understanding of Islam. IIUI operates campuses not only in Islamabad, its main campus, but also in several other cities across Pakistan, including Lahore, Karachi, Peshawar, and Quetta. With a commitment to academic excellence rooted in Islamic principles, IIUI continues to uphold its reputation as a center of learning that bridges the gap between classical teachings and contemporary knowledge.",
        imageUrl:"/images/iiu.png"
    },
    {
        name:"15. GCU",
        href:"https://www.gcu.edu.pk/",
        text:"Government College University (GCU) Pakistan, renowned for its rich academic heritage dating back to 1864, stands as a beacon of educational excellence in the nation. Internationally recognized for its strong emphasis on humanities and social sciences, GCU consistently ranks among the top institutions in Pakistan and South Asia. Its academic prowess extends across various disciplines, with particular acclaim in fields such as literature, philosophy, and political science. Located primarily in Lahore, the university has expanded its influence with branches in major cities like Faisalabad and Sahiwal, fostering academic growth and cultural enrichment across the region. GCU&apos;s commitment to fostering critical thinking and academic innovation continues to shape future generations of leaders and scholars in Pakistan and beyond.",
        imageUrl:"/images/gcu.png"
    },
    {
        name:"16. KMU ",
        href:"https://kmu.edu.pk/",
        text:"Khyber Medical University (KMU) in Pakistan is renowned for its excellence in medical education and research. Established in Peshawar, it has expanded its influence across several cities including Islamabad and Abbottabad, offering high-quality medical programs. KMU is highly esteemed globally for its medical sciences, consistently producing skilled healthcare professionals who contribute significantly to the field of medicine. Its commitment to research and innovation has bolstered its reputation, reflected in its notable rankings in medical education across Asia. KMU&apos;s campuses are hubs of academic excellence, fostering a culture of learning and discovery that prepares students for impactful careers in healthcare and medical research worldwide.",
        imageUrl:"/images/kmu.png"
    },
    {
        name:"17. LUMHS",
        href:"https://www.lumhs.edu.pk/home/",
        text:"Liaquat University of Medical and Health Sciences (LUMHS), located in Jamshoro, Sindh, Pakistan, is renowned globally for its excellence in medical education and research. The university consistently ranks among the top institutions in Pakistan for medical and health sciences. LUMHS is particularly acclaimed for its programs in medicine, dentistry, pharmacy, nursing, and biomedical sciences. Founded in 1951, LUMHS has expanded its influence with additional campuses in Hyderabad and other parts of Sindh, catering to a wide range of healthcare disciplines. Its commitment to producing skilled healthcare professionals and advancing medical knowledge positions LUMHS as a pivotal institution in the region, contributing significantly to healthcare education and practice across Pakistan.",
        imageUrl:"/images/liaquatUniversity.png"
    },
    {
        name:"18. UOS",
        href:"https://su.edu.pk/",
        text:"The University of Sargodha (UOS), located in Sargodha, Pakistan, is renowned for its academic excellence and diverse range of disciplines. It has established itself as a prominent institution both nationally and internationally, reflected in its world rankings particularly in fields such as agriculture, business administration, and social sciences. UOS is celebrated for its research contributions in agriculture, addressing critical agricultural challenges through innovative practices and research initiatives. With campuses in several cities including Bhakkar, Mianwali, and Lahore, the university extends its educational reach across Punjab, offering students access to quality higher education in various disciplines. Through its commitment to academic rigor and community engagement, UOS continues to shape the future of education and research in Pakistan.",
        imageUrl:"/images/sargodhaUniversity.png"
    },
    {
        name:"19. MUET ",
        href:"https://www.muet.edu.pk/",
        text:"Mehran University of Engineering and Technology (MUET), located in Jamshoro, Pakistan, is renowned globally for its excellence in engineering and technology education. It consistently ranks among the top universities in Pakistan and is particularly acclaimed for its programs in civil engineering, electrical engineering, and mechanical engineering. MUET&apos;s commitment to academic rigor and innovation has secured its place as a leader in engineering education in the region. Apart from its main campus in Jamshoro, MUET has branches in several key cities across Pakistan, contributing significantly to the country&apos;s development through its graduates who are well-equipped to tackle real-world challenges in engineering and technology.",
        imageUrl:"/images/meut.png"
    }, {
        name:"20. UoP",
        href:"http://www.uop.edu.pk/",
        text:"Mehran University of Engineering and Technology (MUET), located in Jamshoro, Pakistan, is renowned globally for its excellence in engineering and technology education. Established in 1963, MUET has consistently ranked among the top engineering universities in Pakistan and South Asia. Its commitment to innovation and research has propelled it to prominence in fields such as civil engineering, electrical engineering, and mechanical engineering. MUET&apos;s main campus in Jamshoro serves as the hub for academic and research activities, while the university also operates campuses in Karachi and Shaheed Benazirabad, expanding its reach and impact across different regions of Sindh province. With a strong emphasis on practical learning and industry collaboration, MUET continues to produce skilled professionals who contribute significantly to Pakistan&apos;s development in engineering and technology sectors.",
        imageUrl:"/images/peshawarUniversity.png"
    },
    {
        name:"21. UHS",
        href:"https://www.uhs.edu.pk/",
        text:"The University of Health Sciences (UHS) Pakistan is renowned globally for its excellence in medical education and research. It consistently ranks among the top institutions in the world for its medical programs, particularly in fields such as medicine, dentistry, pharmacy, and nursing. UHS is notably recognized for its rigorous academic standards and state-of-the-art facilities, attracting students and researchers from across the globe. Located primarily in Lahore, the cultural capital of Pakistan, UHS also extends its influence through affiliated campuses and branches in major cities nationwide, including Islamabad, Karachi, and Peshawar. These campuses ensure that UHS remains accessible and influential throughout Pakistan&apos;s healthcare education landscape, contributing significantly to the advancement of medical sciences and healthcare practices regionally and internationally.",
        imageUrl:"/images/uhs.png"
    },
    {
        name:"22. DUHS",
        href:"https://www.duhs.edu.pk/",
        text:"Dow University of Health Sciences (DUHS), located in Karachi, Pakistan, is renowned globally for its excellence in medical education and research. It consistently ranks among the top institutions in Pakistan and is recognized internationally for its contributions to healthcare. DUHS is particularly esteemed for its medical and allied health sciences programs, offering comprehensive training and cutting-edge research opportunities in fields such as medicine, dentistry, pharmacy, and biomedical sciences. With its main campus in Karachi, DUHS also extends its academic footprint across multiple cities in Pakistan, including Hyderabad and Ojha, providing students nationwide access to world-class healthcare education. As a leader in the health sciences domain, DUHS continues to uphold its reputation for producing skilled healthcare professionals who contribute significantly to improving healthcare outcomes both locally and globally.",
        imageUrl:"/images/dowUniversity.png"
    },
    {
        name:"23. NEDUET",
        href:"https://www.neduet.edu.pk/",
        text:"NED University of Engineering and Technology (NEDUET), located in Karachi, Pakistan, is renowned globally for its excellence in engineering and technology education. It consistently ranks among the top institutions in Pakistan and is highly regarded for its programs in civil engineering, mechanical engineering, and electrical engineering. The university&apos;s commitment to research and innovation has contributed significantly to its reputation. Founded in 1922, NED University has established itself as a premier institution in the region, offering a range of undergraduate, graduate, and doctoral programs. With its main campus in Karachi, NED University also operates branches in other cities, providing accessible education and fostering technological advancement across Pakistan.",
        imageUrl:"/images/ned.png"
    },
    {
        name:"24. UVAS",
        href:"https://uvas.edu.pk/",
        text:"The University of Veterinary and Animal Sciences (UVAS) in Pakistan holds a prominent position globally, particularly renowned for its excellence in veterinary medicine and animal sciences. UVAS consistently ranks high in global rankings for its contributions to veterinary research and education. Established in Lahore, UVAS has expanded its influence with campuses in various cities including Jhang and Pattoki, each contributing uniquely to the field through advanced research facilities and academic programs. The university&apos;s commitment to innovative practices and its extensive network of collaborations both locally and internationally further enhance its reputation as a leader in veterinary education and research.",
        imageUrl:"/images/uvas.png"
    },
    {
        name:"25. FJWU",
        href:"https://www.fjwu.edu.pk/",
        text:"Fatima Jinnah Women University (FJWU), located in Rawalpindi, Pakistan, is renowned for its excellence in women&apos;s education and empowerment. Established in 1998, it has grown to become a prominent institution offering programs in diverse fields such as humanities, social sciences, natural sciences, and management sciences. FJWU is highly regarded for its commitment to promoting gender equality and providing quality education tailored to the needs of women. While specific world rankings can vary annually, FJWU is recognized nationally for its contributions to women&apos;s higher education in Pakistan. The university&apos;s main campus in Rawalpindi serves as the hub of academic and extracurricular activities, aimed at fostering leadership and academic excellence among its students.",
        imageUrl:"/images/fjuw.png"
    },
    {
        name:"26. SZABIST",
        href:"https://szabist-isb.edu.pk/",
        text:"Shaheed Zulfiqar Ali Bhutto Institute of Science and Technology (SZABIST) in Pakistan is renowned for its excellence in business administration and computer science fields. It has made significant strides in academic achievements, although specific world rankings may vary year to year. SZABIST has branches in multiple cities across Pakistan, including Karachi, Islamabad, Hyderabad, Larkana, and Dubai. The university is recognized for its robust curriculum, dedicated faculty, and emphasis on practical skills development, making it a preferred choice for students seeking quality education in these disciplines.",
        imageUrl:"/images/szabist.png"
    },
    {
        name:"27. GU",
        href:"http://gu.edu.pk/",
        text:"Gomal University (GU), located in Dera Ismail Khan, Pakistan, holds a prominent position in the educational landscape of the region. Known for its robust academic programs and research initiatives, Gomal University has garnered recognition in fields such as agriculture, veterinary sciences, and humanities. The university consistently strives for excellence, reflected in its national and international rankings. Branches of Gomal University are spread across several cities in Pakistan, including Islamabad and Tank, catering to a diverse student population and contributing significantly to the educational development of the country.",
        imageUrl:"/images/gu.png"
    },
    {
        name:"28. IUB",
        href:"https://www.iub.edu.p",
        text:"Islamia University of Bahawalpur (IUB), located in Bahawalpur, Pakistan, holds a notable position in the educational landscape of the country. Established in 1975, IUB has grown to prominence with its diverse academic offerings and research initiatives. It is recognized for its strong emphasis on humanities, social sciences, natural sciences, and engineering disciplines. The university is highly regarded nationally and regionally, contributing significantly to Pakistan&apos;s higher education sector. In terms of world rankings, IUB continues to enhance its standing, particularly in fields such as agriculture, business administration, and computer science. With its main campus in Bahawalpur, the university extends its educational reach through various branches across different cities, catering to a wide spectrum of students seeking quality education in Pakistan.",
        imageUrl:"/images/iub.png"
    },
    {
        name:"29. UoG",
        href:"https://uog.edu.pk/main.php",
        text:"The University of Gujrat (UoG) in Pakistan has established itself as a prominent institution renowned for its academic excellence and diverse range of disciplines. While specific world rankings may vary, UoG is highly regarded in fields such as business administration, computer sciences, and humanities. Its main campus is located in Gujrat, a city known for its cultural heritage and industrial significance. Additionally, UoG has expanded its presence with campuses in Lahore and Sialkot, further enhancing its accessibility and outreach across the region. The university continues to uphold a commitment to quality education, research innovation, and community engagement, making it a pivotal hub for higher learning in Pakistan.",
        imageUrl:"/images/uog.png"
    },
    {
        name:"30. SU",
        href:"https://www.usindh.edu.pk/",
        text:"The University of Sindh (SU) in Pakistan holds a significant position nationally, known for its contributions to higher education and research. While its specific world ranking may vary, SU is esteemed for its expertise in social sciences, arts, and humanities. Established in 1947, SU has expanded its influence across several cities in Pakistan, including Jamshoro, Dadu, Badin, Mirpurkhas, and Thatta, with multiple campuses dedicated to fostering academic excellence and cultural enrichment. The university&apos;s commitment to promoting regional development and cultural heritage reflects in its diverse programs and community engagement initiatives, making it a cornerstone of educational advancement in the Sindh region.",
        imageUrl:"/images/uos.png"
    },
    {
        name:"31. IBA",
        href:"https://www.iba.edu.pk/",
        text:"The Institute of Business Administration (IBA) Pakistan is renowned globally for its excellence in business education and management studies. It consistently ranks among the top business schools in Asia and holds a prestigious position in the global rankings for its MBA and executive education programs. IBA Karachi, its main campus, is located in the bustling metropolitan city of Karachi, Pakistan&apos;s financial hub. Additionally, IBA has expanded its reach with campuses in other major cities like Islamabad and Sukkur, offering a wide range of undergraduate and graduate programs. Known for its rigorous academic curriculum and strong industry connections, IBA continues to shape future business leaders and entrepreneurs in Pakistan and beyond.",
        imageUrl:"/images/iba.png"
    },
    {
        name:"32. UoM",
        href:"https://www.uom.edu.pk/",
        text:"The University of Malakand (UoM) in Pakistan is recognized for its strong academic reputation, particularly in the fields of natural sciences, social sciences, and management studies. Renowned for its commitment to research and quality education, UoM holds a notable position among Pakistani universities. It ranks competitively within the national educational landscape, contributing significantly to regional development through its specialized programs and research initiatives. Established in Chakdara, Lower Dir District, the university extends its educational impact beyond its main campus, with outreach centers in various cities across the region, fostering accessibility and academic growth throughout Khyber Pakhtunkhwa.",
        imageUrl:"/images/uom.png"
    },
    {
        name:"33. AU",
        href:"https://www.au.edu.pk/",
        text:"Air University (AU) Pakistan, renowned for its excellence in aerospace and aviation education, holds a prominent position globally. It is highly regarded for its innovative programs in aeronautical engineering, aviation management, and space sciences. The university consistently ranks among the top institutions in Pakistan for its specialized focus on aerospace technologies and related disciplines. With its main campus located in Islamabad, Air University also extends its academic influence through branches in major cities like Multan and Kamra. These campuses serve as hubs for cutting-edge research and education, contributing significantly to Pakistan&apos;s aviation and aerospace sectors.",
        imageUrl:"/images/au.png"
    },
    {
        name:"34. CUST",
        href:"https://cust.edu.pk/",
        text:"Capital University of Science and Technology (CUST) Pakistan, located in Islamabad, is renowned for its strong emphasis on engineering and technology education, consistently ranking among the top universities in Pakistan. The university is highly regarded for its research in fields such as computer science, electrical engineering, and mechanical engineering, contributing significantly to technological advancements in the region. CUST operates multiple campuses across Pakistan, with notable branches in Lahore and Peshawar, offering a diverse range of undergraduate and postgraduate programs. With a commitment to academic excellence and innovation, CUST continues to play a pivotal role in shaping the future of engineering education in Pakistan.",
        imageUrl:"/images/cust.png"
    },
    {
        name:"35. FUI",
        href:"https://admissions.fui.edu.pk/#/",
        text:"Foundation University Islamabad (FUI), located in the capital city of Pakistan, is renowned for its excellence in medical and health sciences education. It consistently ranks among the top institutions in Pakistan for its medical programs, particularly in fields like medicine, dentistry, and allied health sciences. FUI is esteemed for its state-of-the-art facilities and rigorous academic curriculum, preparing students to excel in healthcare professions. Beyond Islamabad, the university has expanded its presence with branches in Rawalpindi and Lahore, catering to a diverse student body across multiple cities. This strategic expansion enhances accessibility to quality education in healthcare disciplines, reinforcing FUI&apos;s commitment to academic excellence and professional development in Pakistan.",
        imageUrl:"/images/fui.png"
    },
    {
        name:"36. HITEC-U",
        href:"https://www.hitecuni.edu.pk/",
        text:"HITEC University (HITEC-U), located in Taxila, Pakistan, is renowned for its excellence in engineering and technology education, consistently ranked among the top universities in Pakistan. It stands out for its strong focus on electrical engineering, computer science, and mechanical engineering, attracting students nationwide. The university&apos;s commitment to research and innovation is reflected in its partnerships with industry leaders and government initiatives. HITEC University extends its academic reach beyond Taxila, with additional campuses in major cities like Islamabad, catering to a diverse student body seeking cutting-edge education in the field of technology and engineering.",
        imageUrl:"/images/hitec.png"
    },
    {
        name:"37. RIU",
        href:"https://riphah.edu.pk/",
        text:"Riphah International University (RIU), based in Pakistan, is renowned for its strong focus on health sciences and Islamic studies. It ranks prominently in these fields globally, emphasizing academic excellence and research innovation. With campuses in major cities like Islamabad, Lahore, and Faisalabad, Riphah University caters to a diverse student body across the country. Its commitment to quality education is reflected in its state-of-the-art facilities and comprehensive programs, fostering leadership and professional development. Riphah University continues to uphold its reputation as a leading institution in Pakistan, preparing students to meet global challenges in healthcare and Islamic education while promoting ethical values and societal welfare.",
        imageUrl:"/images/riphah.png"
    },
    {
        name:"38. SIBAU",
        href:"https://www.iba-suk.edu.pk/",
        text:"Sukkur IBA University (SIBAU) in Pakistan is renowned for its excellence in business education, consistently ranking among the top institutions in the country. Its strong emphasis on management studies and entrepreneurship has earned it recognition both nationally and internationally. The university&apos;s main campus is located in Sukkur, Sindh, with additional branches in Karachi and Larkana. Sukkur IBA University stands out for its innovative approach to education, preparing students to meet the challenges of the global business environment. It continues to attract students from across Pakistan who seek quality education in business administration and related fields.",
        imageUrl:"/images/ibaSukkur.png"
    },
    {
        name:"39. MUL",
        href:"https://www.mul.edu.pk/en/",
        text:"Minhaj University Pakistan (MUL) is a renowned institution known for its commitment to excellence in education and research. While its exact world ranking can vary, MUL is highly esteemed for its programs in Islamic Studies, Law, and Social Sciences. Founded by Dr. Tahir-ul-Qadri, it maintains campuses in multiple cities including Lahore, where its main campus is located, and others like Faisalabad and Karachi. MUL stands out for its strong emphasis on moral and spiritual development alongside academic pursuits, making it a preferred choice for students seeking a holistic educational experience in Pakistan.",
        imageUrl:"/images/mu.png"
    },
    {
        name:"40. UAJK",
        href:"https://ajku.edu.pk/",
        text:"The University of Azad Jammu and Kashmir (UAJK), located in Muzaffarabad, Pakistan, is renowned for its excellence in forestry and wildlife management, positioning itself prominently in this field globally. It consistently ranks among the top institutions for forestry studies worldwide, offering comprehensive programs that blend academic rigor with practical field experience. Beyond its main campus in Muzaffarabad, UAJK has established branches in other key cities such as Rawalakot and Kotli, expanding its educational reach across the region. With a commitment to environmental conservation and sustainable development, UAJK continues to attract students and researchers eager to contribute to the preservation and management of natural resources in Pakistan and beyond.",
        imageUrl:"/images/ajk.png"
    },
    
    {
        name:"41. SSUET",
        href:"https://www.ssuet.edu.pk/",
        text:"Sir Syed University of Engineering and Technology (SSUET), located in Karachi, Pakistan, holds a prominent position in the realm of engineering education. Renowned for its rigorous academic programs and innovative research initiatives, SSUET consistently ranks among the top engineering universities in Pakistan. It is particularly acclaimed for its expertise in electrical engineering, computer science, and mechanical engineering disciplines. SSUET&apos;s commitment to academic excellence extends beyond its main campus in Karachi, with plans for future expansions and branches aimed at fostering regional educational growth and technological advancement across Pakistan.",
        imageUrl:"/images/ssuet.png"
    },
    {
        name:"42. FAST-NUCES",
        href:"https://www.nu.edu.pk/",
        text:"The National University of Computer and Emerging Sciences (FAST-NUCES) in Pakistan is renowned for its excellence in computer science and emerging technologies. It consistently ranks among the top universities in Pakistan and is highly regarded for its engineering and IT programs. Founded in 2000, FAST-NUCES has campuses in major cities including Karachi, Lahore, Islamabad, Peshawar, and Faisalabad, offering a wide range of undergraduate, graduate, and doctoral programs. Its commitment to cutting-edge research, strong industry collaborations, and state-of-the-art facilities make it a preferred choice for students seeking quality education in technology and computer science disciplines in Pakistan.",
        imageUrl:"/images/nuces.png"
    },
    {
        name:"43. BU",
        href:"https://bahria.edu.pk/buic/",
        text:"Bahria University (BU) Pakistan is renowned for its excellence in maritime studies and management, consistently ranking high globally in this field. It stands out as a leader in fostering expertise related to naval sciences, maritime operations, and maritime management. With campuses in Islamabad, Karachi, and Lahore, Bahria University ensures accessibility to quality education across major cities in Pakistan. Its commitment to research and development in maritime technology and management has earned it international recognition, reflecting its dedication to shaping future leaders in naval and maritime industries. The university&apos;s emphasis on practical training and cutting-edge research further enhances its stature as a hub for maritime education in the region.",
        imageUrl:"/images/bu.png"
    },
    {
        name:"44. UMT",
        href:"https://www.umt.edu.pk/",
        text:"The University of Management and Technology (UMT) Pakistan is renowned for its excellence in business education and management studies, consistently ranking among the top institutions in Pakistan. Its world-class programs in business administration, finance, and entrepreneurship attract students nationally and internationally. Established in Lahore, UMT has expanded its footprint to include campuses in Sialkot and Islamabad, offering a diverse range of undergraduate and graduate programs. The university&apos;s commitment to research and innovation is reflected in its partnerships with industry leaders and contributions to socio-economic development. UMT&apos;s academic rigor, coupled with its modern facilities and experienced faculty, ensures a dynamic learning environment that prepares students for global challenges in the business and management sectors.",
        imageUrl:"/images/umt.png"
    },
    {
        name:"45. UoW",
        href:"https://uow.edu.pk/",
        text:"The University of Wah (UoW), located in Wah Cantt, Pakistan, is renowned for its excellence in engineering and technology, consistently ranking among the top universities in Pakistan. Its strong emphasis on practical education and research in engineering disciplines has earned it a prominent place in the academic landscape. The university&apos;s main campus is situated in Wah Cantt, with additional branches in Attock and Taxila, extending its academic influence across these regions. With state-of-the-art facilities and a commitment to producing skilled professionals, University of Wah continues to play a vital role in shaping the future of engineering education in Pakistan.",
        imageUrl:"/images/uow.png"
    },
    {
        name:"46. KEMU ",
        href:"https://kemu.edu.pk/",
        text:"King Edward Medical University (KEMU) in Pakistan is renowned globally for its excellence in medical education and research. It consistently ranks among the top medical universities worldwide, known particularly for its rigorous academic programs and cutting-edge research in healthcare sciences. Situated in Lahore, the historical city of Pakistan, KEMU stands as a beacon of medical expertise and innovation. Its main campus in Lahore is complemented by several affiliated hospitals across the city, providing students with extensive clinical exposure and practical training. KEMU&apos;s commitment to producing skilled healthcare professionals has earned it a prestigious reputation both nationally and internationally, making it a preferred choice for aspiring medical students seeking quality education and clinical experience.",
        imageUrl:"/images/kemu.png"
    },
    {
        name:"47. STMU",
        href:"https://stmu.edu.pk/",
        text:"Shifa Tameer-e-Millat University (STMU) in Pakistan is renowned for its excellence in medical and health sciences education. It holds a prominent position in the country&apos;s higher education landscape, particularly esteemed for its medical programs. STMU is based in Islamabad, the capital city of Pakistan, where its main campus is located. The university&apos;s commitment to quality education and research in fields like medicine, nursing, and allied health sciences has garnered it recognition both nationally and internationally. STMU&apos;s focus on producing skilled healthcare professionals and its state-of-the-art facilities contribute to its reputation as a leading institution in the region.",
        imageUrl:"/images/stmu.png"
    },
    {
        name:"48. ISP",
        href:"https://www.isp.edu.pk/",
        text:"The Institute of Southern Punjab (ISP) in Pakistan has established itself prominently in the educational landscape, known for its commitment to academic excellence and innovative learning methods. While ISP&apos;s global ranking reflects its dedication to quality education, it particularly excels in fields such as business administration, computer science, and social sciences. With its main campus located in Multan, ISP has expanded its influence with additional branches in several key cities across the region, including Lahore and Bahawalpur. This strategic expansion not only enhances accessibility for students but also reinforces ISP&apos;s role as a pivotal institution in southern Punjab&apos;s higher education sector.",
        imageUrl:"/images/iosp.png"
    },
    {
        name:"49. LCWU",
        href:"https://www.lcwu.edu.pk/",
        text:"Lahore College for Women University (LCWU) in Pakistan holds a prominent position in the realm of women&apos;s education, renowned for its commitment to academic excellence and empowerment. It ranks highly in fields such as social sciences, humanities, and natural sciences, contributing significantly to research and education in these domains. Founded in Lahore, the university has expanded its influence with branches in key cities across Pakistan, including Islamabad and Faisalabad, catering to a diverse student body. LCWU continues to uphold its legacy of fostering leadership and innovation among women, making it a beacon of educational advancement in the region.",
        imageUrl:"/images/lcwu.png"
    },
    {
        name:"50. GIKI",
        href:"https://giki.edu.pk/",
        text:"Ghulam Ishaq Khan Institute of Engineering Sciences and Technology (GIKI), located in Topi, Khyber Pakhtunkhwa, Pakistan, is renowned for its excellence in engineering and technology education. Established in 1988, GIKI consistently ranks among the top engineering universities globally, recognized particularly for its programs in mechanical engineering, electrical engineering, computer science, and materials engineering. The institute prides itself on its rigorous academic standards and cutting-edge research facilities, attracting students from across Pakistan and internationally. While GIKI primarily operates from its main campus in Topi, it also has plans for expansion and outreach programs to enhance engineering education in other cities of Pakistan, fostering innovation and leadership in the field of engineering sciences.",
        imageUrl:"/images/gik.png"
    },
   
]


//Study Page Function
const Study = () => {
    return (
        <main className=' w-full  pt-16'>
        <div className='p-4 md:p-8 gap-y-12 md:gap-y-8'>
            {/* Heading */}
    <h1 className="text-green-900 font-extrabold text-4xl md:text-7xl text-center">
 Top Universities In Pakistan
    </h1>
    <p className="text-lg mt-12 text-green-950 break-words">Pakistan has universities ranked among the world&apos;s top 1000, such as NUST (400), PIEAS (375), LUMS (651-700), and Aga Khan University (201-250). These institutions are known for quality education and research. The Higher Education Commission (HEC) is working to improve educational standards across the country. Education in Pakistan is progressing, with a focus on technology and innovation. These universities play a crucial role in the country&apos;s development and offer opportunities for students to excel globally. You don’t need to worry about learning Urdu (the national language), as all teaching at most of the universities in Pakistan is conducted in English.</p>
   {/* Mapping of universitiesData Array*/}
    <div className="mt-20">
{
    universitiesData.map((item,index)=>{
        return (
            <div key={index} className="mt-24 md:mt-40 gap-y-8 md:gap-y-12">
 <h2 className="text-4xl md:text-5xl font-extrabold ml-[500px] text-green-900 ">{item.name}</h2>
 <div className="flex flex-col-reverse gap-y-8 md:justify-between md:flex-row mt-8 md:mt-12">
 <div className='flex flex-col gap-y-8 md:gap-y-4'>
    <p className="text-lg text-green-950 break-words w-[90%] p-2 md:p-8">{item.text}</p>
    <Link href={item.href} className='flex justify-center'> <button className="bg-green-950 hover:bg-green-900 animate-bounce px-5 py-2.5 rounded-md text-center font-semibold text-white">Visit Site</button></Link>
        </div>
       <Image src={item.imageUrl} alt={item.name} width={620} height={340} className="mt-4 md:mt-0 object-fit mt-4 md:mt-0 rounded-md"/>
            </div></div> 
        )
    })
}
    </div>
    </div></main>
    );
}

export default Study;
