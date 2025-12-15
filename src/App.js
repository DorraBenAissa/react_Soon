// IMPORTS
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";

// import Error from './pages/Error/Error';



// LAYOUTS

// COMPONENTS
// import usePageScripts from "./components/usePageScripts";


// GLOBAL STYLES
// import './style/app.css';

import ScriptsLoader from "./components/ScriptsLoader";



// Routes de l'application // Layouts de l'application
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>

      {/* <ScriptsLoader /> */}
    </>
  );
}

export default App;
