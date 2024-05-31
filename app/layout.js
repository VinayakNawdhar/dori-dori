import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dori Dori.",
  description: "At Dori Dori, we bake the tastiest cookies and craft gourmet marshmallows. Our cookies are baked to perfection, with a crunchy exterior and a soft, chewy center. Each marshmallow is handcrafted using only the finest ingredients, resulting in fluffy clouds of sweetness that melt in your mouth. Whether you're indulging in our classic Strawberry Cheesecake or savoring our unique marshmallow flavors like toasted coconut or salted caramel, every bite is a delicious experience. We take pride in our artisanal approach, ensuring that every batch is made with love and care.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/images/favicon.png" type="image/png"/>
      </head>
      <body>{children}</body>
    </html>
  );
}
