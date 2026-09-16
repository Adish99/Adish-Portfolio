import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";
import Achievements from "./sections/Achievements/Achievements";
import Contact from "./sections/Contacts/Contacts";
import Experience from "./sections/Experience/Experience";
import Footer from "./sections/Footer/Footer";

import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
import Services from "./sections/Services/Services";
import Skills from "./sections/Skills/Skills";

const App=()=>{
  return(
    <>
    <Navbar/>
    <main>
  <Hero/>
  <About/>
  <Skills/>
  <Projects/>
  <Experience/>
  <Services/>
  <Achievements/>
  <Contact/>
  <Footer/>
    </main>
    </>
  )
}

export default App;