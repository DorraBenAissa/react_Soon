// IMPORTS
import { Link } from "react-router-dom";

// ASSETS
import logoBlack from "../../assets/img/logo/logo-black.png";
import logoWhiteBlack from "../../assets/img/logo/logo-white-black.png";

// COMPONENTS
import Footer from "./../../layouts/Footer/Footer";
import Loader from "../../components/Loader";
import ScrollToTopAutomatic from "../../components/ScrollToTopAutomatic";
import MouseFollower from "../../components/MouseFollower";
import ScrollToTop from "../../components/ScrollToTop";
import StickyHeader from "../../components/StickyHeader";
import WowInit from "../../components/WowInit";
import Menu from "../../components/Menu";

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

      <header>
        <div
          id="header-sticky"
          className="td-header__area td-header-spacing td-header-5-wrapper td-header-about-wrapper p-relative z-index-1"
        >
          <div className="container-fluid container-1710">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-4">
                <div className="logo">
                  {/* <a className="logo-1" href="index.html">
                    <img style={{ width: "96px" }} src={logoBlack} alt="Logo" />
                  </a> */}
                  <Link to="/" className="logo-1">
                    <img style={{ width: "96px" }} src={logoBlack} alt="Logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xxl-8 col-xl-7 d-none d-xl-block">
                <div className="tdmenu__wrap tdmenu-2-wrap text-center">
                  <nav className="tdmenu__nav">
                    <div className="tdmenu__navbar-wrap tdmenu__main-menu">
                      <ul className="navigation">
                        <li className="menu-item-has-children">
                          <a href="index.html">Accueil</a>
                          <ul className="sub-menu">
                            <li className="active">
                              <a href="index.html">L’agence</a>
                            </li>
                            <li>
                              <a href="index-2.html">Vos besoins</a>
                            </li>
                            <li>
                              <a href="index-3.html">Portfolio</a>
                            </li>
                            <li>
                              <a href="index-4.html">Vous informer</a>
                            </li>
                            <li>
                              <a href="index-5.html">Nous rejoindre</a>
                            </li>
                            <li>
                              <a href="index-6.html">Nous contacter</a>
                            </li>
                            <li>
                              <a href="index-7.html">Prendre Rendez-vous</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="#">Pages</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="about.html">À propos</a>
                            </li>
                            <li>
                              <a href="service.html">Service</a>
                            </li>
                            <li>
                              <a href="service-details.html">Service Details</a>
                            </li>
                            <li>
                              <a href="team.html">Team</a>
                            </li>
                            <li>
                              <a href="team-details.html">Team Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="portfolio-two-columns.html">Portfolio</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="portfolio-two-columns.html">
                                Two Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-three-columns.html">
                                three Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-four-columns.html">
                                four Columns
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-random.html">
                                Portfolio Random
                              </a>
                            </li>
                            <li>
                              <a href="portfolio-details.html">
                                Portfolio Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item-has-children">
                          <a href="blog.html">Blog</a>
                          <ul className="sub-menu">
                            <li>
                              <a href="blog.html">Blog</a>
                            </li>
                            <li>
                              <a href="blog-sidebar.html">Blog Sidebar</a>
                            </li>
                            <li>
                              <a href="blog-details.html">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li className="active">
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </nav>
                </div>
              </div>
              <div className="col-xxl-2 col-xl-3 col-8">
                <div className="td-header-right text-end">
                  <a className="td-btn-12" href="contact.html">
                    Let’s Talk
                  </a>
                  <div className="d-inline-block ml-10">
                    <div className="tdmenu-offcanvas-open-btn mobile-nav-toggler">
                      <div className="tdmenu-offcanvas-open-bar d-inline-block">
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tdmobile__menu td-menu-large">
          <nav className="tdmobile__menu-box">
            <div className="close-btn">
              <i className="fa-solid fa-xmark"></i>
            </div>
            <div className="nav-logo">
              <a href="index.html">
                <img style={{ width: "96px" }} src={logoBlack} alt="logo" />
              </a>
            </div>
            <div className="tdmobile__search">
              <form action="#">
                <input type="text" placeholder="Rechercher..." />
                <button>
                  <i className="fas fa-search"></i>
                </button>
              </form>
            </div>
            <div className="tdmobile__menu-outer d-xl-none"></div>
            <div className="offCanvas__side-info mb-30 d-none ml-25 mr-25 d-xl-block">
              <div className="contact-list mb-30">
                <h4>Adresse du bureau</h4>
                <p>
                  Immeuble Jazz, 26 avenue Hergé
                  <br /> 77700 Chessy - Val d'Europe
                </p>
              </div>
              <div className="contact-list mb-30">
                <h4>Numéro de téléphone</h4>
                <p>01 85 49 22 88</p>
              </div>
              <div className="contact-list mb-30">
                <h4>Adresse e-mail</h4>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="mt-30 ml-25 mr-25">
              <a
                href="contact.html"
                className="td-btn td-btn-menu-black w-100 d-inline-block td-btn-switch-animation ml-10"
              >
                <span className="d-flex align-items-center justify-content-center">
                  <span className="btn-text"> Contact </span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </span>
                  <span className="btn-icon">
                    <i className="fa-sharp fa-solid fa-angle-right"></i>
                  </span>
                </span>
              </a>
            </div>
            <div className="social-links">
              <ul className="list-wrap">
                <li>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
        <div className="tdmobile__menu-backdrop"></div>
      </header>

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
                        <img className="mb-100" src={logoWhiteBlack} alt="" />
                        <h6 className="mb-25">Contact info:</h6>
                        <a href="tel:0185492288">01 85 49 22 88</a>
                        <a
                          className="mb-10"
                          href="mailto:hello@soon-agency.com"
                        >
                          hello@parodyagency.com
                        </a>
                        <a href="#">
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
                      <h2 className="td-contact-main-title">
                        Contactons-nous pour
                        <br />
                        meilleurs <span>résultats</span>
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
