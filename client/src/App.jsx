import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";

import Hero from "./sections/Hero/Hero";
import Skills from "./sections/Skills/Skills";

const App=()=>{
  return(
    <>
    <Navbar/>
    <main>
  <Hero/>
  <About/>
  <Skills/>
    </main>
    </>
  )
}

export default App;