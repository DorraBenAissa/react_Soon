// IMPORTS
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Service_details from "./pages/Service_details/Service_details";
import Portfolio_details from "./pages/Portfolio_details/Portfolio_details";
import Blog from "./pages/Blog/Blog";
import Blog_details from "./pages/Blog_details/Blog_details";

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
        <Route path="/service_details" element={<Service_details />} />
        <Route path="/portfolio_details" element={<Portfolio_details />} />
              <Route path="/portfolio_details" element={<Portfolio_details />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog_details" element={<Blog_details />} />
      </Routes>

      {/* <ScriptsLoader /> */}
    </>
  );
}

export default App;
