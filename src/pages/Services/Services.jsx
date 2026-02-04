//imports
import { Link } from "react-router-dom";

// ASSETS
import hero2 from "../../assets/video/hero2.mp4";
import thumb from "../../assets/img/service/details/thumb.jpg";
import thumb2 from "../../assets/img/service/details/thumb-2.jpg";
import thumb3 from "../../assets/img/service/details/thumb-3.jpg";
import thumb4 from "../../assets/img/service/details/thumb-4.jpg";

import logo1 from "../../assets/img/brand/brand-7/logo-1.png";
import logo2 from "../../assets/img/brand/brand-7/logo-2.png";
import logo3 from "../../assets/img/brand/brand-7/logo-3.png";
import logo4 from "../../assets/img/brand/brand-7/logo-4.png";
import logo5 from "../../assets/img/brand/brand-7/logo-5.png";
import logo6 from "../../assets/img/brand/brand-7/logo-6.png";
import logo7 from "../../assets/img/brand/brand-7/logo-7.png";
import logo8 from "../../assets/img/brand/brand-7/logo-8.png";
import logo9 from "../../assets/img/brand/brand-7/logo-9.png";
import logo10 from "../../assets/img/brand/brand-7/logo-10.png";
import logo11 from "../../assets/img/brand/brand-7/logo-11.png";
import logo12 from "../../assets/img/brand/brand-7/logo-12.png";
import logo13 from "../../assets/img/brand/brand-7/logo-13.png";
import logo14 from "../../assets/img/brand/brand-7/logo-14.png";
import logo15 from "../../assets/img/brand/brand-7/logo-15.png";
import logo16 from "../../assets/img/brand/brand-7/logo-16.png";

// COMPONENTS
import Footer from "./../../layouts/Footer/Footer";
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
import ServicePin from "../../components/ServicePin";


import ClientReview from "../../components/ClientReview";
import Faq from "../../components/Faq";

import Header from "./../../layouts/Header/Header";

