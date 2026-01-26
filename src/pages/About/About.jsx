//imports
import { Link } from "react-router-dom";

// ASSETS
// import logoBlack from "../../assets/img/logo/logo-black.png";
import logoBlack from "../../assets/img/logo/BLACK2.webp";

import thumbMain from "../../assets/img/about/main/thumb.jpg";
import usertestimonial from "../../assets/img/testimonial/user.png";
import thumbTestimonial from "../../assets/img/testimonial/thumb.jpg";

import logoBrand1 from "../../assets/img/brand/logo-1.png";
import logoBrand2 from "../../assets/img/brand/logo-2.png";
import logoBrand3 from "../../assets/img/brand/logo-3.png";
import logoBrand4 from "../../assets/img/brand/logo-4.png";
import logoBrand5 from "../../assets/img/brand/logo-5.png";
import shapeMain from "../../assets/img/about/main/shape.png";

import thumbTeam from "../../assets/img/team/gautier.jpg";
import thumbTeam2 from "../../assets/img/team/Marie.jpg";
import thumbTeam3 from "../../assets/img/team/marion.jpg";
import thumbTeam4 from "../../assets/img/team/jeff.jpg";
import thumbTeam5 from "../../assets/img/team/morgan.jpg";
import thumbTeam6 from "../../assets/img/team/Geraldine.jpg";
import thumbTeam7 from "../../assets/img/team/0S6A3224.jpg";
import thumbTeam8 from "../../assets/img/team/0S6A3308.jpg";
import thumbTeam9 from "../../assets/img/team/0S6A3321.jpg";
import thumbTeam10 from "../../assets/img/team/lisa.jpg";
import thumbTeam11 from "../../assets/img/team/julie.jpg";

//import award from "../../assets/img/awards/awards-5/award.png";

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

