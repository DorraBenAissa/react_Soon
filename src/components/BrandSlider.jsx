// import { useEffect, useRef } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/autoplay";

// // ✅ Import moderne des modules depuis swiper/modules
// import { Autoplay, FreeMode } from "swiper/modules";

// export default function BrandSlider() {
//   const swiperRef = useRef(null);

//   useEffect(() => {
//     swiperRef.current = new Swiper(".td-brand-slide-active", {
//       modules: [Autoplay, FreeMode],
//       loop: true,
//       freeMode: true,
//       slidesPerView: "auto",
//       centeredSlides: true,
//       allowTouchMove: false,
//       speed: 8000,
//       autoplay: {
//         delay: 1,
//         disableOnInteraction: true,
//       },
//     });

//     // 🔹 Nettoyage du Swiper quand le composant est démonté
//     return () => {
//       if (swiperRef.current) swiperRef.current.destroy(true, true);
//     };
//   }, []);

//   return null; // tout se gère dans le DOM
// }

// import { useEffect, useRef } from "react";
// import Swiper from "swiper";
// import "swiper/css";
// import "swiper/css/free-mode";
// import "swiper/css/autoplay";
// import { Autoplay, FreeMode } from "swiper/modules";

// export default function BrandSlider() {
//   const swiperRefs = useRef([]);

//   useEffect(() => {
//     // Sélectionne tous les sliders dans le DOM
//     const sliders = document.querySelectorAll(".td-brand-slide-active");

//     // Initialise un Swiper pour chaque slider trouvé
//     swiperRefs.current = Array.from(sliders).map((slider, index) => {
//       return new Swiper(slider, {
//         modules: [Autoplay, FreeMode],
//         loop: true,
//         freeMode: true,
//         slidesPerView: "auto",
//         centeredSlides: true,
//         allowTouchMove: false,
//         speed: 6000 + index * 2000, // 🔹 vitesse variable
//         autoplay: {
//           delay: 1,
//           disableOnInteraction: true,
//           reverseDirection: index % 2 !== 0, // 🔹 sens inversé pour un effet dynamique
//         },
//       });
//     });

//     // 🔹 Nettoyage à la sortie du composant
//     return () => {
//       swiperRefs.current.forEach((swiper) => {
//         if (swiper && swiper.destroy) swiper.destroy(true, true);
//       });
//     };
//   }, []);

//   return null; // ✅ aucun rendu, tout se gère dans le DOM


import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { Autoplay, FreeMode } from "swiper/modules";

export default function BrandSlider() {
  const instancesRef = useRef([]);

  useEffect(() => {
    const sliders = document.querySelectorAll(".td-brand-slide-active");
    if (!sliders.length) return;

    instancesRef.current = Array.from(sliders).map((el, idx) => {
      // config commune mais possibilité d'ajustements par index
      const cfg = {
        modules: [Autoplay, FreeMode],
        loop: true,
        freeMode: true,
        freeModeMomentum: false, // évite l'inertie si tu veux un ticker régulier
        slidesPerView: "auto",
        spaceBetween: 30,
        centeredSlides: false,
        allowTouchMove: false,
        speed: 6000 + idx * 2000,
        autoplay: {
          delay: 0,                  // essentiel pour scroll continu
          disableOnInteraction: false,
          reverseDirection: idx === 1 // inverse le sens pour le 2ème slider
        },
        // si tu as des problèmes de loop visuel, augmente loopedSlides
        loopedSlides: el.querySelectorAll(".swiper-slide").length,
      };

      return new Swiper(el, cfg);
    });

    return () => {
      instancesRef.current.forEach((s) => {
        if (s && typeof s.destroy === "function") s.destroy(true, true);
      });
    };
  }, []);

  return null;
}


