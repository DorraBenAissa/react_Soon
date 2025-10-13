import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";

// ✅ Import des modules à partir de "swiper/modules"
import { Autoplay, FreeMode } from "swiper/modules";

export default function HeroTextSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".td-hero-text-slide-active", {
      modules: [Autoplay, FreeMode], // <-- les modules Swiper
      loop: true,
      freeMode: true,
      slidesPerView: 1, // ou 'auto' selon ton design
      spaceBetween: 30,
      centeredSlides: true,
      allowTouchMove: false,
      speed: 10000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });

    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  // 🔹 Rien à rendre ici, car tu gères le HTML ailleurs (dans le DOM)
  return null;
}
