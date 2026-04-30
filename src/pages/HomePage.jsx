import Navbar from "../components/Navbar";
import StickyWhatsApp from "../components/StickyWhatsApp";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import About from "../sections/About";
import Benefits from "../sections/Benefits";
import Process from "../sections/Process";
import Testimonials from "../sections/Testimonials";
import FinalCTA from "../sections/FinalCTA";
import Footer from "../sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-bark-900">
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Benefits />
        <Process />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <StickyWhatsApp />
    </div>
  );
}
