// IMPORTS
import { Routes, Route } from "react-router-dom";

// PAGES
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import About from "./pages/About/About";

import Services from "./pages/Services/Services";
import Service_details_3D from "./pages/Service_details/Service_details_3D";
import Service_details_Brand from "./pages/Service_details/Service_details_Brand";
import Service_details_Com from "./pages/Service_details/Service_details_Com";
import Service_details_Digital from "./pages/Service_details/Service_details_Digital";
import Service_details_Event from "./pages/Service_details/Service_details_Event";
import Service_details_Growth from "./pages/Service_details/Service_details_Growth";

import Portfolio_details from "./pages/Portfolio_details/Portfolio_details";
import Portfolio_details_2 from "./pages/Portfolio_details/Portfolio_details_2";
import Portfolio_details_3 from "./pages/Portfolio_details/Portfolio_details_3";
import Portfolio_details_4 from "./pages/Portfolio_details/Portfolio_details_4.jsx";
import Portfolio_details_5 from "./pages/Portfolio_details/Portfolio_details_5";

import Blog from "./pages/Blog/Blog";
import Blog_details from "./pages/Blog_details/Blog_details";
import Blog_details_2 from "./pages/Blog_details/Blog_details_2";
import Blog_details_3 from "./pages/Blog_details/Blog_details_3";

// import Error from './pages/Error/Error';



// LAYOUTS

// COMPONENTS
// import usePageScripts from "./components/usePageScripts";


// GLOBAL STYLES
// import './style/app.css';

// import ScriptsLoader from "./components/ScriptsLoader";



// Routes de l'application // Layouts de l'application
function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/services" element={<Services />} />
          <Route path="/service_details_3D" element={<Service_details_3D />} />
          <Route path="/service_details_Brand" element={<Service_details_Brand />} />
          <Route path="/service_details_Com" element={<Service_details_Com />} />
          <Route path="/service_details_Digital" element={<Service_details_Digital />} />
          <Route path="/service_details_Event" element={<Service_details_Event />} />
          <Route path="/service_details_Growth" element={<Service_details_Growth />} />

        <Route path="/portfolio_details" element={<Portfolio_details />} />
        <Route path="/portfolio_details_2" element={<Portfolio_details_2 />} />
        <Route path="/portfolio_details_3" element={<Portfolio_details_3 />} />
        <Route path="/portfolio_details_4" element={<Portfolio_details_4 />} />
        <Route path="/portfolio_details_5" element={<Portfolio_details_5 />} />

        <Route path="/blog" element={<Blog />} />
          <Route path="/blog_details" element={<Blog_details />} />
          <Route path="/blog_details_2" element={<Blog_details_2 />} />
          <Route path="/blog_details_3" element={<Blog_details_3 />} />
      </Routes>

      {/* <ScriptsLoader /> */}
    </>
  );
}

export default App;
