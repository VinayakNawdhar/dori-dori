"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import { useState } from "react";
import Navbar2 from "../components/utilities/Navbar2";
const page = () => {
  const [accordions, setAccordion] = useState([
    {
      key: 1,
      title: "What types of marshmallows and cookies do you offer?",
      data: `We have a range of marshmallows & cookies available; for more information, visit the website's flavours section.`
    },
    {
      key: 2,
      title: "Do you have vegan options?",
      data: `We are developing a line of vegan marshmallows; stay tuned to our social media accounts to learn when they are available!`,
    },
    {
      key: 3,
      title: "How should I store marshmallows and cookies?",
      data: `Store marshmallows in an airtight container at room temperature. Cookies should also be stored in an airtight container; they can be kept at room temperature or in the refrigerator for extended freshness.`,
    },
    {
      key: 4,
      title: "How do I place an order?",
      data: "You can order directly through our website by adding items to your cart and proceeding to checkout.",
    },
    {
      key: 5,
      title: "What payment methods do you accept?",
      data: "Major credit cards, UPI, and additional safe payment options are accepted. ",
    },
    {
      key: 6,
      title: "How long does shipping take?",
      data: "Shipping times vary based on your location and the shipping method selected. Standard shipping usually takes 5-8 business days.",
    },
    {
      key: 7,
      title: "Can I customise my order?",
      data: "Yes, we offer customization options for bulk orders, including personalized packaging and flavours. Contact us for more details.",
    },
    {
      key: 8,
      title: "Do you offer bulk discounts?",
      data: "Yes, we provide discounts for large orders. Please contact our sales team for more information.",
    },
    {
      key: 9,
      title: "Can I order for special events or corporate gifts?",
      data: "Absolutely! We cater to special events (Diwali, Christmas, & New Year’s), weddings, and corporate gifting. Reach out to us to discuss your requirements.",
    },
    {
      key: 10,
      title: "What ingredients are used in your products?",
      data: "Our marshmallows and cookies are made with high-quality ingredients. Each product listing includes a detailed ingredient list.",
    },
    {
      key: 11,
      title: "How do I find out about allergens?",
      data: "All allergens are listed on the product descriptions. If you have specific allergy concerns, please contact us directly.",
    },
    {
      key: 12,
      title: "How can I contact customer service?",
      data: "You can reach our customer service team via email at thedoridorii@gmail.com or by calling 7710020950 during business hours.",
    },
    {
      key: 13,
      title: "Do you have a physical store?",
      data: "We currently operate online only, but we participate in various local markets and events. Follow us on social media to find out where we'll be next.",
    },
  ]);

  const toggleAccordion = (accordionkey) => {
    const updatedAccordions = accordions.map((accord) => {
      if (accord.key === accordionkey) {
        return { ...accord, isOpen: !accord.isOpen };
      } else {
        return { ...accord, isOpen: false };
      }
    });

    setAccordion(updatedAccordions);
  };

  return (
    <div>
      <Navbar2 />
      <div className="pt-[80px] md:pt-[110px] px-2 md:px-32 py-5">
        <h2 className="text-2xl md:text-3xl mb-2 font-['Outfit'] mx-auto text-[var(--font-color)] pt-16 pb-4 text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-5">
          <Accordion className="w-full" allowMultiple>
            {accordions.map(ques => (
                <AccordionItem id={ques.id} className="border-b border-gray-200 py-[17px]">
                <h2>
                  <AccordionButton className="flex justify-between font-semibold ">
                    <span
                      className="text-left text-sm md:text-[15.5px] font-['something']"
                      flex="1"
                      textAlign="left"
                    >
                      {ques.title}
                    </span>
                    <AccordionIcon className="text-left " />
                  </AccordionButton>
                </h2>
                <AccordionPanel
                  className="text-left text-sm md:text-[15.5px] mt-5 font-['something']"
                  pb={4}
                >
                  {ques.data}
                </AccordionPanel>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default page;
