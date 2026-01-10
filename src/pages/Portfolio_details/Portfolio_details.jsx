//imports
import { Link } from "react-router-dom";

// ASSETS
import thumb from "../../assets/img/portfolio/details/thumb.jpg";
import text from "../../assets/img/portfolio/details/text.png";
import thumb_2 from "../../assets/img/portfolio/details/thumb-2.jpg";

// Layouts
import Header from "../../layouts/Header/Header";
import Footer from "../../layouts/Footer/Footer";

// Components
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
import SwipperPortfolio from "../../components/SwipperPortfolio";


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
                <div className="td-breadcrumb-area td-breadcrumb-spacing mb-55">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="td-breadcrumb-wrap text-center">
                                    <span className="subtitle d-inline-block mb-15  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">BRAND IDENTITY AND WEB DEVELOPMENT</span>
                                    <h2 className="td-section-page-title mb-85  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">Unique visual identity to
                                        bring <span> in digital agency</span></h2>
                                </div>
                                <div className="td-portfolio-details-info  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Published</h5>
                                        <span className="dates">11 December 2023</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Country</h5>
                                        <span className="dates"> United kingdom</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Industry</h5>
                                        <span className="dates">Web Development</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Website</h5>
                                        <span className="dates">parodydesign.com</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-portfolio-area">
                    <img src={thumb} alt=""/>
                </div>
                <div className="td-portfolio-brand-view pt-150 pb-90">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-7">
                                <div className="td-portfolio-brand-title-wrap mb-30">
                                    <h2 className="td-section-page-title">Brand <span>overview</span></h2>
                                    <div className="td-portfolio-brand-dates pt-155 mb-140">
                                        <img className="mb-15" src={text} alt=""/>
                                        <p><span>Awards - </span> site of the day 2020</p>
                                    </div>
                                    <h2 className="td-portfolio-brand-bigtext mb-0">Parody agency </h2>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="td-portfolio-brand-content mb-30">
                                    <p className="mb-65">We are excited for our work and how it positively impacts
                                        With  over 12 years of experience we have constantly
                                        providing solutions. We are committed to deliver
                                        digital media solutions from web  design</p>
                                    <div className="td-portfolio-brand-list pb-125">
                                        <h5 className="td-portfolio-brand-list-title">Branding and identity</h5>
                                        <div className="td-portfolio-brand-list-border mt-20 mb-20"></div>
                                        <h5 className="td-portfolio-brand-list-title">Websites and digital platforms</h5>
                                        <div className="td-portfolio-brand-list-border mt-20 mb-20"></div>
                                        <h5 className="td-portfolio-brand-list-title">Content strategy for social media</h5>
                                        <div className="td-portfolio-brand-list-border mt-20"></div>
                                    </div>
                                    <h5 className="td-portfolio-brand-list-title mb-20">About development agency</h5>
                                    <p>Google has said for years that the most important single factor to them  is high quality content. Now more than
                                        ever, they have the ability.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-portfolio-area">
                    <div className="container-fluid container-1530">
                        <div className="row">
                            <div className="col-12">
                                <div className="td-portfolio-details-thumb">
                                    <img className="w-100" src={thumb_2} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                 <div className="td-portfolio-identity-area pt-120 pb-160">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="td-portfolio-identity-title mb-85">
                                    <h2 className="td-section-page-title">Visual Identity</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <span className="td-portfolio-identity-subtitle">An introduction</span>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="td-portfolio-identity-content pb-105">
                                    <h5 className="mb-30">Creative agencies are known for their ability to think outside the box, offering fresh, innovative solutions to clients' marketing and branding needs. Many creative agencies focus on specific industries.</h5>
                                    <p>The opening of the new St. Regis hotel in Venice created the need for a web experience to support the opening activities. It was our job to translate an atmosphere of great subtlety and refinement, into a one-of-a-kind digital experience. We were tasked to create a one-page website that needed to
                                        express these traits.</p>
                                </div>
                            </div>
                        </div>
                        <SwipperPortfolio />
                    </div>
                 </div>
            </main>
            <Footer />

        </div>
    </div>
    </>
  );
}

export default Home;
