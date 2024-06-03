'use client'
import { useEffect } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/utilities/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Testimonial/>
      <Footer/>
    </main>
  );
}
