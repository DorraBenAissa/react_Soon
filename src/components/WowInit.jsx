import { useEffect } from "react";
import WOW from "wowjs";

//import "animate.css"; // optionnel : si tu utilises Animate.css pour les effets

export default function WowInit() {
  useEffect(() => {
    const wow = new WOW.WOW({
      live: false, // évite de rescanner le DOM à chaque mutation (meilleures perfs)
    });
    wow.init();

    // rien à nettoyer, WOW ne crée pas de listeners persistants

  }, []);

  return null; // tout est géré dans le DOM existant
}
