// // IMPORTS
// import { Link } from "react-router-dom";

// // ASSETS
// import logoBlack from "../../assets/img/logo/BLACK2.webp";
// import soonWhiteLogo from "../../assets/img/logo/WHITH3.webp";

// // Components
// import Menu from "../../components/Menu";

// function Header() {
//   return (
//     <>
//       <Menu />
//       <header>
//         {/* Header principal */}
//         <div
//           id="header-sticky"
//           className="td-header__area td-header-spacing p-relative z-index-1"
//           style={{
//             position: "fixed", // reste toujours en haut
//             top: 0,
//             left: 0,
//             width: "100%",
//             zIndex: 9999,
//             backgroundColor: "#e26F57",
//             boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
//           }}
//         >
//           <div className="container container-1750">
//             <div className="row align-items-center">
//               {/* Menu mobile */}
//               <div className="col-lg-4 col-md-4 col-sm-4 col-5">
//                 <div className="tdmenu__wrap">
//                   <div className="tdmenu-offcanvas-open-btn mobile-nav-toggler d-flex align-items-center justify-content-center"  style={{ backgroundColor: '#fff' }}>
//                     <span className="text mr-5" style={{ color: "#e26F57" }} >menu</span>
//                     <div className="tdmenu-offcanvas-open-bar" >
//                       <span></span>
//                       <span></span>
//                     </div>
//                   </div>
//                   <nav className="tdmenu__nav d-none">
//                     <div className="tdmenu__navbar-wrap tdmenu__main-menu">
//                       <ul className="navigation">
//                         <li className="active menu-item-has-children">
//                           <a href="index.html">Accueil</a>
//                           <ul className="sub-menu">
//                             <li className="active"><a href="index.html">L’agence</a></li>
//                             <li><a href="index-2.html">Vos besoins</a></li>
//                             <li><a href="index-3.html">Portfolio</a></li>
//                             <li><a href="index-4.html">Vous informer</a></li>
//                             <li><a href="index-5.html">Nous rejoindre</a></li>
//                             <li><a href="index-6.html">Nous contacter</a></li>
//                             <li><a href="index-7.html">Prendre Rendez-vous</a></li>
//                           </ul>
//                         </li>
//                         <li className="menu-item-has-children">
//                           <a href="#">Pages</a>
//                           <ul className="sub-menu">
//                             <li><Link to="/about">À propos</Link></li>
//                             <li><a href="service.html">Service</a></li>
//                             <li><a href="service-details.html">Service Details</a></li>
//                             <li><a href="team.html">Équipe</a></li>
//                             <li><a href="team-details.html">Équipe Details</a></li>
//                           </ul>
//                         </li>
//                         <li className="menu-item-has-children">
//                           <a href="portfolio-two-columns.html">Portfolio</a>
//                           <ul className="sub-menu">
//                             <li><a href="portfolio-two-columns.html">Conception créative & Print</a></li>
//                             <li><a href="portfolio-two-columns.html">Branding & Identité de marques</a></li>
//                             <li><a href="portfolio-three-columns.html">Stratégie de communication</a></li>
//                             <li><a href="portfolio-random.html">Animation 3D & Vidéo</a></li>
//                             <li><a href="portfolio-details.html">Acquisition de leads</a></li>
//                             <li><a href="portfolio-four-columns.html">Site web</a></li>
//                             <li><a href="portfolio-details.html">Réseaux sociaux</a></li>
//                           </ul>
//                         </li>
//                         <li className="menu-item-has-children">
//                           <a href="blog.html">Blog</a>
//                           <ul className="sub-menu">
//                             <li><a href="blog.html">Blog</a></li>
//                             <li><a href="blog-sidebar.html">Blog Web</a></li>
//                             <li><a href="blog-details.html">Blog Communication</a></li>
//                           </ul>
//                         </li>
//                         <li><Link to="/contact">Contact</Link></li>
//                       </ul>
//                     </div>
//                   </nav>
//                 </div>
//               </div>

//               {/* Logo */}
//               <div className="col-lg-4 col-md-4 col-sm-4 col-5">
//                 <div className="logo text-center">
//                   <a className="logo-1" href="index.html">
//                     <img width={96} src={soonWhiteLogo} alt="Logo" />
//                   </a>
//                 </div>
//               </div>

