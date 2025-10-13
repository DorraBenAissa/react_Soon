import { useEffect } from "react";

export default function SearchPopup() {
  useEffect(() => {
    const openBtn = document.querySelector(".search-open-btn");
    const closeBtn = document.querySelector(".search-close-btn");
    const popup = document.querySelector(".search__popup");
    const overlay = document.querySelector(".search-popup-overlay");

    if (!openBtn || !closeBtn || !popup || !overlay) return;

    const handleOpen = () => {
      popup.classList.add("search-opened");
      overlay.classList.add("search-popup-overlay-open");
    };

    const handleClose = () => {
      popup.classList.remove("search-opened");
      overlay.classList.remove("search-popup-overlay-open");
    };

    openBtn.addEventListener("click", handleOpen);
    closeBtn.addEventListener("click", handleClose);

    return () => {
      openBtn.removeEventListener("click", handleOpen);
      closeBtn.removeEventListener("click", handleClose);
    };
  }, []);

  return null; // Composant invisible, agit sur le DOM
}
