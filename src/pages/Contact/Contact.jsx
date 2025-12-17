// IMPORTS
import { Link } from "react-router-dom";
import { useState } from "react";

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
// import ClientReview from "../../components/ClientReview";
import Faq from "../../components/Faq";


import Header from "./../../layouts/Header/Header";



function Contact() {
  const [activeForm, setActiveForm] = useState("devis"); // OK

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
                        CONTACT
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
            <div>
              {/* Les boutons en haut */}
              <div className="">
                <div className="container">
                  <div className="row" >
                    <div class="col-lg-12 mb-50  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">
                      <div class="td-portfolio-filter-btn text-center masonary-menu">
                        {/* <div className="col-lg-5"> */}
                        <div
                          className="td-contact-title-wrap mb-30  wow fadeInLeft"
                          data-wow-delay=".5s"
                          data-wow-duration="1s"
                        ></div>
                        <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
                          <button
                            onClick={() => setActiveForm("devis")}
                            style={{
                              padding: "10px 20px",
                              backgroundColor: activeForm === "devis" ? "#e26F57" : "#ffffffff",
                              color: activeForm === "devis" ? "#fff" : "#000",
                              border: "none",
                              cursor: "pointer",
                            }}

                          >
                            Demande de devis
                          </button>
                          <button
                            onClick={() => setActiveForm("stage")}
                            style={{
                              padding: "10px 20px",
                              backgroundColor: activeForm === "stage" ? "#e26F57" : "#ffffffff",
                              color: activeForm === "stage" ? "#fff" : "#000",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Stage
                          </button>
                          <button
                            onClick={() => setActiveForm("alternance")}
                            style={{
                              padding: "10px 20px",
                              backgroundColor: activeForm === "alternance" ? "#e26F57" : "#ffffffff",
                              color: activeForm === "alternance" ? "#fff" : "#000",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Alternance
                          </button>
                          <button
                            onClick={() => setActiveForm("emploi")}
                            style={{
                              padding: "10px 20px",
                              backgroundColor: activeForm === "emploi" ? "#e26F57" : "#ffffffff",
                              color: activeForm === "emploi" ? "#fff" : "#000",
                              border: "none",
                              cursor: "pointer",
                            }}
                          >
                            Emploi
                          </button>
                        </div>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div></div>

              {/* Formulaires */}
              <div>
                {activeForm === "devis" && (
                  <div className="">
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
                              Nous sommes
                              <br />
                              toujours
                              {" "}
                              <span style={{ color: "#e26F57" }}>à l'écoute.</span>
                            </h2>
                            <p>Vous souhaitez faire une demande de devis pour la création d’un logo, d’une identité visuelle ou d’un projet digital ?
                          N’hésitez pas à remplir le formulaire ci-dessous. Vous pouvez aussi nous écrire directement à ...</p>
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

                                <div className="col-12 mb-25">
                                  <label for="Society">Société</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Address">Adresse</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
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
                                <div className="col-md-12 mb-30">
                                  <label for="message">Quel est l'objet de votre demande ?</label>
                                  <textarea
                                    className="td-input message"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Address">Quel est votre délai ?</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Society">Quelle est votre enveloppe budgétaire ?</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label htmlFor="fileUpload">Joindre un fichier</label>
                                  <input
                                    className="td-input"
                                    type="file"
                                    id="fileUpload"
                                    name="fileUpload"
                                    accept="*/*"
                                  />
                                  <small style={{ display: "block", marginTop: "5px", color: "#555" }}>
                                    Déposer un fichier ici ou cliquer pour télécharger. Taille maximale : 128MB
                                  </small>
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
                )}

                {activeForm === "stage" && (
                  <div className="">
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
                              style={{ color: "#f57860ff" }}
                            >
                              Postulez
                              <br />
                              pour{" "}
                              <span style={{ color: "#e26F57" }}>un stage</span>
                            </h2>
                            <p>Vous souhaitez rejoindre l’équipe à l’occasion d’un stage ? N’hésitez pas à remplir le formulaire ci-dessous,
                          nous tâcherons de vous répondre le plus rapidement possible</p>
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
                                  <label for="Address">Adresse</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>


                                <div className="col-md-12 mb-30">
                                  <label for="message">École ou formation</label>
                                  <textarea
                                    className="td-input message"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Address">Niveau d'études</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="email">Date de début de stage</label>
                                  <input
                                    className="td-input"
                                    name="email"
                                    id="email"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="phone">Durée du stage</label>
                                  <input
                                    className="td-input"
                                    name="phone"
                                    id="phone"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Society">Votre portfolio en ligne</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label htmlFor="fileUpload">Pièces jointes</label>
                                  <input
                                    className="td-input"
                                    type="file"
                                    id="fileUpload"
                                    name="fileUpload"
                                    accept="*/*"
                                  />
                                  <small style={{ display: "block", marginTop: "5px", color: "#555" }}>
                                    Déposer un fichier ici ou cliquer pour télécharger. Taille maximale : 128MB
                                  </small>
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
                                      Déposer votre candidature
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
                )}

                {activeForm === "alternance" && (
                  <div className="">
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
                              Postulez

                              <br />
                              pour{" "}
                              <span style={{ color: "#e26F57" }}>une alternance</span>
                            </h2>
                            <p>Vous souhaitez nous rejoindre pour un contrat en alternance ? N’hésitez pas à remplir le formulaire ci-dessous,
                          nous tâcherons de vous répondre le plus rapidement possible.</p>
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
                                  <label for="Address">Adresse</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>

                                <div className="col-md-12 mb-30">
                                  <label for="message">École ou formation</label>
                                  <textarea
                                    className="td-input message"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Address">Niveau d'études</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="email">Date de début de l'alternance</label>
                                  <input
                                    className="td-input"
                                    name="email"
                                    id="email"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="phone">Durée de l'alternance</label>
                                  <input
                                    className="td-input"
                                    name="phone"
                                    id="phone"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Society">Votre portfolio en ligne</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label htmlFor="fileUpload">Pièces jointes</label>
                                  <input
                                    className="td-input"
                                    type="file"
                                    id="fileUpload"
                                    name="fileUpload"
                                    accept="*/*"
                                  />
                                  <small style={{ display: "block", marginTop: "5px", color: "#555" }}>
                                    Déposer un fichier ici ou cliquer pour télécharger. Taille maximale : 128MB
                                  </small>
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
                                      Déposer votre candidature
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
                )}

                {activeForm === "emploi" && (
                  <div className="">
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
                              Rejoignez

                              <br />
                              notre{" "}
                              <span style={{ color: "#e26F57" }}>équipe</span>
                            </h2>
                            <p>Remplissez le formulaire ci-dessous pour nous faire parvenir votre demande d’emploi.
                          Nous tâcherons de vous répondre le plus rapidement possible.</p>
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
                                    // style={{ borderBottomRightRadius: "141px", borderInline:"30px"}}
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
                                  <label for="Address">Adresse</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>

                                <div className="col-md-12 mb-30">
                                  <label for="message">Domaine professionnel</label>
                                  <textarea
                                    className="td-input message"
                                    name="message"
                                    id="message"
                                    cols="30"
                                    rows="10"
                                  ></textarea>
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Address">Expérience</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="email">Niveau d'études</label>
                                  <input
                                    className="td-input"
                                    name="email"
                                    id="email"
                                    type="text"
                                  />
                                </div>
                                <div className="col-md-6 mb-25">
                                  <label for="phone">Durée de l'alternance</label>
                                  <input
                                    className="td-input"
                                    name="phone"
                                    id="phone"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Society">Votre portfolio en ligne</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label for="Society">Votre profil Linkedin</label>
                                  <input
                                    className="td-input"
                                    name="website"
                                    id="website"
                                    type="text"
                                  />
                                </div>
                                <div className="col-12 mb-25">
                                  <label htmlFor="fileUpload">Joindre un CV / book / Lettre de motivation (PDF)</label>
                                  <input
                                    className="td-input"
                                    type="file"
                                    id="fileUpload"
                                    name="fileUpload"
                                    accept="*/*"
                                  />
                                  <small style={{ display: "block", marginTop: "5px", color: "#555" }}>
                                    Déposer un fichier ici ou cliquer pour télécharger. Taille maximale : 128MB
                                  </small>
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
                                      Déposer votre candidature
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
                )}
              </div>
            </div>
            
            {/* <ClientReview /> */}
            <Faq />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Contact;
