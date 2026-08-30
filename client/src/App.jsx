import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";

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
    </main>
    </>
  )
}

export default App;