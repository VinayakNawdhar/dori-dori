import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
import Script from "next/script";
export const metadata = {
  title: "Dori Dori.",
  description:
    "At Dori Dori, we bake the tastiest cookies and craft gourmet marshmallows. Our cookies are baked to perfection, with a crunchy exterior and a soft, chewy center. Each marshmallow is handcrafted using only the finest ingredients, resulting in fluffy clouds of sweetness that melt in your mouth. Whether you're indulging in our classic Strawberry Cheesecake or savoring our unique marshmallow flavors like toasted coconut or salted caramel, every bite is a delicious experience. We take pride in our artisanal approach, ensuring that every batch is made with love and care.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.2.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Dancing+Script:wght@400..700&family=Outfit:wght@100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Poetsen+One&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://db.onlinewebfonts.com/c/cfdb15a809da1e165116b60571ea4147?family=Absinette+W01+Regular"
          rel="stylesheet"
        ></link>
       <link href="https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://unpkg.com/sheryjs/dist/Shery.css" />
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></Script>
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></Script>
        <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.155.0/three.min.js"></Script>
        <Script strategy="beforeInteractive" src="https://cdn.jsdelivr.net/gh/automat/controlkit.js@master/bin/controlKit.min.js"></Script>
        <Script
          type="text/javascript"
          strategy="beforeInteractive"
          src="https://unpkg.com/sheryjs/dist/Shery.js"
        ></Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
