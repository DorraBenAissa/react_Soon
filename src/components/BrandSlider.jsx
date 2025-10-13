import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

// ✅ Import moderne des modules depuis swiper/modules
import { Autoplay, FreeMode } from "swiper/modules";

export default function BrandSlider() {
  const swiperRef = useRef(null);

  useEffect(() => {
    swiperRef.current = new Swiper(".td-brand-slide-active", {
      modules: [Autoplay, FreeMode],
      loop: true,
      freeMode: true,
      slidesPerView: "auto",
      centeredSlides: true,
      allowTouchMove: false,
      speed: 8000,
      autoplay: {
        delay: 1,
        disableOnInteraction: true,
      },
    });

    // 🔹 Nettoyage du Swiper quand le composant est démonté
    return () => {
      if (swiperRef.current) swiperRef.current.destroy(true, true);
    };
  }, []);

  return null; // tout se gère dans le DOM
}
