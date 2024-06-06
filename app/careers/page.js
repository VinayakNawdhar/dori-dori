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
            <p className='text-sm md:text-md font-["Outfit"]'>
              At Dori Dori, we're passionate about creating delightful
              marshmallows and cookies that bring joy to our customers.
            </p>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Our team is the heart of our company, and we're always looking for
              talented, enthusiastic individuals to join us in our mission. If
              you're looking for a dynamic and rewarding career, we’d love to
              hear from you!
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Why Work With Us?
            </h1>
            <ul className="list-disc px-3 pt-3 text-sm md:text-md">
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Innovative Environment
                </span>
                : Be a part of a creative team that values innovation and
                quality.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Collaborative Culture
                </span>
                : Work in a supportive and collaborative atmosphere where every
                voice is heard.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Career Growth
                </span>
                : We invest in our employees' growth and development through
                training and advancement opportunities.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Employee Perks
                </span>
                : Enjoy delicious treats, employee discounts, health benefits,
                and more.
              </li>
            </ul>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Our Values
            </h1>
            <ul className="list-disc px-3 pt-3 text-sm md:text-md">
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">Quality</span>:
                Commitment to producing the highest quality products.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">
                  Customer Satisfaction
                </span>
                : Ensuring our customers are delighted with every bite.
              </li>
              <li className="py-1">
                <span className="font-['Outfit'] font-semibold">Teamwork</span>:
                Fostering a collaborative and supportive work environment.
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
            <h1 className='text-xl md:text-3xl font-semibold font-["Outfit"]'>
              Current Openings
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              There is not an opening right now, but check our website and
              social media pages frequently to stay informed of any updates.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
