import Achievement from "./components/container/Achievement";
import Brands from "./components/container/Brands";
import Flow_process from "./components/container/Flow_process/Flow_process";
import Hero from "./components/container/Hero";
import Navbar from "./components/container/Navbar";
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Brands />
      <Achievement />
      <Flow_process />
    </>
  );
}

export default App;
