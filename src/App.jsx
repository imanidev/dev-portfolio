import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header.jsx";
import "./components/Header/Header.css";
import Footer from "./components/Footer/Footer.jsx";
import "./components/Footer/Footer.css";
import Home from "./pages/Home/Home.jsx";
import "./pages/Home/Home.css";
import Projects from "./pages/Projects/Projects.jsx";
import "./pages/Projects/Projects.css";
import About from "./pages/About/About.jsx";
import "./pages/About/About.css";
import Contact from "./pages/Contact/Contact.jsx";
import "./pages/Contact/Contact.css";
import Loader from "./components/Loader.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Loader /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
