import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Navbar from "./components/utilities/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Products/>
      <About/>
      <Footer/>
    </main>
  );
}
