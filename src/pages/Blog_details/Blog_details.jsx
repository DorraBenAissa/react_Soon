//imports
import { Link } from "react-router-dom";

// ASSETS
// import thumb from "../../assets/img/portfolio/details/thumb.jpg";
import avatar from "../../assets/img/blog/blog-details/avatar.jpg";
import thumb_3 from "../../assets/img/blog/blog-details/thumb-3.jpg";
import thumb_4 from "../../assets/img/blog/blog-details/thumb-4.jpg";
import thumb_6 from "../../assets/img/blog/blog-details/thumb-6.jpg";
import thumb_2 from "../../assets/img/blog/blog-details/thumb-2.jpg";
import thumb from "../../assets/img/blog/blog-details/thumb.jpg";
import thumbBlog from "../../assets/img/blog/thumb.jpg";
import thumbBlog_2 from "../../assets/img/blog/thumb-2.jpg";
import thumbBlog_3 from "../../assets/img/blog/thumb-3.jpg";

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
                        <div className="td-breadcrumb-area td-breadcrumb-spacing mb-115">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-9">
                                        <div className="td-breadcrumb-wrap ml-75">
                                            <span className="subtitle d-inline-block mb-15  wow fadeInUp" data-wow-delay=".5s" data-wow-duration="1s">AGENCE CREATIVE</span>
                                            <h2 className="td-section-page-title mb-55  wow fadeInUp" data-wow-delay=".7s" data-wow-duration="1s">Mettre l’accent sur <br /> les aspects <span> créatifs du design</span></h2>
                                            <div className="td-blog-details-author d-flex align-items-center  wow fadeInUp" data-wow-delay=".9s" data-wow-duration="1s">
                                                <div className="td-blog-details-author-thumb d-flex align-items-center mr-80">
                                                    <img className="mr-20" src={avatar} alt="" />
                                                    <div className="td-blog-details-author-content">
                                                        <span>Écrit par</span>
                                                        <span className="bolds mt-5">Alexandera</span>
                                                    </div>
                                                </div>
                                                <div className="td-blog-details-author-content">
                                                    <span>Consulté</span>
                                                    <span className="bolds mt-5">Lecture : 4 min </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="td-blog-details-area">
                            <div className="container-fluid container-1830">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="td-blog-details-thumb fix td-rounded-10">
                                            <img data-speed=".9" className="w-100 td-rounded-10" src={thumb_3} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-8">
                                        <div className="td-blog-details-content ml-50 mr-60 pt-110 mb-65">
                                            <h6 className="td-blog-details-title mb-30">Les agences créatives jouent un rôle clé en aidant les entreprises à renforcer leur présence sur le marché, à établir des relations clients durables et à s’adapter à des tendances du marché en constante évolution.</h6>
                                            <p className="td-blog-details-text"> Le métavers peut être considéré comme une évolution de l’internet d’aujourd’hui, lui-même issu des médias passifs que nous consommions simplement. À l’époque de la radio et de la télévision, le rôle du consommateur se limitait à écouter et à décider s’il voulait acheter. Si internet a apporté une participation active et la création de communautés, le métavers ajoute une immersion totale et le pouvoir de co-créer, d’échanger, de promouvoir et même de générer des profits de manières jusqu’ici inimaginables – introduisant
                                                un niveau de complexité entièrement nouveau dans la manière dont les marques peuvent interagir avec leur marché cible. </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-11">
                                        <div className="row">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="td-blog-details-thumb fix td-rounded-10 mb-30">
                                                    <img data-speed=".9" className="td-rounded-10 w-100" src={thumb_4} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="td-blog-details-thumb  fix td-rounded-10 mb-30">
                                                    <img data-speed=".9" className="td-rounded-10  w-100" src={thumb_6} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="td-blog-details-content ml-50 mr-60 pt-80">
                                            <h6 className="td-blog-details-title mb-20">Relations & Communication</h6>
                                            <p className="td-blog-details-text">But, like most politicians, he promised more than he could deliver. Why not indeed! Daylight and everything. And then the battle’s not so bad? Hello, little man. I will destroy you! No, I’m Santa Claus! Kif might! Man, I’m sore all over. I feel like I just went ten rounds with mighty Thor. I found what I need. And it’s not friends, it’s things. Then we’ll go with that data file!</p>
                                            <blockquote className="td-blog-details-blockquote p-relative mt-70 mb-45">
                                                <span className="td-blog-details-blockquote-icon">
                                                    <svg width="90" height="66" viewBox="0 0 90 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0 42.6672C0 27.2282 7.2986 14.2644 21.8957 3.77586C25.3156 1.25862 27.8597 0 29.528 0C30.6957 0 31.2796 0.755172 31.2796 2.26552C31.2796 3.69195 31.0294 4.7408 30.5289 5.41207C30.1118 5.99943 29.5697 6.54483 28.9024 7.04828C28.2351 7.55172 27.5678 8.01322 26.9005 8.43276C26.2332 8.8523 25.4408 9.48161 24.5232 10.3207C16.3488 17.369 12.2616 24.2494 12.2616 30.9621C12.2616 34.5701 13.7213 36.3741 16.6408 36.3741C28.9024 36.3741 35.0332 41.4506 35.0332 51.6034C35.0332 55.5471 33.5317 58.9034 30.5289 61.6724C27.5261 64.3575 24.2313 65.7 20.6445 65.7C14.055 65.7 8.96682 63.1408 5.3801 58.0224C1.79337 52.8201 0 47.7017 0 42.6672ZM55.0919 42.6672C55.0919 26.9764 62.182 14.1385 76.3621 4.15345C79.6986 1.38448 82.2009 0 83.8692 0C85.5374 0 86.3716 0.755172 86.3716 2.26552C86.3716 3.69195 86.1213 4.69885 85.6208 5.28621C85.2038 5.87356 84.6616 6.46092 83.9943 7.04827C83.327 7.55172 82.6597 8.01322 81.9924 8.43276C81.3251 8.8523 80.5744 9.48161 79.7403 10.3207C71.3156 17.8724 67.1033 24.7529 67.1033 30.9621C67.1033 34.5701 68.6464 36.3741 71.7327 36.3741C83.9109 36.3741 90 41.4086 90 51.4776C90 55.3374 88.4986 58.6937 85.4957 61.5465C82.5763 64.3155 79.2815 65.7 75.6114 65.7C69.1886 65.7 64.1422 63.1828 60.472 58.1483C56.8853 53.0299 55.0919 47.8695 55.0919 42.6672Z" fill="#1C1D1F" fill-opacity="0.1" />
                                                    </svg>
                                                </span>
                                                <h5 className="title mb-20">Ne regarde pas l’horloge ; fais comme elle. Continue d’avancer.</h5>
                                                <span className="name"></span>
                                            </blockquote>
                                            <p className="td-blog-details-text"> Comme pour tout projet réussi, une excellente gestion du temps est un élément essentiel. En tant que chefs d’entreprise, lorsque nous engageons des designers produits, nous attendons d’eux non seulement des performances de qualité, mais aussi le respect des délais. Chez Stan Vision, nous mettons à votre disposition une équipe de design expérimentée, dirigée par un chef de projet expert qui sait comment prioriser votre plateforme et vos produits.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-11">
                                        <div className="td-blog-details-thumb fix td-rounded-10 mb-30 mt-90">
                                            <img data-speed=".9" className="td-rounded-10  w-100" src={thumb_2} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="td-blog-details-content ml-50 mr-60 pt-80 mb-60">
                                            <h6 className="td-blog-details-title mb-20">Gestion des prix et des coûts</h6>
                                            <p className="td-blog-details-text">Pour conclure, nous ne pouvons pas passer sous silence l’un des éléments les plus déterminants lors du recrutement de designers de produits digitaux : le prix. Il est bien connu que les agences représentent une option plus coûteuse. Pour certaines entreprises, collaborer avec des designers produits freelances peut s’avérer bien plus attractif en raison de coûts plus accessibles.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="td-blog-details-tag-wrap d-flex justify-content-between  ml-50 mr-60">
                                            <div className="td-blog-details-tag mb-10">
                                                <ul>
                                                    <li><a href="#">
                                                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M15.3691 9.92961L9.75775 15.5409C9.61238 15.6865 9.43975 15.8019 9.24974 15.8807C9.05972 15.9595 8.85605 16 8.65035 16C8.44466 16 8.24098 15.9595 8.05096 15.8807C7.86095 15.8019 7.68832 15.6865 7.54295 15.5409L0.820312 8.82613V1H8.64644L15.3691 7.72264C15.6606 8.01591 15.8242 8.41262 15.8242 8.82613C15.8242 9.23964 15.6606 9.63634 15.3691 9.92961Z" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                            <path d="M4.73438 4.91321H4.74272" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        </svg>
                                                        DIGITAL</a></li>
                                                    <li><a href="#">CREATIVE</a></li>
                                                    <li><a href="#">MARKETING</a></li>
                                                </ul>
                                            </div>
                                            <div className="td-blog-details-share mb-10 ml-10">
                                                <a href="#">
                                                    <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.4984 5.2C12.6582 5.2 13.5984 4.2598 13.5984 3.1C13.5984 1.9402 12.6582 1 11.4984 1C10.3386 1 9.39844 1.9402 9.39844 3.1C9.39844 4.2598 10.3386 5.2 11.4984 5.2Z" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M3.1 10.1C4.2598 10.1 5.2 9.15982 5.2 8.00002C5.2 6.84023 4.2598 5.90002 3.1 5.90002C1.9402 5.90002 1 6.84023 1 8.00002C1 9.15982 1.9402 10.1 3.1 10.1Z" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M11.4984 14.9998C12.6582 14.9998 13.5984 14.0596 13.5984 12.8998C13.5984 11.74 12.6582 10.7998 11.4984 10.7998C10.3386 10.7998 9.39844 11.74 9.39844 12.8998C9.39844 14.0596 10.3386 14.9998 11.4984 14.9998Z" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M4.91406 9.05688L9.69506 11.8429" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                        <path d="M9.68806 4.15686L4.91406 6.94286" stroke="#1C1D1F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                    </svg>
                                                    Partager l’article
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="td-blog-details-author-bottom ml-50 mr-60 mt-30">
                                            <div className="row">
                                                <div className="col-lg-4 col-md-4">
                                                    <div className="td-blog-details-author-bottom-thumb h-100">
                                                        <img src={thumb} alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-8 col-md-8">
                                                    <div className="td-blog-details-author-bottom-content">
                                                        <div className="td-blog-details-author-bottom-social">
                                                            <a href="#">
                                                                <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M9.33161 6.77486L15.1688 0H13.7856L8.71722 5.8826L4.66907 0H0L6.12155 8.89546L0 16H1.38336L6.73581 9.78785L11.0109 16H15.68L9.33148 6.77486H9.33187H9.33161ZM7.43696 8.97374L6.81669 8.088L1.88171 1.03969H4.00634L7.98902 6.72789L8.60929 7.61362L13.7863 15.0074H11.6616L7.43709 8.974V8.97361L7.43696 8.97374Z" fill="currentColor" />
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M11.5 1H4.5C2.567 1 1 2.567 1 4.5V11.5C1 13.433 2.567 15 4.5 15H11.5C13.433 15 15 13.433 15 11.5V4.5C15 2.567 13.433 1 11.5 1Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M10.7963 7.55921C10.8827 8.14178 10.7832 8.73676 10.5119 9.25952C10.2407 9.78228 9.81148 10.2062 9.28542 10.471C8.75935 10.7358 8.16319 10.8279 7.58173 10.7344C7.00027 10.6408 6.46311 10.3663 6.04667 9.94982C5.63022 9.53338 5.35569 8.99622 5.26213 8.41476C5.16856 7.8333 5.26073 7.23714 5.52551 6.71107C5.79029 6.18501 6.21421 5.75583 6.73697 5.48458C7.25973 5.21333 7.85471 5.11382 8.43728 5.20021C9.03152 5.28833 9.58167 5.56524 10.0065 5.99003C10.4313 6.41482 10.7082 6.96496 10.7963 7.55921Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                    <path d="M11.8477 4.15039H11.8577" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                                                </svg>
                                                            </a>
                                                            <a href="#">
                                                                <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M10.2579 4.7373C11.5141 4.7373 12.7188 5.23632 13.6071 6.12458C14.4954 7.01283 14.9944 8.21757 14.9944 9.47375V14.9996H11.8367V9.47375C11.8367 9.05502 11.6704 8.65344 11.3743 8.35736C11.0782 8.06127 10.6767 7.89493 10.2579 7.89493C9.8392 7.89493 9.43762 8.06127 9.14154 8.35736C8.84545 8.65344 8.67911 9.05502 8.67911 9.47375V14.9996H5.52148V9.47375C5.52148 8.21757 6.0205 7.01283 6.90876 6.12458C7.79701 5.23632 9.00174 4.7373 10.2579 4.7373Z" fill="currentColor" />
                                                                    <path d="M3.15763 5.52734H0V15.0002H3.15763V5.52734Z" fill="currentColor" />
                                                                    <path d="M1.57881 3.15763C2.45077 3.15763 3.15763 2.45077 3.15763 1.57881C3.15763 0.706859 2.45077 0 1.57881 0C0.706859 0 0 0.706859 0 1.57881C0 2.45077 0.706859 3.15763 1.57881 3.15763Z" fill="currentColor" />
                                                                </svg>
                                                            </a>
                                                        </div>
                                                        <h5 className="mb-15 mt-20">Donal Braun</h5>
                                                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing
                                                            diam nonumy eirmod tempor.!</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="td-blog-details-pagenation ml-50 mr-60  td-portfolio-identity-navigation d-flex justify-content-between pt-45 align-items-center">
                                            <span className="td-blog-details-prev">
                                                <i className="fa-solid fa-arrow-left mr-10"></i>
                                                Prev
                                            </span>
                                            <div className="td-portfolio-identity-border"></div>
                                            <span className="td-blog-details-next">
                                                Next
                                                <i className="fa-solid fa-arrow-right ml-10"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="td-blog-area pt-120 pb-130">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="mb-60">
                                            <h2 className="td-testimonial-title">Related <span>articles</span></h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="td-blog-wrap mb-30">
                                            <div className="td-blog-thumb fix mb-25">
                                                <img className="w-100"
                                                    style={{
                                                        borderTopRightRadius: "142px",
                                                        borderBottomLeftRadius: "142px",
                                                    }} src={thumbBlog} alt="" />
                                            </div>
                                            <div className="td-blog-content">
                                                <h3 className="td-blog-title mb-30"><Link to="/blog_details">
                                                    Notre planification stratégique garantit que la
                                                    vision de votre marque s’aligne sur les opportunités
                                                    du marché.
                                                </Link></h3>
                                                <div className="td-blog-cetagory d-flex align-items-center">
                                                    <span className="cetagory">Development</span>
                                                    <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                                    <span className="dates">August 12, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="td-blog-wrap mb-30">
                                            <div className="td-blog-thumb fix mb-25">
                                                <img className="w-100"
                                                    style={{
                                                        borderTopRightRadius: "142px",
                                                        borderBottomLeftRadius: "142px",
                                                    }} src={thumbBlog_2} alt="" />
                                            </div>
                                            <div className="td-blog-content">
                                                <h3 className="td-blog-title mb-30">
                                                    <Link to="/blog_details">
                                                        Le CSS border-image, bien que complexe, offre des
                                                        possibilités incroyables et créatives, parfaites
                                                        pour une agence de design web souhaitant apporter
                                                        des détails uniques et percutants à ses projets.
                                                    </Link></h3>
                                                <div className="td-blog-cetagory d-flex align-items-center">
                                                    <span className="cetagory">Development</span>
                                                    <span className="td-border ml-20 mr-15 d-inline-block"></span>
                                                    <span className="dates">August 12, 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="td-blog-wrap mb-30">
                                            <div className="td-blog-thumb fix mb-25">
                                                <img className="w-100"
                                                    style={{
                                                        borderTopRightRadius: "142px",
                                                        borderBottomLeftRadius: "142px",
                                                    }} src={thumbBlog_3} alt="" />
                                            </div>
                                            <div className="td-blog-content">
                                                <h3 className="td-blog-title mb-30"><Link to="/blog_details">
                                                    Grâce à notre planification stratégique, la vision
                                                    de votre marque rencontre parfaitement les
                                                    opportunités du marché.
                                                </Link></h3>
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
                    </main>
                    <Footer />
                </div>
            </div>

        </>
    );
}

export default Home;
