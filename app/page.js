import About from "./components/About";
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
    </main>
  );
}
