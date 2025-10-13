import { useEffect } from "react";

export default function MobileMenu() {
  useEffect(() => {
    // Vérifie si le menu existe
    const menuWrap = document.querySelector(".tdmenu__wrap");
    const mobileMenuBox = document.querySelector(".tdmobile__menu-box .tdmobile__menu-outer");
    const mobileMenu = document.querySelector(".tdmobile__menu");

    if (menuWrap && mobileMenuBox) {
      // ✅ Clone le contenu du menu principal dans le menu mobile
      mobileMenuBox.innerHTML = menuWrap.querySelector(".tdmenu__main-menu")?.innerHTML || "";

      // ✅ Ajoute le bouton dropdown si manquant
      mobileMenuBox.querySelectorAll("li.menu-item-has-children").forEach((li) => {
        if (!li.querySelector(".dropdown-btn")) {
          const btn = document.createElement("div");
          btn.className = "dropdown-btn";
          btn.innerHTML = `<span class="plus-line"></span>`;
          li.appendChild(btn);
        }
      });

      // ✅ Gestion ouverture/fermeture des sous-menus
      mobileMenuBox.querySelectorAll(".dropdown-btn").forEach((btn) => {
        btn.addEventListener("click", () => {
          const submenu = btn.previousElementSibling;
          btn.classList.toggle("open");
          if (submenu && submenu.tagName === "UL") {
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
          }
        });
      });

      // ✅ Ouvrir le menu mobile
      const toggler = document.querySelector(".mobile-nav-toggler");
      toggler?.addEventListener("click", () => {
        document.body.classList.add("mobile-menu-visible");
      });

      // ✅ Fermer le menu mobile
      mobileMenu?.querySelector(".close-btn")?.addEventListener("click", () => {
        document.body.classList.remove("mobile-menu-visible");
      });

      const backdrop = mobileMenu?.querySelector(".tdmobile__menu-backdrop");
      backdrop?.addEventListener("click", () => {
        document.body.classList.remove("mobile-menu-visible");
      });
    }
  }, []);

  return null;
}
