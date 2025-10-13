import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// ✅ Import des modules depuis swiper/modules
import { Navigation } from "swiper/modules";

export default function TestimonialSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    // Initialisation du Swiper sur le DOM existant
    swiperRef.current = new Swiper(".td-testimonial-slider", {
      modules: [Navigation],
      slidesPerView: 1,
      speed: 700,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: ".td-testimonial-next",
        prevEl: ".td-testimonial-prev",
      },
    });

    // 🔹 Nettoyage
    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  return null; // Aucun rendu JSX, Swiper agit sur le DOM
}
