import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";
import Experience from "./sections/Experience/Experience";

import Hero from "./sections/Hero/Hero";
import Projects from "./sections/Projects/Projects";
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
    </main>
    </>
  )
}

export default App;