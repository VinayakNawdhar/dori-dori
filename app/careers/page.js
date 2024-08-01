import React from "react";
import Navbar2 from "../components/utilities/Navbar2";

const page = () => {
  return (
    <>
      <Navbar2 />
      <div className="pt-[80px] md:pt-[110px] px-4 md:px-96 py-5">
        <h1 className='text-2xl md:text-3xl mb-2 font-["Outfit"] mx-auto text-[var(--font-color)] pt-16 pb-4 text-center'>
          Careers at Dori Dori
        </h1>
        <div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Join Our Team!
            </h1>
            {/* <p className='text-sm md:text-md font-["Outfit"]'>
              At Dori Dori, we're passionate about creating delightful
              marshmallows and cookies that bring joy to our customers.
            </p> */}
            <p className='text-sm md:text-md font-["Outfit"]'>
              Welcome to Dori Dori, where we bring the sweetest dreams to life
              with our delicious marshmallows and cookies! We're always on the
              lookout for passionate, creative, and dedicated individuals to
              join our growing team. If you have a love for sweet treats and a
              desire to be part of a dynamic and innovative company, Dori Dori
              might be the perfect place for you.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Why Work at Dori Dori?
            </h1>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-2xl font-semibold font-["Outfit"]'>
              Our Mission
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              At Dori Dori, our mission is to create delightful and
              unforgettable experiences through our artisanal marshmallows and
              cookies. We believe in using the finest ingredients and
              traditional techniques to craft treats that bring joy to our
              customers.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-2xl font-semibold font-["Outfit"]'>
              Our Values
            </h1>
            <ul className="list-disc px-3 pt-3 text-sm md:text-md">
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">Quality</span>:
                We are committed to maintaining the highest standards in every
                aspect of our business, from our products to our customer
                service.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Innovation
                </span>
                : We constantly strive to innovate and improve, bringing new and
                exciting flavors and products to our customers.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">Community</span>
                : We believe in fostering a positive and inclusive workplace
                where everyone feels valued and supported.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Innovation
                </span>
                : encouraging creativity and continuous improvement.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-2xl font-semibold font-["Outfit"]'>
              Our Culture
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Dori Dori is more than just a company; it's a family. We cultivate
              a supportive and collaborative work environment where everyone's
              ideas are heard, and contributions are valued. We celebrate
              diversity and believe that different perspectives make us
              stronger.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Career Opportunities
            </h1>
            <ul className="list-disc px-3 pt-3 text-sm md:text-md">
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Baking and Production Team
                </span>
                : Join our skilled baking team and help us create our delicious
                marshmallows and cookies. If you have a passion for baking and
                attention to detail, this is the role for you.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Marketing and Sales
                </span>
                : Help us spread the word about Dori Dori and connect with
                customers who love our treats. If you're creative, driven, and
                love interacting with people, consider joining our marketing and
                sales team.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Customer Service
                </span>
                : Be the friendly face of Dori Dori and ensure our customers
                have a fantastic experience with us. If you have excellent
                communication skills and a knack for solving problems, we want
                you on our customer service team.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Research and Development
                </span>
                : Help us innovate and develop new products that delight our
                customers. If you're a culinary wizard with a passion for
                experimenting with flavors and textures, our R&D team could be
                your perfect fit.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              How to Apply
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              If you're excited about the possibility of joining the Dori Dori
              family, we'd love to hear from you! Please send your resume and a
              cover letter to <a href="mailto:careers@doridori.in" className="underline font-bold">careers@doridori.in</a> and tell us why you'd be a
              great fit for our team. Be sure to specify the position you're
              applying for in the subject line of your email.
            </p>
            <p>
              Join us at Dori Dori and be part of a team that creates sweet
              moments and cherished memories every day!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
