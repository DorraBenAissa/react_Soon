import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function AutoCloseMenu() {
  const location = useLocation();

  useEffect(() => {
    // À chaque changement de route
    document.body.classList.remove("mobile-menu-visible");
  }, [location]);

  return null; // pas de rendu dans le DOM
}

export default AutoCloseMenu;
