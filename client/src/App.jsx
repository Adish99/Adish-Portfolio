import Navbar from "./components/layout/Navbar";
import About from "./sections/About/About";

import Hero from "./sections/Hero/Hero";

const App=()=>{
  return(
    <>
    <Navbar/>
    <main>
  <Hero/>
  <About/>
    </main>
    </>
  )
}

export default App;