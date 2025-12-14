//imports
import { Link } from "react-router-dom";

// ASSETS
import shapeImg from "../../assets/img/hero/shape.png";
import thumb1 from "../../assets/img/hero/thumb.jpg";
import thumb2 from "../../assets/img/hero/thumb-2.jpg";
import bgThumb3 from "../../assets/img/hero/bg-thumb3.jpg";
import thumbAbout from "../../assets/img/about/thumb.jpg";
import shapeAbout from "../../assets/img/about/shape.png";
import thumb2About from "../../assets/img/about/thumb-2.jpg";
import thumb3About from "../../assets/img/about/site-web.jpg";
import photoHeader from "../../assets/img/body/image.png";

import product1 from "../../assets/img/project/product.jpg";
import product2 from "../../assets/img/project/product-2.jpg";
import product3 from "../../assets/img/project/product-3.jpg";
import product4 from "../../assets/img/project/product-4.jpg";
import product5 from "../../assets/img/project/product-5.jpg";
import thumbProcess from "../../assets/img/process/thumb.jpg";
import user from "../../assets/img/testimonial/user.png";
import thumbTest from "../../assets/img/testimonial/thumb.jpg";

import logoBrand1 from "../../assets/img/brand/westfield-blanc-400px.png";
import logoBrand2 from "../../assets/img/brand/viparis-4.png";
import logoBrand3 from "../../assets/img/brand/sea-4.png";
import logoBrand4 from "../../assets/img/brand/covivo-4.png";
import logoBrand5 from "../../assets/img/brand/disney-blnc-400px.png";
import logoBrand6 from "../../assets/img/brand/canal+-400px.png";

import logoBrand7 from "../../assets/img/brand/armani-400px.png";
import logoBrand8 from "../../assets/img/brand/victoria-400px.png";
import logoBrand9 from "../../assets/img/brand/bic-400px.png";
import logoBrand10 from "../../assets/img/brand/poly-400px.png";
import logoBrand11 from "../../assets/img/brand/fives-400px.png";
import logoBrand12 from "../../assets/img/brand/fenty-400px.png";

import logoBrand13 from "../../assets/img/brand/b&b-400px.png";
import logoBrand14 from "../../assets/img/brand/radisson-400px.png";
import logoBrand15 from "../../assets/img/brand/leo&go-400px.png";
import logoBrand16 from "../../assets/img/brand/val-400px.png";
import logoBrand17 from "../../assets/img/brand/fib-400px.png";
import logoBrand18 from "../../assets/img/brand/ww-blnc-400px.png";

import thumBlog1 from "../../assets/img/blog/thumb.jpg";
import thumBlog2 from "../../assets/img/blog/thumb-2.jpg";
import thumBlog3 from "../../assets/img/blog/thumb-3.jpg";
import photoColor from "../../assets/img/blog/8770c5cd3ed2382fc5beb57d4cf0c022343fceb0.jpg";

import bgImage from "../../assets/img/project/bg.jpg";

import cta1 from "../../assets/img/cta/cta.png";
import cta2 from "../../assets/img/cta/cta-2.png";
import soonWhiteLogo from "../../assets/img/logo/WHITH3.webp";

import heroVideo from "../../assets/video/hero3.mp4";
import heroVideo2 from "../../assets/video/hero2.mp4";
import bgThumb23 from "../../assets/video/Show_reel_1920x1080_33s_01.mp4";
import showReel01 from "../../assets/video/bg-thumb3.mp4";
import videoSource from "../../assets/video/AdobeStock_1729280486_Video_HD_Preview.mov";

// COMPONENTS
// import Odometer from "../../components/Odometer";
// import Header from "./../../layouts/Header/Header";
import Footer from "./../../layouts/Footer/Footer";
import Loader from "../../components/Loader";
import StickyHeader from "../../components/StickyHeader";
import MouseFollower from "../../components/MouseFollower";
import ScrollToTop from "../../components/ScrollToTop";
import SearchPopup from "../../components/SearchPopup";
import SmoothScroll from "../../components/SmoothScroll";
import TextAnimations from "../../components/TextAnimations";
import HeroTextSlider from "../../components/HeroTextSlider";
import WowInit from "../../components/WowInit";
import BackgroundHandler from "../../components/BackgroundHandler";
import FixedTitleAnimation from "../../components/FixedTitleAnimation";
import TestimonialSlider from "../../components/TestimonialSlider";
import BrandSlider from "../../components/BrandSlider";
import ScrollToTopAutomatic from "../../components/ScrollToTopAutomatic";
import AutoCloseMenu from "../../components/AutoCloseMenu";
import ClientReview from "../../components/ClientReview";
import Faq from "../../components/Faq";
// import GoogleReviews from "../../components/GoogleReviews";
// import AutoVideo from "../../components/AutoVideo";

import "../../assets/css/main.css";
import "../../assets/css/animate.css";

