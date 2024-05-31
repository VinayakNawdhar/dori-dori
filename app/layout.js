import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
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
          href="https://fonts.googleapis.com/css2?family=Jersey+10&display=swap"
          rel="stylesheet"
        ></link>
        <link
          href="https://db.onlinewebfonts.com/c/cfdb15a809da1e165116b60571ea4147?family=Absinette+W01+Regular"
          rel="stylesheet"
        ></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
