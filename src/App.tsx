import { Features } from "tailwindcss";
import Achievement from "./components/container/Achievement";
import Brands from "./components/container/Brands";
import Flow_process from "./components/container/Flow_process/Flow_process";
import Hero from "./components/container/Hero";
import Industry from "./components/container/Industry";
import Navbar from "./components/container/Navbar";
import Portfolio from "./components/container/Portfolio";
import Services from "./components/container/Services";
import Testimonials from "./components/container/Testimonials";
import Ask_me from "./components/container/Ask_me";
import Contact from "./components/container/Contact";
import Footer from "./components/container/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Achievement />
      <Flow_process />
      <Services />
      <Industry />
      <Portfolio />
      <Testimonials />
      <Ask_me />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
