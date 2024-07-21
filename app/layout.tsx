// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// import NavBar from "./components/NavBar";
// import Footer from "./components/Footer";
// import { Toaster } from "@/components/ui/toaster";


// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Live In Pakistan",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <head>
//         {/* Google AdSense verification code */}
//         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
//         <script
//           dangerouslySetInnerHTML={{
//             __html: `
//               (adsbygoogle = window.adsbygoogle || []).push({
//                 google_ad_client: "ca-pub-7248886941446965",
//                 enable_page_level_ads: true
//               });
//             `,
//           }}
//         />
//       </head>
//       <body className='overflow-x-hidden'>
//          <Toaster/><NavBar/>
//       <div className="bg-gray-100/50">{children}</div>
//       <Footer/></body>
//     </html>
//   );
// }


import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Live In Pakistan",
  description: "Generated by Syed Shahmir Sultan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google AdSense verification code */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7248886941446965" crossOrigin="anonymous"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (adsbygoogle = window.adsbygoogle || []).push({
                google_ad_client: "ca-pub-7248886941446965",
                enable_page_level_ads: true
              });
            `,
          }}
        />
      </head>
      <body className='overflow-x-hidden'>
        <Toaster /><NavBar />
        <div className="bg-gray-100/50">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

