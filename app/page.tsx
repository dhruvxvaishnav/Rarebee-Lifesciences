import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import About from "@/components/About";
import Products from "@/components/Products";
import Contact from "@/components/Contact";
import ThirdParty from "@/components/ThirdParty";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
        <ThirdParty />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
