//imports
import { Link } from "react-router-dom";

// ASSETS
import thumb from "../../assets/img/portfolio/two-columns/thumb.png";
import thumb_2 from "../../assets/img/portfolio/two-columns/thumb-2.png";
import thumb_3 from "../../assets/img/portfolio/two-columns/thumb-3.jpg";
import thumb_4 from "../../assets/img/portfolio/two-columns/thumb-4.jpg";
import thumb_5 from "../../assets/img/portfolio/two-columns/thumb-5.jpg";
import thumb_6 from "../../assets/img/portfolio/two-columns/thumb-6.jpg";
// COMPONENTS
import Footer from "../../layouts/Footer/Footer";
import Loader from "../../components/Loader";
import StickyHeader from "../../components/StickyHeader";
import MouseFollower from "../../components/MouseFollower";
import ScrollToTop from "../../components/ScrollToTop";
import TextAnimations from "../../components/TextAnimations";
import WowInit from "../../components/WowInit";
import TestimonialSlider from "../../components/TestimonialSlider";
import BrandSlider from "../../components/BrandSlider";
import ScrollToTopAutomatic from "../../components/ScrollToTopAutomatic";
import TitleAnimation from "../../components/TitleAnimation";
import SmoothScroll from "../../components/SmoothScroll";
import Menu from "../../components/Menu";
import AutoCloseMenu from "../../components/AutoCloseMenu";
import Header from "../../layouts/Header/Header";

import Faq from "../../components/Faq";
import cta1 from "../../assets/img/cta/cta.png";

function Home() {
  return (
    <>
      <ScrollToTopAutomatic />
      <Loader />
      <MouseFollower />
      <ScrollToTop />
      <TextAnimations />
      <TestimonialSlider />
      <BrandSlider />
      <StickyHeader />
      <SmoothScroll />
      <TitleAnimation />
      <WowInit />
      <Menu />
      <AutoCloseMenu />
      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
            <main>
                <div className="td-breadcrumb-area td-breadcrumb-spacing mb-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="td-breadcrumb-wrap">
                                    <span className="subtitle d-inline-block mb-10  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">PROJETS</span>
                                    <h2 className="td-section-page-title td-section-page-bigtitle mb-35  wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1s">Expertises <span></span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-portfolio-filter-area pb-160">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 mb-50  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="td-portfolio-filter-btn text-center masonary-menu">
                                    <button data-filter="*" className="active">TOUS</button>
                                    <button data-filter=".prof">Secteurs</button>
                                    <button data-filter=".prof1">Expertises</button>
                                </div>
                            </div>
                        </div>
                        <div className="grid row">
                            <div className="col-md-6 grid-item prof prof1 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px", backgroundImage: "linear-gradient(to top, rgba(0,0,0,0.5) 30%, transparent 100%)",}} src={thumb} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10"  >BRANDING</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Branding & Design</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof2 prof4 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_2} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">STRATEGIE</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Stratégie & Communication</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof1 prof3 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_3} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">DIGITAL</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Digital & Technologie</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof3 prof1 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_4} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">MARKETING</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Audiovisuel & 3D</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof2 prof4 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_5} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">VISUAL</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Social Media & Growth</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof prof1 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_6} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">Agency</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Site web</a></h3>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 grid-item prof prof1 mb-30">
                                <div className="td-portfolio-filter-wrapper p-relative">
                                    <div className="td-portfolio-filter-thumb fix">
                                        <img className="w-100" style={{borderTopRightRadius: "142px", borderBottomLeftRadius: "142px",}} src={thumb_6} alt="project"/>
                                    </div>
                                    <div className="td-portfolio-filter-content">
                                        <span className="mb-10">Agency</span>
                                        <h3 className="titles"><a href="portfolio-details.html">Événementiel & Expériences</a></h3>
                                    </div>
                                </div>
                            </div>
                            
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-center mt-50">
                                    <div className="td-btn-group">
                                        <a className="td-btn-circle" href="service.html">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                        <a className="td-btn-2 td-btn-primary" href="service.html">SEE MORE PROJECT</a>
                                        <a className="td-btn-circle" href="service.html">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                {/* </div>  */}
            </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Home;
