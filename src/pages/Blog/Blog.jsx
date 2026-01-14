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

import cta1 from "../../assets/img/cta/cta.png";

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
                                        <span className="td-blog-bigthumb-dates  wow fadeInLeft" data-wow-delay=".5s" data-wow-duration="1s">JAN<br/> 30</span>
                                        <div className="td-blog-bigthumb-content  wow fadeInLeft" data-wow-delay=".7s" data-wow-duration="1s">
                                            <h2 className="td-blog-bigthumb-title">Studio créatif, nous réalisons des solutions sur mesure.</h2>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Notre planification stratégique garantit que la vision de votre marque 
                                            s’aligne sur les opportunités du marché.</a></h3>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Le CSS border-image, bien que complexe, 
                                            offre des possibilités incroyables et créatives, parfaites pour une agence de design web souhaitant 
                                            apporter des détails uniques et percutants à ses projets.</a></h3>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Grâce à notre planification stratégique, 
                                            la vision de votre marque rencontre parfaitement les opportunités du marché.</a></h3>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Développement de campagnes publicitaires sur 
                                            les supports numériques, imprimés, télévisés ou autres plateformes médiatiques.</a></h3>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Conception et développement de sites web et d’applications 
                                            pour répondre aux besoins des entreprises</a></h3>
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
                                        <h3 className="td-blog-title mb-30"><a href="blog-details.html">Nous nous concentrons sur la promotion de 
                                            produits et services à travers les médias traditionnels et digitaux.</a></h3>
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
                  <div
                    className="td-cta-wrap p-relative z-index-1 text-center pt-135 pb-135 include-bg"
                    data-background="assets/img/cta/bg.jpg"
                  >
                    <img
                      className="td-cta-shape d-none d-xl-block"
                      src={cta1}
                      alt=""
                    />
                    <h2 className="title p-relative d-inline-block">
                     
                      <Link className="td-text-invert" to="/contact">
                        VOUS AVEZ
                        <br />
                        DES PROJETS
                        <br />
                        EN TÊTE
                      </Link>
                    </h2>

                    <div
                      className="td-btn-group mb-35"
                      style={{
                        padding: "2% 3% 14% 20%",
                      }}
                    >
                      <Link className="td-btn-circle" to="/contact">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                      <Link className="td-btn-2 td-btn-primary" to="/contact">
                        Demander un devis
                      </Link>
                      <Link className="td-btn-circle" to="/contact">
                        <i className="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
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
