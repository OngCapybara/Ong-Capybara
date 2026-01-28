import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects"
import Blogs from "./components/Blogs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-sky-200">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;