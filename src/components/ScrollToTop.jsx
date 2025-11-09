import { useEffect } from "react";
import AutoVideo from "../components/AutoVideo";

export default function ScrollToTop() {
  useEffect(() => {
    const handleScroll = () => {
      const scroll = window.scrollY;
      const header = document.getElementById("sticky-header");
      const scrollBtn = document.querySelector(".scroll-to-target");
      const fixedHeight = document.getElementById("header-fixed-height");

      if (scroll < 245) {
        header?.classList.remove("sticky-menu");
        scrollBtn?.classList.remove("open");
        fixedHeight?.classList.remove("active-height");
      } else {
        header?.classList.add("sticky-menu");
        scrollBtn?.classList.add("open");
        fixedHeight?.classList.add("active-height");
      }
    };

    // Scroll vers la cible quand on clique sur le bouton
    const scrollBtn = document.querySelector(".scroll-to-target");
    const handleScrollClick = (e) => {
      const targetSelector = e.currentTarget.getAttribute("data-target");
      if (!targetSelector) return;

      let targetEl;
      if (targetSelector === "html") {
        targetEl = document.documentElement;
      } else {
        targetEl = document.querySelector(targetSelector);
      }

      if (targetEl) {
        window.scrollTo({
          top: targetEl.offsetTop,
          behavior: "smooth",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    scrollBtn?.addEventListener("click", handleScrollClick);

    // Nettoyage à la sortie
    return () => {
      window.removeEventListener("scroll", handleScroll);
      scrollBtn?.removeEventListener("click", handleScrollClick);
    };
  }, []);

  return (
    <>
      <button className="scroll__top scroll-to-target" data-target="html">
        <i className="fa-solid fa-arrow-up"></i>
      </button>

      <AutoVideo />

    </>
  );
}
