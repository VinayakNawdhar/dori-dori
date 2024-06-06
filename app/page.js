"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Testimonial from "./components/Testimonial";
import Navbar from "./components/utilities/Navbar";
import Loader from "./components/utilities/Loader";
import ReduxProvider from "@/redux/ReduxProvider";

export default function Home() {
  const [loaded, setLoaded] = useState(true);
  useEffect(() => {
    if (document.readyState !== "loading") {
      setLoaded(false);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM fully loaded and parsed 2");
        setLoaded(false);
        document.removeEventListener("DOMContentLoaded", () => {});
      });
    }
  }, []);

  return (
    <ReduxProvider>
      <main>
        {loaded && <Loader />}
        <Navbar />
        <Hero />
        <Products />
        <About />
        <Testimonial />
        <Footer />
      </main>
    </ReduxProvider>
  );
}