function Home() {
  return (
    <>
      <ScrollToTopAutomatic />
      <Loader />
      <MouseFollower />
      <ScrollToTop />
      <SearchPopup />
      <TextAnimations />
      <HeroTextSlider />
      <BackgroundHandler />
      <FixedTitleAnimation />
      <TestimonialSlider />
      <BrandSlider />
      <StickyHeader />
      <SmoothScroll />
      <WowInit />
      <AutoCloseMenu />

      <div className="search__popup">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="search__wrapper">
                <div className="search__close">
                  <button type="button" className="search-close-btn">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17 1L1 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                      <path
                        d="M1 1L17 17"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="search__form">
                  <form action="#">
                    <div className="search__input">
                      <input
                        className="search-input-field"
                        type="text"
                        placeholder="Type keywords here"
                      />
                      <span className="search-focus-border"></span>
                      <button type="submit">
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.55 18.1C14.272 18.1 18.1 14.272 18.1 9.55C18.1 4.82797 14.272 1 9.55 1C4.82797 1 1 4.82797 1 9.55C1 14.272 4.82797 18.1 9.55 18.1Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                          <path
                            d="M19.0002 19.0002L17.2002 17.2002"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="search-popup-overlay"></div>

      {/* <Header /> */}

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div
              style={{ paddingBottom: "0px", backgroundColor: "#e26F57", height: "2016px",
                borderBottomRightRadius: "141px"}}
              className="td-hero-area td-hero-spacing p-relative fix z-index-1"
            >
              {/* <img className="td-hero-shape p-absolute" src={shapeImg} alt="" /> */}
              <div className="container">
                <div
                  style={{ marginRight: "-31%" }}
                  className="row justify-content-center"
                >
                  <header>
                    {/* <div class="col-lg-4 col-md-4 col-sm-4 col-2">
                      <div class="td-header-right text-end">
                        
                      </div>
                    </div> */}

                    <div
                      style={{
                        width: "100%",
                        paddingLeft: "40px",
                        display: "flex",
                        alignItems: "center",
                        fontFamily:
                          "'Aboreto', 'SF Pro', 'Plus Jakarta Sans', sans-serif",
                        position: "fixed",
                        top: "20px",
                        left: 0,
                        zIndex: 10000,
                        backgroundColor: "transparent",
                      }}
                    >
                      {/* Logo à gauche */}
                      <Link to="/" style={{ marginRight: "20px" }}>
                        <img
                          src={soonWhiteLogo}
                          alt="Logo Soon"
                          style={{ width: "96px" }}
                        />
                      </Link>

                      {/* Menu */}
                      {["ACCUEIL", "SERVICES", "À PROPOS"].map(
                        (item, index) => (
                          <button
                            key={index}
                            style={{
                              padding: "10px 20px",
                              border: "none",
                              borderRadius: 0,
                              backgroundColor: "transparent",
                              color: "white",
                              fontWeight: 700,
                              fontFamily:
                                "'Aboreto', 'SF Pro', 'Plus Jakarta Sans', sans-serif",
                              fontSize: 16,
                              textTransform: "uppercase",
                              cursor: "pointer",
                              transition: "0.3s",
                            }}
                            onMouseEnter={(e) =>
                              (e.target.style.backgroundColor =
                                "rgba(255,255,255,0.2)")
                            }
                            onMouseLeave={(e) =>
                              (e.target.style.backgroundColor = "transparent")
                            }
                          >
                            {item}
                          </button>
                        )
                      )}
                      <button
                        class="td-header-search search-open-btn"
                        style={{ marginLeft: "58%" }}
                      >
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.00004 17.0001C13.4183 17.0001 17.0001 13.4183 17.0001 9.00004C17.0001 4.58174 13.4183 1 9.00004 1C4.58174 1 1 4.58174 1 9.00004C1 13.4183 4.58174 17.0001 9.00004 17.0001Z"
                            stroke="#ffffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.0004 18.9999L14.6504 14.6499"
                            stroke="#ffffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                      <a
                        href="contact.html"
                        class="td-btn td-btn-lg d-none d-md-inline-block td-btn-switch-animation ml-10"
                        style = {{borderColor: "white"}}
                      >
                        <span class="d-flex align-items-center justify-content-center">
                          <span style={{ color: "white" }} class="btn-text">
                            SEE YOU SOON ?
                          </span>
                          <span class="btn-icon">
                            <i
                              style={{ color: "white" }}
                              class="fa-sharp fa-solid fa-angle-right"
                            ></i>
                          </span>
                          <span class="btn-icon">
                            <i
                              style={{ color: "white" }}
                              class="fa-sharp fa-solid fa-angle-right"
                            ></i>
                          </span>
                        </span>
                      </a>
                    </div>
                  </header>

                  <div className="col-lg-10">
                    <div className="td-hero-content">
                      <div
                        className="td-hero-title text-center  wow fadeInU "
                        data-wow-delay=".5s"
                        data-wow-duration="1s"
                      >
                        <div
                          style={{
                            color: "white",
                            position: "absolute",
                            fontSize: 70,
                            fontFamily: "Aboreto, sans-serif",
                            fontWeight: 400,
                            top: "160px", // supprime l’espace après 50
                            left: "48%",
                            lineHeight: "59px",
                            wordWrap: "break-word",
                            zIndex: "10000",
                          }}
                        >
                          Making your
                        </div>
                        <div
                          style={{
                            color: "white",
                            position: "absolute",
                            fontSize: 70,
                            fontFamily: "Aboreto, sans-serif",
                            fontWeight: 400,
                            top: "250px", // supprime l’espace après 50
                            left: "48%",
                            lineHeight: "59px",
                            wordWrap: "break-word",
                            zIndex: "10000",
                          }}
                        >
                          Brand Fly
                        </div>
                        <video
                          className="mr-30 d-none d-sm-block"
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            position: "absolute",
                            top: "97px",
                            left: 1100,
                            width: "96vh",
                            height: "92vh",
                            minWidth: "50%",
                            minHeight: "60vh",
                            objectFit: "cover",
                            margin: 0,
                            padding: 0,
                            display: "block",
                            borderTopLeftRadius: "800px",
                            zIndex: "",
                          }}
                        >
                          <source src={showReel01} type="video/mp4" />
                          Ton navigateur ne supporte pas la vidéo.
                        </video>
                        <img
                          src={photoColor}
                          alt="Header"
                          style={{
                            width: "170px",
                            borderRadius: "142px",
                            position: "absolute",
                            zIndex: "9000",
                            top: "34%", // supprime l’espace après 50
                            left: "55%", // supprime l’espace après 50
                            transform: "translate(-50%, -50%)", // supprime les espaces
                          }}
                        />

                        <div
                          style={{
                            position: "absolute", // positionné par rapport à son parent
                            top: "500px", // centre vertical approximatif
                            left: "80px", // distance depuis le bord droit
                            transform: "translateY(-50%)", // centre exact verticalement
                            maxWidth: "400px", // limite la largeur du texte
                            color: "white",
                            fontSize: 28,
                            fontFamily:
                              " 'Aboreto', 'SF Pro', 'Plus Jakarta Sans', sans-serif",
                            fontWeight: 400,
                            lineHeight: "32px",
                            wordWrap: "break-word",
                            textTransform: "uppercase", // majuscules
                            textAlign: "left", // aligné à gauche         // texte aligné à droite à l’intérieur du bloc
                          }}
                        >
                          notre espace créatif est un véritable laboratoire
                          d’idées où chaque projet prend vie
                        </div>
                          <div
                            style={{
                              position: "absolute", // positionné par rapport à son parent
                              top: "31%", // centre vertical approximatif
                              left: "80px", // distance depuis le bord droit
                              transform: "translateY(-50%)", // centre exact verticalement
                              maxWidth: "400px", // limite la largeur du texte
                              color: "white",
                              fontSize: 15,
                              fontFamily: "SF Pro, sans-serif",
                              fontWeight: 400,
                              lineHeight: "20px",
                              wordWrap: "break-word",
                              fontFamily: " 'SF Pro', sans-serif",
                              textAlign: "left",
                            }}
                          >
                            Entre briefing précis, brainstorming intense,
                            visuels inspirants, croquis et maquettes, nous
                            explorons sans cesse de nouvelles pistes pour créer
                            des concepts uniques et percutants.
                          </div>
                          <div
                            className="td-btn-group mb-35"
                            style={{
                              position: "absolute",
                              marginLeft: "-19%",
                              marginTop: "26%"
                            }}
                          >
                            <a className="td-btn-circle" style = {{backgroundColor: "white",
                              color: "#e26F57"}} href="about.html">
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                            <a
                              className="td-btn-2 td-btn-primary"
                              href="about.html"
                              style = {{background: "white",
                                color: "#e26F57"
                              }}
                            >
                              Demander un devis
                            </a>
                            <a className="td-btn-circle"
                            style = {{backgroundColor: "white",
                              color: "#e26F57"
                            }} href="about.html">
                              <i className="fa-solid fa-arrow-right"></i>
                            </a>
                          </div>

                        {/* <div
                          style={{
                            position: "fixed",
                            top: "800px",
                            left: "80px",
                            width: "200px",
                            height: "60px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: "1px solid white",
                            borderRadius: "30px",
                            backgroundColor: "transparent",
                            cursor: "pointer",
                            zIndex: 10000,
                            textAlign: "center",
                          }}
                        >
                          <span
                            style={{
                              color: "white",
                              Top: "80px",
                              fontSize: 16,
                              fontFamily: "'Plus Jakarta Sans', sans-serif", // <- ici
                              fontWeight: 700,
                              fontFamily:
                                " 'Aboreto', 'SF Pro', 'Plus Jakarta Sans', sans-serif",

                              textTransform: "uppercase",
                              lineHeight: "26px",
                              wordWrap: "break-word",
                            }}
                          >
                            DEMANDE DE DEVIS
                          </span>
                        </div> */}

                        <div>
                          {/* section à developer

                          <div
                            style={{ position: "relative", padding: "1rem" }}
                          >
                            <h2
                              style={{
                                textAlign: "right",
                                color: "black",
                                fontWeight: "700",
                                marginBottom: "1rem",
                              }}
                            >
                              MAKE YOUR BRAND FLY
                            </h2> */}

                          <div
                            style={{
                              maxWidth: "800px",
                              margin: "0 auto",
                              marginLeft: "61%",
                            }}
                          >
                            {/* 🖼️ Image avec forme d’enroulement */}
                            {/* <img
                                src={photoHeader}
                                alt="Header"
                                style={{
                                  width: "250px",
                                  float: "left",
                                  borderTopRightRadius: "50px",
                                  //borderBottomRightRadius: "50px",
                                  // borderBottomLeftRadius: "50px",
                                  objectFit: "cover",
                                  marginRight: "20px",
                                  //marginBottom: "20px",
                                  shapeOutside: "rectangle(50%)",
                                  clipPath: "rectangle(50%)",
                                }}
                              />

                              <p
                                style={{
                                  textAlign: "justify",
                                  lineHeight: "1.6",
                                  color: "#333",
                                  fontSize: "1rem",
                                }}
                              >
                                Vous cherchez une agence de communication
                                digitale qui ne se contente pas du statu quo ?
                                Chez <strong>Soon</strong>, nous faisons les
                                choses autrement. Nous repoussons sans cesse les
                                limites de la créativité pour vous offrir des
                                solutions innovantes, sur-mesure et parfaitement
                                adaptées à votre marque. Notre approche va
                                au-delà de l’esthétique :nous combinons
                                stratégie, design et technologie pour générer
                                des résultats concrets et mesurables, tout en
                                respectant des délais records. Que vous
                                souhaitiez booster votre visibilité, dynamiser
                                votre image ou transformer vos idées en projets
                                impactants, Soon est votre partenaire pour
                                donner des ailes à votre marque. L’équipe{" "}
                                <strong>Soon</strong> met son savoir-faire au
                                service de votre vision, en vous accompagnant à
                                chaque étape du processus créatif, de la
                                réflexion stratégique à la concrétisation de
                                projets audacieux. Avec notre regard neuf et
                                notre énergie, nous donnons vie à vos idées pour
                                qu’elles marquent durablement les esprits.
                              </p>
                              <img
                                className="td-live-anim-spin"
                                style={{
                                  top: "200",
                                  margin: "13px 33px 39px 20px",
                                }}
                                src={shapeAbout}
                                alt=""
                              /> */}

                            <div style={{ clear: "both" }}></div>
                          </div>
                          {/* </div> */}

                          {/* <div style={{ position: "relative", right:"50px", }}>
                            <h2 style={{ textAlign: 'right', color: 'black', }} >MAKE YOUR BRAND FLY</h2>
                            <img
                              style={{
                                width: "178px",
                                bottom: "500px",
                                float: "left",
                                margin: "127px 20px 20px 635px",
                                sharpeMargin: "5rem",
                                borderTopRightRadius: "50px",
                                marginLeft: "700px",
                                marginRight: "20px",
                                marginBottom: "20px",
                                objectFit: "cover",
                              }}
                              src={photoHeader}
                              alt=""
                            />

                            <p className="mb-45" style={{ textAlign: 'left', marginLeft: 'auto', width: '413px', lineHeight: "1.6", }} >
                              Vous cherchez une agence de communication digitale qui ne se contente pas
                              du statu quo ?
                              Chez Soon, nous faisons les choses autrement.
                              Nous repoussons sans cesse les limites de la créativité pour
                              vous offrir des solutions innovantes, sur-mesure et parfaitement
                              adaptées à votre marque.
                              Notre approche va au-delà de l’esthétique :
                              nous combinons stratégie, design et technologie pour
                              générer des résultats concrets et mesurables,
                              tout en respectant des délais records.
                              Que vous souhaitiez booster votre visibilité,
                              dynamiser votre image ou transformer vos idées en projets impactants,
                              Soon est votre partenaire pour donner des ailes à votre marque.

                            </p>
                            <img
                              className="td-live-anim-spin"
                              style={{ top: '200', margin: "13px 33px 39px 20px", }}
                              src={shapeAbout}
                              alt=""
                            />
                          </div> */}
                        </div>
                        <h2 className="title mb-0 d-flex align-items-center justify-content-center">
                          {/* <video
                            className="mr-30 d-none d-sm-block"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                              width: "178px",
                              borderRadius: "30px",
                              marginRight: "50px",
                            }}
                          > */}
                          {/* <source src={heroVideo} type="video/mp4" />
                            Ton navigateur ne supporte pas la vidéo.
                          </video> */}
                          {/* BRAND */}
                          {/* <video
                            className="mr-30 d-none d-sm-block"
                            autoPlay
                            muted
                            loop
                            playsInline
                            style={{
                              width: "178px",
                              borderRadius: "30px",
                              marginLeft: "50px",
                            }}
                          >
                            <source src={heroVideo2} type="video/mp4" />
                            Ton navigateur ne supporte pas la vidéo.
                          </video> */}
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="td-hero-text-slide  wow fadeInUp"
                data-wow-delay=".7s"
                data-wow-duration="1s"
              >
                {/* <div className="container-fluid">
                  <div className="row">
                    <div className="swiper-container td-hero-text-slide-active">
                      <div className="swiper-wrapper slide-transtion">
                        <div className="swiper-slide">
                          <div>
                            <h2 className="td-hero-bigtext">creative </h2>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div>
                            <h2 className="td-hero-bigtext ">studio </h2>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div>
                            <h2 className="td-hero-bigtext">creative </h2>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div>
                            <h2 className="td-hero-bigtext ">studio </h2>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
              <br></br>
              <h1 style={{ justifyContent: "right" }}></h1>
              <div
                style={{
                  position: "relative",
                  width: "100vw",
                  height: "16.6vw",
                  overflow: "hidden",
                  zIndex: -1,
                  // backgroundColor: "#ffff", // pour être sûr qu'il n'y ait rien derrière
                }}
              ></div>
              <div className=" ">
                <div className="">
                  <div className="">
                    <div className="td-hero-bottom-thumb">
                      {/* <video
                        data-speed="0.6"
                        className="w-100 round-2"
                        autoPlay
                        muted
                        loop
                        playsInline
                        style={{
                          position: "absolute",
                          top: "5000px",
                          left: 0,
                          width: "100vw", // la vidéo prend toute la largeur de l’écran
                          height: "100vh", // et toute la hauteur
                          objectFit: "cover",
                          borderTopRightRadius: "142px",
                          borderBottomRightRadius: "142px",
                          overflow: "hidden",
                        }}
                      >
                        <source src={bgThumb23} type="video/mp4" />
                        Ton navigateur ne supporte pas la vidéo.
                      </video> */}

                      {/* <img style={{ width: '100%', height: '100%', transform: 'rotate(-90deg)', transformOrigin: 'top left', borderRadius: 138 }} src={photoColor} /> */}
                    </div>
                  </div>
                </div>
              </div>

              {/* Vidéo après le bouton */}
              <div style={{ width: "100%", marginTop: "-8px" }}>
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={{
                    width: "100%",
                    height: "auto",
                    display: "block",
                    objectFit: "cover",
                    borderTopLeftRadius: "142px",
                    display: "flex",
                    borderBottomRightRadius: "142px",
                  }}
                >
                  <source src={bgThumb23} type="video/mp4" />
                  Votre navigateur ne supporte pas la vidéo.
                </video>
              </div>

              
            </div>

            <div style = {{marginTop: "5%"}} className="td-about-area">
            <div className="pb-60">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <div
                        className="td-hero-feature"
                        style={{
                          padding: "30px",
                        }}
                      >
                        <ul>
                          <li>
                            <span>
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.1129 11.043C21.8064 11.043 19.2903 12.7204 13.2097 12.8952C17.4731 8.59678 20.5833 8.14248 22.2607 6.46506C22.6452 6.08065 22.8199 5.62635 22.8199 5.24194C22.8199 4.19355 21.8064 3.21506 20.828 3.21506C20.3737 3.21506 19.8495 3.38979 19.465 3.7742C17.8575 5.41667 17.2285 8.35215 13.1048 12.7903C13.0699 6.70968 14.957 4.12366 14.957 1.85215C14.957 0.594087 14.0134 0 13 0C12.0564 0 11.043 0.594087 11.043 1.8871C11.043 4.12366 12.7204 6.70968 12.8952 12.7903C8.7715 8.42205 8.21236 5.41667 6.56989 3.7742C6.15054 3.38979 5.69624 3.18011 5.24193 3.18011C4.12366 3.18011 3.18011 4.19355 3.18011 5.24194C3.18011 5.62635 3.35484 6.08065 3.73925 6.46506C5.41667 8.21237 8.52688 8.59678 12.7903 12.8952C6.74462 12.7204 4.22849 11.043 1.95699 11.043C0.663978 11.043 0 12.0565 0 13.0699C0 14.0134 0.594086 14.957 1.85215 14.957C4.22849 14.957 6.74462 13.0699 12.8253 13.0699C8.35215 17.2285 5.41667 17.8575 3.77419 19.4651C3.38978 19.8495 3.18011 20.3737 3.18011 20.828C3.18011 21.8763 4.19355 22.8199 5.24193 22.8199C5.62634 22.8199 6.08064 22.6452 6.46505 22.2608C8.14247 20.5833 8.59677 17.4731 12.8952 13.2097C12.7204 19.2903 11.043 21.8065 11.043 24.1129C11.043 25.4059 12.0564 26 13 26C14.0134 26 14.957 25.4059 14.957 24.1479C14.957 21.8065 13.0699 19.2903 13.1048 13.2097C17.4032 17.4731 17.8575 20.5833 19.5349 22.2608C19.9194 22.6452 20.3737 22.8199 20.7581 22.8199C21.8064 22.8199 22.7849 21.8065 22.7849 20.828C22.7849 20.3737 22.6102 19.8495 22.2258 19.4651C20.5833 17.8575 17.6478 17.2285 13.1747 13.0699C19.2903 13.0699 21.8064 14.957 24.1478 14.957C25.4059 14.957 26 14.0134 26 13C26 12.0565 25.4059 11.043 24.1129 11.043Z"
                                  fill="#1C1D1F"
                                />
                              </svg>
                            </span>
                            FLEXIBILITÉ & AGILITÉ
                          </li>
                          <li className="td-border"></li>
                          <li>
                            <span>
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.1129 11.043C21.8064 11.043 19.2903 12.7204 13.2097 12.8952C17.4731 8.59678 20.5833 8.14248 22.2607 6.46506C22.6452 6.08065 22.8199 5.62635 22.8199 5.24194C22.8199 4.19355 21.8064 3.21506 20.828 3.21506C20.3737 3.21506 19.8495 3.38979 19.465 3.7742C17.8575 5.41667 17.2285 8.35215 13.1048 12.7903C13.0699 6.70968 14.957 4.12366 14.957 1.85215C14.957 0.594087 14.0134 0 13 0C12.0564 0 11.043 0.594087 11.043 1.8871C11.043 4.12366 12.7204 6.70968 12.8952 12.7903C8.7715 8.42205 8.21236 5.41667 6.56989 3.7742C6.15054 3.38979 5.69624 3.18011 5.24193 3.18011C4.12366 3.18011 3.18011 4.19355 3.18011 5.24194C3.18011 5.62635 3.35484 6.08065 3.73925 6.46506C5.41667 8.21237 8.52688 8.59678 12.7903 12.8952C6.74462 12.7204 4.22849 11.043 1.95699 11.043C0.663978 11.043 0 12.0565 0 13.0699C0 14.0134 0.594086 14.957 1.85215 14.957C4.22849 14.957 6.74462 13.0699 12.8253 13.0699C8.35215 17.2285 5.41667 17.8575 3.77419 19.4651C3.38978 19.8495 3.18011 20.3737 3.18011 20.828C3.18011 21.8763 4.19355 22.8199 5.24193 22.8199C5.62634 22.8199 6.08064 22.6452 6.46505 22.2608C8.14247 20.5833 8.59677 17.4731 12.8952 13.2097C12.7204 19.2903 11.043 21.8065 11.043 24.1129C11.043 25.4059 12.0564 26 13 26C14.0134 26 14.957 25.4059 14.957 24.1479C14.957 21.8065 13.0699 19.2903 13.1048 13.2097C17.4032 17.4731 17.8575 20.5833 19.5349 22.2608C19.9194 22.6452 20.3737 22.8199 20.7581 22.8199C21.8064 22.8199 22.7849 21.8065 22.7849 20.828C22.7849 20.3737 22.6102 19.8495 22.2258 19.4651C20.5833 17.8575 17.6478 17.2285 13.1747 13.0699C19.2903 13.0699 21.8064 14.957 24.1478 14.957C25.4059 14.957 26 14.0134 26 13C26 12.0565 25.4059 11.043 24.1129 11.043Z"
                                  fill="#1C1D1F"
                                />
                              </svg>
                            </span>
                            CRÉATIVITÉ & INNOVATION
                          </li>
                          <li className="td-border"></li>
                          <li>
                            <span>
                              <svg
                                width="26"
                                height="26"
                                viewBox="0 0 26 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M24.1129 11.043C21.8064 11.043 19.2903 12.7204 13.2097 12.8952C17.4731 8.59678 20.5833 8.14248 22.2607 6.46506C22.6452 6.08065 22.8199 5.62635 22.8199 5.24194C22.8199 4.19355 21.8064 3.21506 20.828 3.21506C20.3737 3.21506 19.8495 3.38979 19.465 3.7742C17.8575 5.41667 17.2285 8.35215 13.1048 12.7903C13.0699 6.70968 14.957 4.12366 14.957 1.85215C14.957 0.594087 14.0134 0 13 0C12.0564 0 11.043 0.594087 11.043 1.8871C11.043 4.12366 12.7204 6.70968 12.8952 12.7903C8.7715 8.42205 8.21236 5.41667 6.56989 3.7742C6.15054 3.38979 5.69624 3.18011 5.24193 3.18011C4.12366 3.18011 3.18011 4.19355 3.18011 5.24194C3.18011 5.62635 3.35484 6.08065 3.73925 6.46506C5.41667 8.21237 8.52688 8.59678 12.7903 12.8952C6.74462 12.7204 4.22849 11.043 1.95699 11.043C0.663978 11.043 0 12.0565 0 13.0699C0 14.0134 0.594086 14.957 1.85215 14.957C4.22849 14.957 6.74462 13.0699 12.8253 13.0699C8.35215 17.2285 5.41667 17.8575 3.77419 19.4651C3.38978 19.8495 3.18011 20.3737 3.18011 20.828C3.18011 21.8763 4.19355 22.8199 5.24193 22.8199C5.62634 22.8199 6.08064 22.6452 6.46505 22.2608C8.14247 20.5833 8.59677 17.4731 12.8952 13.2097C12.7204 19.2903 11.043 21.8065 11.043 24.1129C11.043 25.4059 12.0564 26 13 26C14.0134 26 14.957 25.4059 14.957 24.1479C14.957 21.8065 13.0699 19.2903 13.1048 13.2097C17.4032 17.4731 17.8575 20.5833 19.5349 22.2608C19.9194 22.6452 20.3737 22.8199 20.7581 22.8199C21.8064 22.8199 22.7849 21.8065 22.7849 20.828C22.7849 20.3737 22.6102 19.8495 22.2258 19.4651C20.5833 17.8575 17.6478 17.2285 13.1747 13.0699C19.2903 13.0699 21.8064 14.957 24.1478 14.957C25.4059 14.957 26 14.0134 26 13C26 12.0565 25.4059 11.043 24.1129 11.043Z"
                                  fill="#1C1D1F"
                                />
                              </svg>
                            </span>
                            ENGAGEMENT HUMAIN & DURABLE
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="row">
                  <div className="col-lg-4">
                    <div
                      style={{
                        height: "100%",
                        marginLeft: "0%",
                        width: "100%",
                      }}
                      className="td-about-left mb-30"
                    >
                      <div
                        // style={{
                        //   height: "100%",
                        //   marginLeft: "0%",
                        //   width: "100%",
                        // }}
                        className="td-about-left-thumb ml-60 fix td-rounded-10"
                      >
                        {/* <img
                          data-speed=".9"
                          src={thumbAbout}
                          alt=""
                          style={{
                            borderTopRightRadius: "84px",
                            height: "100%",
                          }}
                        /> */}
                        <video
                          data-speed=".9"
                          src={videoSource} // Remplace videoSource par ton fichier vidéo ou URL
                          autoPlay
                          loop
                          muted
                          playsInline
                          style={{
                            borderTopRightRadius: "84px",
                            height: "100%",
                            width: "100%", // optionnel, pour que la vidéo remplisse le conteneur
                            objectFit: "cover", // pour que la vidéo garde le ratio et remplisse le conteneur
                          }}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    <div className="td-about-content mb-30">
                      <h6>QUI NOUS SOMMES</h6>
                      <h2 className="td-about-title mb-30 td-text-invert">
                        Nous créons et mettons en œuvre votre stratégie de
                        communication
                      </h2>

                      <p className="mb-45">
                        Soon est une agence de communication créative basée au
                        cœur de Val d’Europe. Notre studio réunit des designers,
                        des stratèges, des directeurs artistiques et des experts
                        du digital pour concevoir des concepts audacieux, des
                        visuels percutants et des solutions innovantes. Du
                        branding au développement web en passant par les réseaux
                        sociaux, nous transformons les idées en expériences
                        engageantes qui permettent aux entreprises de se
                        démarquer et de se développer.
                      </p>

                      <div className="td-btn-group mb-35">
                        <Link to="/about" className="td-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        <Link to="/about" className="td-btn-2 td-btn-primary">
                          À PROPOS
                        </Link>
                        <Link to="/about" className="td-btn-circle">
                          <i className="fa-solid fa-arrow-right"></i>
                        </Link>
                        {/* <a className="td-btn-circle" href="about.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a> */}
                      </div>
                      <div className="td-about-thumb-wrap d-flex align-items-center justify-content-end">
                        <div className="mr-150 td-about-shape">
                          <img
                            className="td-live-anim-spin"
                            src={shapeAbout}
                            alt=""
                          />
                        </div>
                        <div className="td-about-thumb fix td-rounded-10">
                          <img data-speed=".9" src={thumb2About} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-service-area pb-100 pt-100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="td-service-title-wrap">
                      <h2
                        className="td-section-title mb-30"
                        style={{ color: "#e26F57" }}
                      >
                        Service
                      </h2>

                      <p className="td-section-text mr-200">
                        Chez Soon, notre espace créatif est un véritable
                        laboratoire d’idées où chaque projet prend vie. Entre
                        briefing précis, brainstorming intense, visuels
                        inspirants, croquis et maquettes, nous explorons sans
                        cesse de nouvelles pistes pour créer des concepts
                        uniques et percutants. Chaque mood board, prototype et
                        élément de design est pensé pour transformer vos idées
                        en expériences visuelles concrètes et innovantes.
                      </p>
                    </div>
                    <div style={{ width: "60.666667%" }} className="col-lg-5">
                      <div className="td-service-btn mt-35 ml-110 mb-30">
                        <div className="td-btn-group mb-35">
                          <a className="td-btn-circle" href="service.html">
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                          <a
                            className="td-btn-2 td-btn-primary"
                            href="service.html"
                          >
                            Contactez-nous
                          </a>
                          <a className="td-btn-circle" href="service.html">
                            <i className="fa-solid fa-arrow-right"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ width: "49.333333%" }} className="col-lg-7">
                    <div className="td-service-content">
                      <a
                        className="td-service-item pt-0"
                        href="service-details.html"
                      >
                        Conception créative
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Identité de marque
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Design e-commerce
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Digital Marketing
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Stratégie de communication
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Animation 3D & Vidéo
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <a
                        className="td-service-item"
                        href="service-details.html"
                      >
                        Développement de clientèle
                        <span>
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.5853 0.21498C23.9612 0.160838 24.2991 0.257578 24.5256 0.48404C24.752 0.710503 24.8488 1.04839 24.7946 1.42432L22.1319 19.3631C22.068 19.7386 21.8634 20.1177 21.5604 20.4225C21.408 20.5739 21.236 20.7028 21.0532 20.8023C20.7801 20.9458 20.4931 21.0143 20.2286 20.9994C19.9642 20.9844 19.734 20.8866 19.5672 20.7184L12.7779 13.9291L2.47712 24.2298C2.17357 24.5334 1.79306 24.7351 1.41925 24.7906C1.04545 24.846 0.709012 24.7508 0.483922 24.5257C0.25885 24.3006 0.163565 23.9641 0.219059 23.5904C0.274536 23.2166 0.47625 22.836 0.779796 22.5325L11.0806 12.2317L4.29122 5.44239C4.12296 5.27556 4.0252 5.04541 4.01025 4.78096C3.9953 4.51651 4.06385 4.22958 4.20722 3.95636C4.35748 3.68382 4.5724 3.43787 4.82713 3.24697C5.08184 3.05609 5.36593 2.92807 5.64654 2.87772L23.5853 0.21498Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </a>
                      <div className="td-service-counter mt-80">
                        <div className="row">
                          {/* <div className="col-lg-6 col-md-6">
                            <div className="td-service-counter-item mb-30">
                              <h2>
                  
                                <Odometer value={400} />+
                              </h2>
                              <span>Clients</span>
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="td-service-counter-item mb-30">
                              <h2>
                           
                                <Odometer value={15} />+
                              </h2>
                              <span>Collaborateurs</span>
                            </div>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row"></div>
              </div>
            </div>

            <div
              className="td-project-area td-fixed-title-wrap z-index-1 p-relative pt-155 pb-95"
              data-background={bgImage}
              style={{
                backgroundImage: "url(${bgImage})",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopRightRadius: "142px",
                borderBottomLeftRadius: "142px",
              }}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="td-project-title text-center pb-80 td-fixed-title z-index-m-1">
                      <span className="subtitle d-inline-block mb-15">
                        NOS RÉALISATIONS
                      </span>
                      <h2 className="title">
                        Découvrez nos projets
                        <br />
                        <span>récents</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="td-project-item mb-30 mr-30">
                      <div className="td-project-thumb mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderTopLeftRadius: "142px",
                          }}
                          src={product1}
                          alt=""
                        />
                      </div>
                      <div className="td-project-content">
                        <a href="portfolio-details.html">
                          <span className="mr-40">
                            Création de designs visionnaires avec des idées
                            spectaculaires
                          </span>
                          <span className="icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H13V13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="td-project-item two pt-195 mb-30 ml-100 mr-100">
                      <div className="td-project-thumb mb-25">
                        <img
                          className="w-100"
                          // style={{
                          //   borderTopRightRadius: "80px",
                          // }}
                          src={product2}
                          alt=""
                        />
                      </div>
                      <div className="td-project-content">
                        <a href="portfolio-details.html">
                          <span className="mr-40">
                            Le design produit est le processus par lequel une
                            marque est créée
                          </span>
                          <span className="icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H13V13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="td-project-item three pt-175 ml-70 mb-30">
                      <div className="td-project-thumb mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderBottomRightRadius: "142px",
                          }}
                          src={product3}
                          alt=""
                        />
                      </div>
                      <div className="td-project-content">
                        <a href="portfolio-details.html">
                          <span className="mr-40">
                            Le branding est essentiel pour la tech
                          </span>
                          <span className="icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H13V13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="td-project-item four pt-85 mb-30">
                      <div className="td-project-thumb mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderBottomLeftRadius: "142px",
                          }}
                          src={product5}
                          alt=""
                        />
                      </div>
                      <div className="td-project-content">
                        <a href="portfolio-details.html">
                          <span className="mr-40">
                            Le design graphique est le processus par lequel une
                            marque est créée
                          </span>
                          <span className="icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H13V13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12">
                    <div className="td-project-item five mb-30">
                      <div className="td-project-thumb mb-25">
                        <img
                          className="w-100"
                          // style={{
                          //   borderTopRightRadius: "80px",
                          // }}
                          src={product4}
                          alt=""
                        />
                      </div>
                      <div className="td-project-content">
                        <a href="portfolio-details.html">
                          <span className="mr-40">
                            La créativité naît lorsque nous donnons le meilleur
                            de nous-mêmes
                          </span>
                          <span className="icon">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1 13L13 1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M1 1H13V13"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-process-area pt-130 pb-160">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="td-service-title-wrap pb-10">
                      <h2
                        className="td-section-title mb-0"
                        style={{ color: "#e26F57" }}
                      >
                        Travail
                      </h2>
                      <h3
                        className="td-section-title-capi"
                        style={{ color: "#e26F57" }}
                      >
                        Processus
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container">
                <div className="td-process-border td-fixed-thumb-wrap">
                  <div className="row">
                    <div className="col-lg-3">
                      <div className="td-process-thumb pt-80 pb-80 td-fixed-thumb">
                        <img
                          style={{ borderTopRightRadius: "142px" }}
                          src={thumbProcess}
                          alt=""
                        />
                      </div>
                    </div>
                    <div className="col-lg-9">
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-3">
                          <div className="td-process-count">
                            <span>01</span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-9">
                          <div className="td-process-title">
                            <h3 className="mb-0">
                              Recherche & <br /> <span>Planification</span>
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                          <div className="td-process-list">
                            <ul>
                              <li>Recherche de l’audience cible</li>
                              <li>Création de plan de site</li>
                              <li>Stratégie de contenu</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-3">
                          <div className="td-process-count">
                            <span>02</span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-9">
                          <div className="td-process-title">
                            <h3 className="mb-0">
                              Design & <br /> <span>Conception</span>
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                          <div className="td-process-list">
                            <ul>
                              <li>Recherche de l’audience cible</li>
                              <li>Création de plan de site</li>
                              <li>Stratégie de contenu</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-3">
                          <div className="td-process-count">
                            <span>03</span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-9">
                          <div className="td-process-title">
                            <h3 className="mb-0">
                              Testing & <br /> <span>Garantie de qualité</span>
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                          <div className="td-process-list">
                            <ul>
                              <li>Recherche de l’audience cible</li>
                              <li>Création de plan de site</li>
                              <li>Stratégie de contenu</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-lg-2 col-md-3 col-3">
                          <div className="td-process-count no-border">
                            <span>04</span>
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-4 col-9">
                          <div className="td-process-title no-border">
                            <h3 className="mb-0">
                              Project & <br /> <span>Lancement</span>
                            </h3>
                          </div>
                        </div>
                        <div className="col-lg-4 col-md-5">
                          <div className="td-process-list no-border">
                            <ul>
                              <li>Stratégie de communication</li>
                              <li>Pré-Lancement - Teasing</li>
                              <li>Lancement</li>
                              <li>Post-Lancement</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="container"></div>
            {/* //AVIS CLIENTS//
            <div className="td-testimonial-area grey-bg-2 pt-155 pb-120">

                <div className="row">
                  <div className="col-lg-3 col-md-4">
                    <div
                      className="td-testimonial-left mb-40 wow fadeInLeft"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <span className="td-section-subtitle mb-185 d-inline-block">
                        AVIS CLIENTS
                      </span>
                      <img className="mb-20" src={user} alt="" />
                      <p>
                        Animé par la créativité,
                        <br />
                        ready to fly
                      </p>
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-8">
                    <div
                      className="td-testimonial-content ml-80 mb-50 wow fadeInRight"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <h2
                        className="td-testimonial-title mb-65"
                        style={{ color: "#e26F57" }}
                      >
                        Ce que nos Clients
                        <br />{" "}
                        <span style={{ color: "#e26F57" }}>disent de nous</span>
                      </h2>
                      <div className="row">
                        <div className="col-lg-4">
                          <div
                            className="td-testimonial-thumb mb-40"
                            style={{
                              display: "flex",
                              flex: "1",
                              justifyContent: "space-between",
                            }}
                          >
                            <img
                              className="w-100 td-rounded-10"
                              style={{ borderRadius: "28px" }}
                              src={thumbTest}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-lg-8">
                          <div className="td-testimonial-slide-content ml-25 mb-40">
                            <div className="swiper-container td-testimonial-slider mb-120">
                              <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                  <div className="td-testimonial-slide-content">
                                    <p
                                      className="mb-40"
                                      style={{
                                        fontSize: "11px",
                                        lineHeight: "23px",
                                      }}
                                    >
                                      J’ai récemment eu le plaisir de travailler
                                      avec SOON sur mes outils de communication,
                                      et je ne peux que recommander leurs
                                      services ! Dès notre premier contact,
                                      l’équipe s’est montrée extrêmement
                                      professionnelle et accueillante. Ils ont
                                      parfaitement compris mes besoins et ont
                                      proposé des idées créatives qui
                                      reflétaient exactement ce que je
                                      souhaitais transmettre. La qualité de leur
                                      écoute et leur attention à mes attentes
                                      ont été exceptionnelles. Leur sens du
                                      détail et leur passion pour le design sont
                                      évidents à chaque étape du processus. De
                                      plus, leur service client est réellement
                                      attentif et n’hésite pas à apporter des
                                      ajustements jusqu’à ce que le résultat
                                      soit parfait. Je suis ravie du résultat
                                      final et j’ai déjà reçu de nombreux
                                      compliments sur mes nouveaux visuels ! Un
                                      grand merci pour leur travail remarquable.
                                      Je ferai sans aucun doute de nouveau appel
                                      à eux pour mes futurs projets.
                                    </p>
                                    <h6>Julien Foret</h6>
                                    <span>Local Guide</span>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="td-testimonial-slide-content">
                                    <p className="mb-40">
                                      We are excited for our work and how it
                                      positively impacts clients. With over 12
                                      years of experience we have been
                                      constantly providing solutions. We are
                                      committed to deliver unique digital media
                                      solutions from web design
                                    </p>
                                    <h6>David Backhum</h6>
                                    <span>Designer</span>
                                  </div>
                                </div>
                                <div className="swiper-slide">
                                  <div className="td-testimonial-slide-content">
                                    <p className="mb-40">
                                      We are excited for our work and how it
                                      positively impacts clients. With over 12
                                      years of experience we have been
                                      constantly providing solutions. We are
                                      committed to deliver unique digital media
                                      solutions from web design
                                    </p>
                                    <h6>David Backhum</h6>
                                    <span>Designer</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="td-testimonial-navigation mb-30">
                              <span className="td-testimonial-prev d-inline-block">
                                <svg
                                  width="31"
                                  height="24"
                                  viewBox="0 0 31 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M30.8699 12.2679L0.014612 12.4214"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M11.5445 0C11.5445 6.63283 6.38111 12 2.56383e-05 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M4.08971e-05 12C6.38112 12 11.5446 17.3671 11.5446 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </span>
                              <span className="td-testimonial-next ml-15 d-inline-block">
                                <svg
                                  width="31"
                                  height="24"
                                  viewBox="0 0 31 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M-0.000234102 12.2679L30.855 12.4214"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M19.3251 0C19.3251 6.63283 24.4886 12 30.8696 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M30.8696 12C24.4885 12 19.3251 17.3671 19.3251 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            <div
              className="td-project-area td-fixed-title-wrap z-index-1 p-relative pt-155 pb-95"
              data-background={bgImage}
              style={{
                backgroundImage: "url(${bgImage})",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderTopRightRadius: "142px",
                borderBottomLeftRadius: "142px",
              }}
            >
              <div
                style={{
                  backgroundColor: "#e26F57",
                  padding: "20px 0",
                  borderTopRightRadius: "140px",
                  borderBottomLeftRadius: "140px",
                  width: "87vw", // prend toute la largeur de l'écran
                  position: "relative",
                  marginLeft: "6%",
                  marginTop: "-46px",
                }}
              >
                <div className="col-12">
                  <div className="td-brand-wrap">
                    <div className="swiper-container td-brand-slide-active">
                      <div className="swiper-wrapper slide-transtion">
                        <div className="swiper-slide">
                          <div className="td-brand-item brandLogo">
                            <img src={logoBrand1} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand2} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand3} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand4} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand5} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand6} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <br />
                <br />

                <div className="col-12">
                  <div
                    className="td-brand-wrap"
                    // style={{ backgroundColor: '#e26F57', padding: '20px 0', borderRadius: '10px' }}
                  >
                    <div className="swiper-container td-brand-slide-active">
                      <div className="swiper-wrapper slide-transtion">
                        <div className="swiper-slide">
                          <div className="td-brand-item brandLogo">
                            <img src={logoBrand7} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand8} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand9} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand10} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand11} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand12} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <br />
                <br />
                <br />

                <div className="col-12">
                  <div
                    className="td-brand-wrap"
                    // style={{ backgroundColor: '#e26F57', padding: '20px 0', borderRadius: '10px' }}
                  >
                    <div className="swiper-container td-brand-slide-active">
                      <div className="swiper-wrapper slide-transtion">
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand13} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand14} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand15} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand16} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand17} alt="" />
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="td-brand-item">
                            <img src={logoBrand18} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-blog-area pt-155 pb-130">
              <div className="container">
                <div className="row mb-50">
                  <div className="col-lg-3">
                    <div className="mb-20">
                      <span className="td-section-subtitle">
                        Notre dernier blog
                      </span>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div>
                      <h2
                        className="td-testimonial-title mb-30"
                        style={{ color: "#e26F57" }}
                      >
                        Actualités de <br />{" "}
                        <span style={{ color: "#e26F57" }}>Soon</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-4">
                    <div className="mb-30">
                      <p className="mb-35">
                        Nous sommes enthousiastes à propos de notre travail et
                        de l’impact positif qu’il a sur nos clients. Forts de
                        plus de 12 ans d’expérience, nous fournissons
                        constamment des solutions adaptées.
                      </p>
                      <div className="td-btn-group">
                        <a className="td-btn-circle" href="blog.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                        <a className="td-btn-2 td-btn-primary" href="blog.html">
                          Voir tous les articles
                        </a>
                        <a className="td-btn-circle" href="blog.html">
                          <i className="fa-solid fa-arrow-right"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div
                      className="td-blog-wrap mb-30 wow fadeInLeft"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="td-blog-thumb fix mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderTopRightRadius: "142px",
                            borderBottomLeftRadius: "142px",
                          }}
                          src={thumBlog1}
                          alt=""
                        />
                      </div>
                      <div className="td-blog-content">
                        <h3 className="td-blog-title mb-30">
                          <a href="blog-details.html">
                            Notre planification stratégique garantit que la
                            vision de votre marque s’aligne sur les opportunités
                            du marché.
                          </a>
                        </h3>
                        <div className="td-blog-cetagory d-flex align-items-center">
                          <span className="cetagory">Branding</span>
                          <span className="td-border ml-20 mr-15 d-inline-block"></span>
                          <span className="dates">Septembre 12, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div
                      className="td-blog-wrap mb-30 wow fadeInUp"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="td-blog-thumb fix mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderTopRightRadius: "142px",
                            borderBottomLeftRadius: "142px",
                          }}
                          src={thumBlog2}
                          alt=""
                        />
                      </div>
                      <div className="td-blog-content">
                        <h3 className="td-blog-title mb-30">
                          <a href="blog-details.html">
                            Le CSS border-image, bien que complexe, offre des
                            possibilités incroyables et créatives, parfaites
                            pour une agence de design web souhaitant apporter
                            des détails uniques et percutants à ses projets.
                          </a>
                        </h3>
                        <div className="td-blog-cetagory d-flex align-items-center">
                          <span className="cetagory">Digital</span>
                          <span className="td-border ml-20 mr-15 d-inline-block"></span>
                          <span className="dates">Septembre 12, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6">
                    <div
                      className="td-blog-wrap mb-30 wow fadeInRight"
                      data-wow-delay=".3s"
                      data-wow-duration="1s"
                    >
                      <div className="td-blog-thumb fix mb-25">
                        <img
                          className="w-100"
                          style={{
                            borderTopRightRadius: "142px",
                            borderBottomLeftRadius: "142px",
                          }}
                          src={thumBlog3}
                          alt=""
                        />
                      </div>
                      <div className="td-blog-content">
                        <h3 className="td-blog-title mb-30">
                          <a href="blog-details.html">
                            Grâce à notre planification stratégique, la vision
                            de votre marque rencontre parfaitement les
                            opportunités du marché.
                          </a>
                        </h3>
                        <div className="td-blog-cetagory d-flex align-items-center">
                          <span className="cetagory">Stratégie</span>
                          <span className="td-border ml-20 mr-15 d-inline-block"></span>
                          <span className="dates">Septembre 12, 2025</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ClientReview />
            <Faq />
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
                      {/* <img
                        className="td-cta-shape-2 d-none d-md-block"
                        src={cta2}
                        alt=""
                      /> */}
                      {/* <a className="td-text-invert" href="contact.html">
                        VOUS AVEZ
                        <br />
                        DES PROJETS
                        <br />
                        EN TÊTE
                      </a> */}
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
                      <a className="td-btn-circle" href="about.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
                      <a className="td-btn-2 td-btn-primary" href="about.html">
                        Demander un devis
                      </a>
                      <a className="td-btn-circle" href="about.html">
                        <i className="fa-solid fa-arrow-right"></i>
                      </a>
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
