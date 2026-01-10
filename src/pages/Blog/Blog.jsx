//imports
import { Link } from "react-router-dom";

// ASSETS
// import thumb from "../../assets/img/portfolio/details/thumb.jpg";
import thumb from "../../assets/img/blog/thumb.jpg";
import thumb_2 from "../../assets/img/blog/thumb-2.jpg";
import thumb_3 from "../../assets/img/blog/thumb-3.jpg";
import thumb_4 from "../../assets/img/blog/thumb-4.jpg";
import thumb_5 from "../../assets/img/blog/thumb-5.jpg";
import thumb_6 from "../../assets/img/blog/thumb-6.jpg";
import bigthumb from "../../assets/img/blog/standard/bigthumb.jpg";

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
                <div className="td-blog-bigthumb-area td-blog-bigthumb-spacing">
                    <div className="container container-1530">
                        <div className="include-bg td-blog-bigthumb-bg"
                        style={{ backgroundImage: `url(${bigthumb})` }}>
                            <div className="row">
                                <div className="col-12">
                                    <div className="td-blog-bigthumb-wrap">
                                        <span className="td-blog-bigthumb-dates  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">NOV<br/> 14</span>
                                        <div className="td-blog-bigthumb-content  wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1s">
                                            <h2 className="td-blog-bigthumb-title">We are a creative studio that
                                                specializes in providing</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-blog-area pt-140 pb-100">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Our strategic planning ensures
                                            your brand's vision aligns with
                                            market opportunities</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb_2} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">The complex but awesome CSS
                                            border-image proper for web
                                            design company</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb_3} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">The complex but awesome CSS
                                            border-image proper for web
                                            design company</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb_4} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Developing advertising campaign
                                            across digital, print, TV, or other
                                            media platforms.</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb_5} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Designing and building websites
                                            and applications to ensure
                                            businesses</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                <div className="td-blog-wrap mb-60">
                                    <div className="td-blog-thumb fix mb-25">
                                        <img className="w-100" src={thumb_6} alt=""/>
                                    </div>
                                    <div className="td-blog-content">
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Focus on promoting products or
                                            services through traditional and
                                            digital media.</a></h3>
                                        <div className="td-blog-cetagory d-flex align-items-center">
                                            <span className="cetagory">Development</span>
                                            <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                            <span className="dates">August 12, 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-cta-area">
                    <div className="container">
                        <div className="col-lg-12">
                            <div className="td-cta-wrap p-relative z-index-1 text-center pt-135 pb-135 include-bg" data-background="assets/img/cta/bg.jpg">
                                {/* <img className="td-cta-shape d-none d-xl-block" src="assets/img/cta/cta.png" alt=""/> */}
                                <h2 className="title p-relative d-inline-block">
                                    {/* <img className="td-cta-shape-2 d-none d-md-block" src="assets/img/cta/cta-2.png" alt=""/> */}
                                    <a className="td-text-invert" href="contact.html">
                                        HAVE A<br/>
                                        PROJECTS<br/>
                                        IN MINDS
                                    </a>
                                </h2>
                            </div>
                        </div>
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
