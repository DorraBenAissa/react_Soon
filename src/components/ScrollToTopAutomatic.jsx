import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Fait défiler instantanément tout en haut dès le changement de route
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // Certains navigateurs ignorent "instant", donc on prévoit un fallback :
    });

    // Fallback pour un comportement cohérent partout
    setTimeout(() => window.scrollTo(0, 0), 0);
  }, [pathname]);

  return null;
}
