import { Features } from "tailwindcss";
import Achievement from "./components/container/04_Achievement";
import Brands from "./components/container/03_Brands";
import Hero from "./components/container/02_Hero";
import Industry from "./components/container/07_Industry";
import Navbar from "./components/container/01_Navbar";
import Portfolio from "./components/container/08_Portfolio";
import Services from "./components/container/06_Services";
import Testimonials from "./components/container/09_Testimonials";
import Faq from "./components/container/10_FAQ";
import Contact from "./components/container/11_Contact";
import Footer from "./components/container/12_Footer";
import Our_process from "./components/container/05_Our_process/Our_process";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Achievement />
      <Our_process />
      <Services />
      <Industry />
      <Portfolio />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
