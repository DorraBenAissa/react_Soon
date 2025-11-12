// IMPORTS
import { Link } from "react-router-dom";

// ASSETS
// import logoBlack from "../../assets/img/logo/logo-black.png";
import logoWhiteBlack from "../../assets/img/logo/BLACK2.webp";
import soonWhiteLogo from "../../assets/img/logo/WHITH3.webp";

// COMPONENTS
import Footer from "./../../layouts/Footer/Footer";
import Loader from "../../components/Loader";
import ScrollToTopAutomatic from "../../components/ScrollToTopAutomatic";
import MouseFollower from "../../components/MouseFollower";
import ScrollToTop from "../../components/ScrollToTop";
import StickyHeader from "../../components/StickyHeader";
import WowInit from "../../components/WowInit";
import Menu from "../../components/Menu";
import AutoCloseMenu from "../../components/AutoCloseMenu";


import Header from "./../../layouts/Header/Header";

function Contact() {
  return (
    <>
      <ScrollToTopAutomatic />
      <Loader />
      <MouseFollower />
      <ScrollToTop />
      <StickyHeader />
      <WowInit />
      <Menu />
      <AutoCloseMenu />

      <Header />

      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <div className="td-breadcrumb-area td-breadcrumb-spacing mb-100">
              <div className="container">
                <div className="row">
                  <div className="col-xxl-9">
                    <div className="td-breadcrumb-wrap">
                      <span
                        className="subtitle d-inline-block mb-10 wow fadeInUp"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"
                      >
                        NOS DERNIÈRES CRÉATIONS
                      </span>
                      <h2
                        className="td-section-page-title  wow fadeInUp"
                        data-wow-delay=".7s"
                        data-wow-duration="1s"
                      >
                        Vous souhaitez plus d’informations ?<br />
                        Nous sommes
                        <br />
                        Heureux <span>de vous aider !</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-contact-map-area">
              <div className="container-fluid p-0">
                <div className="row">
                  <div className="col-12">
                    <div className="td-contact-map p-relative">
                      <div className="td-contact-map-wrap">
                        <img className="mb-100" width="119px" src={soonWhiteLogo} alt="" />
                        <h6 className="mb-25" style={{ color: "white" }}>
                          Contact info:
                        </h6>
                        <a
                          href="tel:0185492288"
                          style={{
                            color: "white",
                            display: "block",
                            width: "142px",
                          }}
                        >
                          01 85 49 22 88
                        </a>
                        <a
                          className="mb-10"
                          href="mailto:hello@soon-agency.com"
                          style={{ color: "white", display: "block" }}
                        >
                          hello@soon-agency.com
                        </a>
                        <a href="#" style={{ color: "white" }}>
                          Jazz Building, 26 avenue Hergé, 77700 Chessy – Val
                          d'Europe - France
                        </a>
                      </div>
                      <div className="td-contact-map-inner">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2623.684422245482!2d2.785801815674353!3d48.87263217929161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fdb827e8d7d%3A0x123456789abcdef0!2sJazz%20Building%2C%2026%20Avenue%20Herg%C3%A9%2C%2077700%20Chessy%2C%20France!5e0!3m2!1sen!2sfr!4v1724572184688!5m2!1sen!2sfr"
                          width="600"
                          height="450"
                          style={{ border: "0" }}
                          allowfullscreen=""
                          loading="lazy"
                          referrerpolicy="no-referrer-when-downgrade"
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-contact-main pt-155 pb-120">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                    <div
                      className="td-contact-title-wrap mb-30  wow fadeInLeft"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <h2
                        className="td-contact-main-title"
                        style={{ color: "#e26F57" }}
                      >
                        Contactons-nous pour
                        <br />
                        meilleurs{" "}
                        <span style={{ color: "#e26F57" }}>résultats</span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="td-contact-form-box mb-30  wow fadeInRight"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <form
                        id="contact-form"
                        action="assets/mail.php"
                        method="POST"
                      >
                        <div className="row">
                          <div className="col-12 mb-25">
                            <label for="name">Nom</label>
                            <input
                              className="td-input"
                              name="name"
                              id="name"
                              type="text"
                            />
                          </div>
                          <div className="col-md-6 mb-25">
                            <label for="email">Email</label>
                            <input
                              className="td-input"
                              name="email"
                              id="email"
                              type="text"
                            />
                          </div>
                          <div className="col-md-6 mb-25">
                            <label for="phone">Téléphone</label>
                            <input
                              className="td-input"
                              name="phone"
                              id="phone"
                              type="text"
                            />
                          </div>
                          <div className="col-12 mb-25">
                            <label for="website">Site Web</label>
                            <input
                              className="td-input"
                              name="website"
                              id="website"
                              type="text"
                            />
                          </div>
                          <div className="col-md-12 mb-30">
                            <label for="message">Message</label>
                            <textarea
                              className="td-input message"
                              name="message"
                              id="message"
                              cols="30"
                              rows="10"
                            ></textarea>
                          </div>
                          <div className="col-12">
                            <button type="submit" className="td-btn-group">
                              <span className="td-btn-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                              <span className="td-btn-2 td-btn-primary">
                                Envoyer votre message
                              </span>
                              <span className="td-btn-circle">
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </button>
                            <p className="ajax-response pt-20"></p>
                          </div>
                        </div>
                      </form>
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

export default Contact;