function Home() {
  return (
    <>
          <Header />
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
      <ServicePin />

    <div id="smooth-wrapper">
        <div id="smooth-content">
            <main>
                <div className="td-breadcrumb-area td-breadcrumb-spacing mb-75">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9">
                                <div className="td-breadcrumb-wrap">
                                    <span className="subtitle d-inline-block mb-15  wow fadeInLeft" data-wow-delay=".4s"
                                        data-wow-duration="1s">MEILLEUR SERVICE FOURNI</span>
                                    <h2 className="td-section-page-title mb-35  wow fadeInLeft" data-wow-delay=".7s"
                                        data-wow-duration="1s">Découvrez <br/> le <span>meilleur service </span></h2>
                                    <p className="text  wow fadeInLeft" data-wow-delay=".9s" data-wow-duration="1s">Offrez à
                                        votre entreprise l’excellence qu’elle mérite.
                                        Grâce à notre approche innovante et personnalisée, nous transformons vos idées
                                        en solutions efficaces, tout en captant
                                        l’attention de votre audience et en renforçant votre image de marque.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-service-main-area pb-125">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="td-service-main-bigthumb fix td-rounded-10">
                                    <video autoPlay muted loop playsInline
                                        style={{width: "100%", height: "auto", objectFit: "cover",}}>
                                        <source src={hero2} type="video/mp4"/>
                                        Votre navigateur ne supporte pas la vidéo.
                                    </video>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-9">
                                <div className="td-service-main-content text-center pt-140 mb-60  wow fadeInUp"
                                    data-wow-delay=".5s" data-wow-duration="1s">
                                    <span className="mb-25 d-inline-block">// Qui nous sommes</span>
                                    <h2>Nous proposons des idées brillantes pour aider
                                        votre startup à se développer, en construisant
                                        votre image de marque avec précision.</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="td-service-main-expreance mb-30  wow fadeInUp" data-wow-delay=".4s"
                                    data-wow-duration="1s">
                                    <h2 className="expreance mb-0" style={{color: "#e26f57",}}>17</h2>
                                    <span className="year">ANNÉES D’EXPÉRIENCE PROFESSIONNELLE</span>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="td-service-main-strategy-wrap ml-50">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".6s"
                                            data-wow-duration="1s">
                                            <div className="td-service-main-strategy mb-40">
                                                <h3 className="title mb-20">Stratégie de marque</h3>
                                                <p className="text">Certaines définitions du marketing soulignent
                                                    la capacité du marketing à produire</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6  wow fadeInUp" data-wow-delay=".8s"
                                            data-wow-duration="1s">
                                            <div className="td-service-main-strategy mb-40">
                                                <h3 className="title mb-20">Rendez-le créatif</h3>
                                                <p className="text">Le marketing, c’est avant tout la capacité
                                                    à transformer des idées en résultats</p>
                                            </div>
                                        </div>
                                        <div className="col-12  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                            <div className="td-service-main-strategy">
                                                <p className="text">Certaines définitions du marketing mettent également en
                                                    avant sa capacité à générer de la valeur
                                                    pour les actionnaires de l’entreprise. Dans ce contexte, le
                                                    marketing peut être défini comme « le
                                                    processus de gestion visant à maximiser le rendement pour les
                                                    actionnaires ».</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-service-pin-item td-service-pin-items">
                    <div className="container-fluid p-0">
                        <div className="orange-bg td-service-pin-item-panel">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="td-service-pin-thumb">
                                        <img className="w-100" src={thumb} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                                        <div className="td-service-pin-subtitle mb-15">
                                            <span className="number">01</span>
                                            <span> Design Studio</span>
                                        </div>
                                        <h2 className="td-service-pin-title mb-30">Logos & identité de marque</h2>
                                        <div className="td-service-pin-content  ml-50">
                                            <p className="mb-40">Nous réalisons vos designs graphiques selon votre budget et
                                                vos besoins. Révélez l’image de votre<br/> marque et captez l’attention
                                                de votre audience.</p>
                                            <ul>
                                                <li>Logo Design</li>
                                                <li>Graphic identity </li>
                                                <li>Business communication</li>
                                                <li>Web design</li>
                                            </ul>
                                            <div className="td-btn-group td-btn-group-border pt-50">
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                                <a className="td-btn-2 td-btn-primary" href="service-details.html">VOIR LES
                                                    DÉTAILS</a>
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orange-bg td-service-pin-item-panel">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="td-service-pin-thumb">
                                        <img className="w-100" src={thumb2} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                                        <div className="td-service-pin-subtitle mb-15">
                                            <span className="number">02</span>
                                            <span> Conception de produit</span>
                                        </div>
                                        <h2 className="td-service-pin-title mb-30">Conception de produit</h2>
                                        <div className="td-service-pin-content  ml-50">
                                            <p className="mb-40">Nous réalisons vos designs graphiques selon votre budget et
                                                vos besoins. Révélez l’image de votre<br/> marque et captez l’attention
                                                de votre audience.</p>
                                            <ul>
                                                <li>Logo Design</li>
                                                <li>Graphic identity </li>
                                                <li>Business communication</li>
                                                <li>Web design</li>
                                            </ul>
                                            <div className="td-btn-group td-btn-group-border pt-50">
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                                <a className="td-btn-2 td-btn-primary" href="service-details.html">VOIR LES
                                                    DÉTAILS</a>
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orange-bg td-service-pin-item-panel">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="td-service-pin-thumb">
                                        <img className="w-100" src={thumb3} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                                        <div className="td-service-pin-subtitle mb-15">
                                            <span className="number">03</span>
                                            <span> Design Studio</span>
                                        </div>
                                        <h2 className="td-service-pin-title mb-30">Développement d’applications</h2>
                                        <div className="td-service-pin-content  ml-50">
                                            <p className="mb-40">Nous réalisons vos designs graphiques selon votre budget et
                                                vos besoins. Révélez l’image de votre<br/> marque et captez l’attention
                                                de votre audience.</p>
                                            <ul>
                                                <li>Logo Design</li>
                                                <li>Graphic identity </li>
                                                <li>Business communication</li>
                                                <li>Web design</li>
                                            </ul>
                                            <div className="td-btn-group td-btn-group-border pt-50">
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                                <a className="td-btn-2 td-btn-primary" href="service-details.html">VOIR LES
                                                    DÉTAILS</a>
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="orange-bg td-service-pin-item-panel">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="td-service-pin-thumb">
                                        <img className="w-100" src={thumb4} alt=""/>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="td-service-pin-content-inner pt-40 pb-40 ml-100">
                                        <div className="td-service-pin-subtitle mb-15">
                                            <span className="number">04</span>
                                            <span> Design Studio</span>
                                        </div>
                                        <h2 className="td-service-pin-title mb-30">Marketing digital</h2>
                                        <div className="td-service-pin-content  ml-50">
                                            <p className="mb-40">We create your graphic designs according to your<br/> budget
                                                and your needs. Reveal your brand image<br/> and capture your audience.
                                            </p>
                                            <ul>
                                                <li>Logo Design</li>
                                                <li>Graphic identity </li>
                                                <li>Business communication</li>
                                                <li>Web design</li>
                                            </ul>
                                            <div className="td-btn-group td-btn-group-border pt-50">
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                                <a className="td-btn-2 td-btn-primary" href="service-details.html">VOIR LES
                                                    DÉTAILS</a>
                                                <a className="td-btn-circle" href="service-details.html">
                                                    <i className="fa-solid fa-arrow-right"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="td-brands-area pt-160 pb-160">
                    <div className="container">
                        <div className="row gx-0">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo1} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo2} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo3}alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo4} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo5} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo6} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo7} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo8} alt=""/></a>
                                </div>
                            </div>
                        </div>
                        <div className="row gx-0">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo9} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo10} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo11} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo12} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo13} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo14} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo15} alt=""/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="td-brands-7-item text-center">
                                    <a href="#"><img src={logo16} alt=""/></a>
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
