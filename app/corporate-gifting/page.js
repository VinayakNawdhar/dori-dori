import React from "react";
import Navbar2 from "../components/utilities/Navbar2";

const page = () => {
  return (
    <>
      <Navbar2 />
      <div className="pt-[80px] md:pt-[110px] px-4 md:px-96 py-5">
        <h1 className='text-2xl md:text-3xl mb-2 font-["Outfit"] mx-auto text-[var(--font-color)] pt-16 pb-4 text-center'>
          Corporate Gifting
        </h1>
        <p>
          Welcome to Dori Dori's exquisite selection of corporate and special
          festival gift boxes, crafted with love and care to sweeten every
          occasion.
        </p>
        <div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Corporate Gift Boxes: Elevate Your Brand Appreciation
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Impress your clients, employees, and partners with Dori Dori's
              luxurious corporate gift boxes. Each box is meticulously curated
              to reflect your brand's sophistication and appreciation. Choose
              from an array of delectable options, including:
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold">
                  Signature Marshmallow Assortment
                </span>
                : A selection of our finest marshmallow flavors, elegantly
                packaged to represent your brand's commitment to excellence.
              </li>
              <li>
                <span className="font-semibold">
                  Gourmet Cookie Collection
                </span>
                : Indulge discerning taste buds with our handcrafted cookies,
                made with premium ingredients for a truly unforgettable
                experience.
              </li>
              <li>
                <span className="font-semibold">Customizable Packaging</span>:
                Personalize your gift boxes with your company logo, message, or
                theme to leave a lasting impression.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Special Festival Gift Boxes: Sweeten Every Celebration
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Make every festival memorable with Dori Dori's special festival
              gift boxes
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold">
                  Seasonal Marshmallow Delights
                </span>
                : Embrace the spirit of the season with our limited-edition
                marshmallow flavors, inspired by traditional holiday favorites.
              </li>
              <li>
                <span className="font-semibold">
                  Holiday Cookie Extravaganza
                </span>
                : From gingerbread delights to festive sugar cookies, our
                holiday-themed cookies are a festive feast for the senses.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Why Choose Dori Dori?
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              At Dori Dori, we're passionate about creating moments of happiness
              through our artisanal marshmallows and cookies. Here's why our
              gift boxes stand out:
            </p>
            <ul className="space-y-3 text-sm">
              <li>
                <span className="font-semibold">Premium Quality</span>: We
                source the finest ingredients to ensure unparalleled taste and
                freshness in every bite.
              </li>
              <li>
                <span className="font-semibold">Artisanal Craftsmanship</span>:
                Our team works closely with you to tailor gift boxes that align
                with your brand identity and event theme.
              </li>
              <li>
                <span className="font-semibold">Memorable Experiences</span>:
                From the elegant packaging to the indulgent flavors, our gift
                boxes are designed to create lasting memories for recipients.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Order Your Gift Boxes Today!
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Ready to elevate your corporate gifting or festival celebrations?
              Explore our range of gift boxes on our website or contact our team
              to discuss customizations and bulk orders.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Dori Dori: Where Every Bite is a Delight!
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