//               {/* Bouton contact / recherche */}
//               <div className="col-lg-4 col-md-4 col-sm-4 col-2">
//                 <div className="td-header-right text-end">
//                   <button className="td-header-search search-open-btn">
//                     <svg
//                       width="20"
//                       height="20"
//                       viewBox="0 0 20 20"
//                       fill="none"
//                       xmlns="http://www.w3.org/2000/svg"
//                     >
//                       <path
//                         d="M9.00004 17.0001C13.4183 17.0001 17.0001 13.4183 17.0001 9.00004C17.0001 4.58174 13.4183 1 9.00004 1C4.58174 1 1 4.58174 1 9.00004C1 13.4183 4.58174 17.0001 9.00004 17.0001Z"
//                         stroke="#FFF"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                       <path
//                         d="M19.0004 18.9999L14.6504 14.6499"
//                         stroke="#FFF"
//                         strokeWidth="2"
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                       />
//                     </svg>
//                   </button>
//                   <Link
//                     to="/contact"
//                     className="td-btn td-btn-lg d-none d-md-inline-block td-btn-switch-animation ml-10"  style={{ backgroundColor: '#fff' }}
//                   >
//                     <span className="d-flex align-items-center justify-content-center">
//                       <span className="btn-text" style={{ color: "#e26F57" }}>SEE YOU SOON ?</span>
//                       <span className="btn-icon">
//                         <i className="fa-sharp fa-solid fa-angle-right" style={{ color: "#e26F57" }}></i>
//                       </span>
//                       <span className="btn-icon">
//                         <i className="fa-sharp fa-solid fa-angle-right" style={{ color: "#e26F57" }}></i>
//                       </span>
//                     </span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Menu mobile */}
//         <div className="tdmobile__menu td-menu-large">
//           <nav className="tdmobile__menu-box">
//             <div className="close-btn">
//               <i className="fa-solid fa-xmark"></i>
//             </div>
//             <div className="nav-logo">
//               <a href="index.html">
//                 <img style={{ width: "96px" }} src={logoBlack} alt="logo" />
//               </a>
//             </div>
//             <div className="tdmobile__search">
//               <form action="#">
//                 <input type="text" placeholder="Rechercher..." />
//                 <button><i className="fas fa-search"></i></button>
//               </form>
//             </div>
//             <div className="tdmobile__menu-outer"></div>
//             <div className="mt-30 ml-25 mr-25">
//               <Link
//                 to="/contact"
//                 className="td-btn td-btn-menu-black w-100 d-inline-block td-btn-switch-animation ml-10"
//               >
//                 <span className="d-flex align-items-center justify-content-center">
//                   <span className="btn-text">Nous contacter</span>
//                   <span className="btn-icon"><i className="fa-sharp fa-solid fa-angle-right"></i></span>
//                   <span className="btn-icon"><i className="fa-sharp fa-solid fa-angle-right"></i></span>
//                 </span>
//               </Link>
//             </div>
//           </nav>
//         </div>
//         <div className="tdmobile__menu-backdrop"></div>
//       </header>
//     </>
//   );
// }

// export default Header;


import React from "react";
import { Link } from "react-router-dom";
import soonWhiteLogo from "../../assets/img/logo/WHITH3.webp"; // adapte le chemin selon ton projet

const Header = () => {
  const menuItems = [
    { label: "ACCUEIL", path: "/" },
    { label: "SERVICES", path: "/services" },
    { label: "À PROPOS", path: "/about" },
  ];

  return (
    <header           style={{backgroundColor: "#e26F57"}} >
      <div
        style={{
          width: "100%",
          paddingLeft: "40px",
          display: "flex",
          alignItems: "center",
          fontFamily: "'Aboreto', 'SF Pro', 'Plus Jakarta Sans', sans-serif",
          position: "fixed",
          top: "20px",
          left: 0,
          zIndex: 10000,
          backgroundColor: "#e26F57",
        }}
      >
        {/* Logo */}
        <Link to="/" style={{ marginRight: "20px" }}>
          <img
            src={soonWhiteLogo}
            alt="Logo Soon"
            style={{ width: "96px" }}
          />
        </Link>

        {/* Menu */}
        {menuItems.map((item, index) => (
          <Link
            to={item.path}
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
              textDecoration: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "rgba(255,255,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "transparent")
            }
          >
            {item.label}
          </Link>
        ))}

        {/* Loupe Search */}
        <button
          className="td-header-search search-open-btn"
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
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M19.0004 18.9999L14.6504 14.6499"
              stroke="#ffffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* CTA SEE YOU SOON */}
        <Link
          to="/contact"
          className="td-btn td-btn-lg d-none d-md-inline-block td-btn-switch-animation ml-10"
          style={{ borderColor: "white", background: "#ffff" }}
        >
          <span className="d-flex align-items-center justify-content-center">
            <span style={{ color: "#e26757" }} className="btn-text">
              SEE YOU SOON ?
            </span>
            <span className="btn-icon">
              <i
                style={{ color: "#e26757" }}
                className="fa-sharp fa-solid fa-angle-right"
              ></i>
            </span>
            <span className="btn-icon">
              <i
                style={{ color: "#e26757" }}
                className="fa-sharp fa-solid fa-angle-right"
              ></i>
            </span>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
