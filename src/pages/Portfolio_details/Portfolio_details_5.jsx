//imports
import { Link } from "react-router-dom";

// ASSETS
import thumb from "../../assets/img/portfolio/details/thumb.jpg";
// import text from "../../assets/img/portfolio/details/text.png";
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
                                    <span className="subtitle d-inline-block mb-15  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">IDENTITE DE MARQUE AND DEVELOPPEMENT WEB</span>
                                    <h2 className="td-section-page-title mb-85  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">Identité visuelle unique pour
                                        donner vie à… <span> une agence digitale</span></h2>
                                </div>
                                <div className="td-portfolio-details-info  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Publié</h5>
                                        <span className="dates">11 December 2025</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Pays</h5>
                                        <span className="dates"> France</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Domaine</h5>
                                        <span className="dates">Communication 360°</span>
                                    </div>
                                    <div className="td-portfolio-details-info-item mb-20">
                                        <h5 className="titles">Site web</h5>
                                        <span className="dates">soon-agency.com/</span>
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
                                    <h2 className="td-section-page-title">Aperçu de <span>la marque</span></h2>
                                    <div className="td-portfolio-brand-dates pt-155 mb-140">
                                        {/* <img className="mb-15" src={text} alt=""/> */}
                                        {/* <p><span>SoonAgency - </span> site 2026</p> */}
                                    </div>
                                    <h2 className="td-portfolio-brand-bigtext mb-0">Soon agency </h2>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-5">
                                <div className="td-portfolio-brand-content mb-30">
                                    <p className="mb-65">Nous sommes passionnés par notre travail et par l’impact positif qu’il génère.
Forts de plus de 12 ans d’expérience, nous fournissons continuellement des solutions.
Nous nous engageons à offrir des solutions de médias digitaux, allant du web design…</p>
                                    <div className="td-portfolio-brand-list pb-125">
                                        <h5 className="td-portfolio-brand-list-title">Branding & identité</h5>
                                        <div className="td-portfolio-brand-list-border mt-20 mb-20"></div>
                                        <h5 className="td-portfolio-brand-list-title">Sites web & plateformes digitales</h5>
                                        <div className="td-portfolio-brand-list-border mt-20 mb-20"></div>
                                        <h5 className="td-portfolio-brand-list-title">Stratégie de contenu pour les réseaux sociaux</h5>
                                        <div className="td-portfolio-brand-list-border mt-20"></div>
                                    </div>
                                    <h5 className="td-portfolio-brand-list-title mb-20">À propos de l’agence </h5>
                                    <p>Google affirme depuis des années que le facteur le plus important pour eux est un contenu de haute qualité. Aujourd’hui plus que jamais, ils en ont la capacité.</p>
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
                                    <h2 className="td-section-page-title">Identité visuelle</h2>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <span className="td-portfolio-identity-subtitle">Une introduction</span>
                            </div>
                            <div className="col-xl-6 col-lg-8">
                                <div className="td-portfolio-identity-content pb-105">
                                    <h5 className="mb-30">Les agences créatives sont reconnues pour leur capacité à penser différemment et à proposer des solutions innovantes aux besoins marketing et en branding de leurs clients. De nombreuses agences créatives se spécialisent dans certains secteurs.</h5>
                                    <p>L’ouverture du nouvel hôtel St. Regis à Venise a nécessité une expérience web pour accompagner les activités liées à l’inauguration. Notre mission était de traduire une atmosphère de grande subtilité et raffinement en une expérience digitale unique. Nous avons été chargés de créer un site web d’une seule page devant exprimer ces caractéristiques.</p>
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
