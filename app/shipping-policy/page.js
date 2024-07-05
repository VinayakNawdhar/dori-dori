import React from "react";
import Navbar2 from "../components/utilities/Navbar2";

const page = () => {
  return (
    <>
      <Navbar2 />
      <div className="pt-[80px] md:pt-[110px] px-4 md:px-96 py-5">
        <h1 className='text-2xl md:text-3xl mb-2 font-["Outfit"] mx-auto text-[var(--font-color)] pt-16 pb-4 text-center'>
          Shipping Policy
        </h1>
        <div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Order Processing
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Processing Time: Orders are typically processed within 1-2
              business days (excluding weekends and holidays)
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Shipping Methods and Delivery Times
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Standard Shipping: Delivery within 5-8 business days. <br/> <span className="font-['Outfit'] font-semibold">Note</span>:
              Delivery times are estimates and may vary depending on the
              destination and shipping carrier. Delays may occur due to
              unforeseen circumstances such as weather, holidays, or carrier
              delays.{" "}
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Perishable Items
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Due to the perishable nature of our marshmallows and cookies, we
              take special care in packaging to ensure they arrive fresh and
              intact.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Shipping Restrictions
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              We currently only ship to addresses within India.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Order Tracking
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Once your order has shipped, you will receive a shipping
              confirmation email with a tracking number. You can track your
              order via the carrier’s website using this number.
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Delivery Issues
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Missing or Delayed Orders: If your order has not arrived within
              the estimated delivery time, please check the tracking information
              provided. If there are further issues, contact our customer
              service at thedoridorii@gmail.com or 7710020950
            </p>
          </div>
          <div className="grid gap-3 my-10">
            <h1 className='text-xl md:text-3xl font-light font-["Outfit"]'>
              Return and Refund Policy
            </h1>
            <p className='text-sm md:text-md font-["Outfit"]'>
              Due to the perishable nature of our products, we do not accept
              returns. However, if there are any issues with your order, please
              contact us within 7 days of receiving your order, and we will do
              our best to resolve the issue.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
