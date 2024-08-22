import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience"; // Import the Experience component

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Skills />
      <Projects />
      <Experience /> {/* Add Experience component here */}
      <Contact />
    </div>
  );
}

export default App;
