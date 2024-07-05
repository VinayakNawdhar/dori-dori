"use client";
import React from "react";
import Navbar2 from "../components/utilities/Navbar2";
import { useGSAP } from "@gsap/react";
import Ourstory from "../components/Ourstory";

const page = () => {

  return (
    <>
      <Navbar2 />
      <Ourstory />
    </>
  );
};

export default page;