import Header from "./../../layouts/Header/Header";

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
            <div className="td-about-area td-about-main-spacing pb-140">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="td-about-main-wrapper pb-90">
                      <h2 className="td-section-page-title td-title-anim text-center">
                        Agence créative et digitale à 360°, à service complet
                        collaborant à l’échelle mondiale avec
                        <br />
                        <span>les plus grandes marques. </span>
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div
                      className="td-about-main-thumb mb-40 fix td-rounded-10 wow fadeInLeft"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <img
                        data-speed=".9"
                        className="w-100 td-rounded-10"
                        src={thumbMain}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div
                      className="td-about-main-content ml-110 mb-40  wow fadeInRight"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <h3 className="td-about-main-title mb-20">
                        Favoriser l’innovation grâce au conseil stratégique
                      </h3>
                      <div className="row">
                        <div className="col-lg-5 col-md-5">
                          <div className="td-about-main-bigtext">
                            <h2>17</h2>
                            <span>Années d’expérience</span>
                          </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                          <div className="td-about-main-text mt-30">
                            <p className="mb-30">
                              Nous sommes passionnés par notre travail et par
                              l’impact positif qu’il génère pour nos clients.
                              Forts de plusieurs années d’expérience, nous
                              saisissons chaque opportunité pour progresser et
                              innover.
                            </p>
                            <div className="td-btn-group">
                              <Link className="td-btn-circle" to="/contact">
                                <i className="fa-solid fa-arrow-right"></i>
                              </Link>

                              <Link
                                className="td-btn-2 td-btn-primary"
                                to="/contact"
                              >
                                EN SAVOIR PLUS
                              </Link>

                              <Link className="td-btn-circle" to="/contact">
                                <i className="fa-solid fa-arrow-right"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="td-about-main-feature-area pt-150 pb-165">
              <div className="container">
                <div className="row">
                  <div className="col-xl-9">
                    <div className="td-about-main-feature-wrap">
                      <h2 className="td-about-main-feature-title mb-70 td-text-invert">
                        La Team Soon réunit des talents complémentaires, alliant créativité, stratégie
                        & expertise technique pour donner vie à vos projets. Ensemble, nous concevons
                        des solutions sur mesure avec passion et engagement.
                      </h2>
                      <div className="row">
                        <div className="col-lg-5 d-none d-md-block">
                          <div className="td-about-main-feature-shape text-center ml-70 mb-40">
                            <img src={shapeMain} alt="" />
                          </div>
                        </div>
                        <div className="col-lg-7">
                          <div className="td-about-main-feature-list">
                            <ul>
                              <li>Art direction</li>
                              <li>Branding & Identité de marques</li>
                              <li>Conception créative & Print</li>
                              <li>Stratégie de communication</li>
                              <li>Animation 3D & Vidéo</li>
                              <li>Acquisition de leads</li>
                              <li>Site web</li>
                              <li>Réseaux sociaux</li>
                              <li>Responsive Design</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="td-team-area td-team-about-wrap">
              <div className="container-fluid">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Directeur de création & CEO
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">GAUTIER</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam2} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Directrice de création & Social Media Manager
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">MARIE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam3} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Motion designer
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">MARION</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam4} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Graphiste Multimédia
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">JEFF</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam5} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Graphiste Multimédia
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">MORGANE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam6} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Administrative Manager
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">GERALEDINE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam7} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Graphiste Créative
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">SABRINA</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam8} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">Graphiste</span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">DORIANE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam9} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Motion designer
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">ADELINE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam10} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Graphiste Créative
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">LISA</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="td-team-4-wrap p-relative mb-30">
                      <div className="td-team-4-thumb">
                        <img className="w-100" src={thumbTeam11} alt="" />
                      </div>
                      <div className="td-team-4-content text-center">
                        <span className="td-team-4-subtitle">
                          Chargée de projet
                        </span>
                        <h3 className="td-team-4-title">
                          <a href="team-details.html">JULIE</a>
                        </h3>
                        <div className="td-team-4-social">
                          <a href="#">
                            <svg
                              width="13"
                              height="13"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="17"
                              height="17"
                              viewBox="0 0 17 17"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M17 8.5C17 3.80558 13.1944 0 8.5 0C3.80558 0 0 3.80558 0 8.5C0 12.7426 3.10833 16.2591 7.17188 16.8967V10.957H5.01367V8.5H7.17188V6.62734C7.17188 4.49703 8.44087 3.32031 10.3825 3.32031C11.3124 3.32031 12.2852 3.48633 12.2852 3.48633V5.57813H11.2133C10.1574 5.57813 9.82812 6.23334 9.82812 6.90554V8.5H12.1855L11.8087 10.957H9.82812V16.8967C13.8917 16.2591 17 12.7426 17 8.5Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                d="M11.8477 4.15039H11.8577"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </a>
                          <a href="#">
                            <svg
                              width="15"
                              height="15"
                              viewBox="0 0 15 15"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z"
                                fill="currentColor"
                              />
                              <path
                                d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z"
                                fill="currentColor"
                              />
                              <path
                                d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z"
                                fill="currentColor"
                              />
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="td-testimonial-area grey-bg-2 pt-155 pb-120">
              <div className="container">
                <div className="row">
                  {/* <div className="col-lg-3 col-md-4">
                    <div
                      className="td-testimonial-left mb-40  wow fadeInLeft"
                      data-wow-delay=".5s"
                      data-wow-duration="1s"
                    >
                      <span className="td-section-subtitle mb-185 d-inline-block">
                        AVIS CLIENTS
                      </span>
                      <img className="mb-20" src={usertestimonial} alt="" />
                      <p>
                        More than 25k clients all
                        <br />
                        over the world
                      </p>
                    </div>
                  </div> */}
                  {/* <div className="col-lg-9 col-md-8">
                    <div className="td-testimonial-content ml-80 mb-50">
                      <h2 className="td-testimonial-title mb-65" style={{ color: "#e26F57", }}>
                        CE QUE DISENT NOS CLIENTS
                        <br /> <span style={{ color: "#e26F57", }}>À NOTRE SUJET</span>
                      </h2>
                      <div
                        className="row  wow fadeInRight"
                        data-wow-delay=".5s"
                        data-wow-duration="1s"
                      >
                        <div className="col-lg-4">
                          <div className="td-testimonial-thumb fix td-rounded-10 mb-40">
                            <img
                              data-speed=".9"
                              className="w-100 td-rounded-10"
                              src={thumbTestimonial}
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
                    </div> */}
                  {/* </div> */}
                  {/* <div className="col-12">
                    <div className="td-brand-wrap">
                      <div className="swiper-container td-brand-slide-active">
                        <div className="swiper-wrapper slide-transtion">
                          <div className="swiper-slide">
                            <div className="td-brand-item">
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
                              <img src={logoBrand3} alt="" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>



            <div className="td-awards-area td-awards-about-wrap pt-120 pb-130">
              <div className="container">
                <div className="row mb-40">
                  <div className="col-lg-6">
                    <div className="td-awards-5-title-wrap mb-30">
                      <h2 className="td-testimonial-title mb-25 td-text-invert">
                        Honorable <span>awards</span>
                      </h2>
                      <a className="td-awards-5-btn" href="#">
                        Direct from the heart
                      </a>
                    </div>
                  </div>
                  <div
                    className="col-lg-6  wow fadeInRight"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                  >
                    <div className="td-awards-5-text mt-140 mb-30 mr-80">
                      <p className="mb-0">
                        We are excited for our work and how it positively
                        impacts clients. With over 12 years of experience we
                        have been constantly providing solutions. We are
                        committed
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div
                    className="col-lg-6  wow fadeInLeft"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                  >
                    <div className="td-awards-5-thumb text-center pt-70 mb-30">
                      {/* <img src={award} alt="" /> */}
                    </div>
                  </div>
                  <div
                    className="col-lg-6  wow fadeInRight"
                    data-wow-delay=".5s"
                    data-wow-duration="1s"
                  >
                    <div className="td-awards-5-list mb-30">
                      <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="mr-60">9x</span>
                          <span>Sony world photography award</span>
                        </div>
                        <span>2021</span>
                      </div>
                      <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="mr-60">2x</span>
                          <span>CSS Design award world</span>
                        </div>
                        <span>2021</span>
                      </div>
                      <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="mr-60">3x</span>
                          <span>Featured design of the week</span>
                        </div>
                        <span>2021</span>
                      </div>
                      <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="mr-60">6x</span>
                          <span>Creative agency of the day</span>
                        </div>
                        <span>2021</span>
                      </div>
                      <div className="td-awards-5-list-item d-flex justify-content-between">
                        <div className="d-flex align-items-center">
                          <span className="mr-60">9x</span>
                          <span>Envato agency of the year</span>
                        </div>
                        <span>2021</span>
                      </div>
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
