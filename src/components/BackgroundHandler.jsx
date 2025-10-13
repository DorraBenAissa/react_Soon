import { useEffect } from "react";

export default function BackgroundHandler() {
  useEffect(() => {
    // 🔹 Appliquer les backgrounds
    document.querySelectorAll("[data-background]").forEach((el) => {
      const bg = el.getAttribute("data-background");
      if (bg) el.style.backgroundImage = `url(${bg})`;
    });

    // 🔹 Appliquer les couleurs de fond
    document.querySelectorAll("[data-bg-color]").forEach((el) => {
      const color = el.getAttribute("data-bg-color");
      if (color) el.style.backgroundColor = color;
    });

    // 🔹 Appliquer les largeurs
    document.querySelectorAll("[data-width]").forEach((el) => {
      const width = el.getAttribute("data-width");
      if (width) el.style.width = `${width}px`;
    });
  }, []);

  // Rien à afficher — tout se gère dans le DOM
  return null;
}
