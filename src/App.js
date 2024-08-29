import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Home from "./containers/home";
import About from "./containers/about";
import Portfolio from "./containers/portfolio";
import Contact from "./containers/contact";
import Resume from "./containers/resume";
import Skills from "./containers/skills";
import Navbar from "./components/nevBar";
import particles from "./utilsJs/particles";

function App() {

  const location = useLocation();
  console.log(location);
  // create init method
  const handleInit = async (main) => {
    await loadFull(main);
  };
  
  const renderParticleJsInHomePage = location.pathname ==="/";

  return (
    <div className="App">
      {/* particles */}
      {/* front page use background tsparticles */}
      {
         renderParticleJsInHomePage &&
         <Particles id="particles" init={handleInit} options={particles} />

      }
      

      {/* navbar */}
      <Navbar />

      {/* main page content */}
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
