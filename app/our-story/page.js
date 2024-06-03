"use client";
import React from "react";
import Navbar2 from "../components/utilities/Navbar2";
import { useGSAP } from "@gsap/react";
import Ourstory from "../components/Ourstory";

const page = () => {
  useGSAP(() => {
    Shery.mouseFollower({
      //Parameters are optional.
      skew: true,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 0.1,
    });
  });
  return (
    <>
      <Navbar2 />
      <Ourstory />
    </>
  );
};

export default page;
