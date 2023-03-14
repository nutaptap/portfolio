import NavBar from "./components/NavBar";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Work from "./components/Work";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="app">
      <NavBar />
      <Intro />
      <Skills />
      <Work />
      <About />
      <Contact />
    </div>
  );
}

export default App;
