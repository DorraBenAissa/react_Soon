import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FixedTitleAnimation() {
  useEffect(() => {
    // --- Vérifie si l'élément .td-fixed-title-wrap existe ---
    const titleWrap = document.querySelector(".td-fixed-title-wrap");
    if (titleWrap) {
      gsap.timeline({
        scrollTrigger: {
          trigger: ".td-fixed-title-wrap",
          start: "top center-=350",
          end: "bottom 80%",
          pin: ".td-fixed-title",
          pinSpacing: false,
          scrub: 1,
          markers: false,
        },
      });
    }

    // --- MatchMedia pour les écrans >= 992px ---
    const mm = gsap.matchMedia();

    mm.add("(min-width: 992px)", () => {
      const thumbWrap = document.querySelector(".td-fixed-thumb-wrap");
      if (thumbWrap) {
        gsap.timeline({
          scrollTrigger: {
            trigger: ".td-fixed-thumb-wrap",
            start: "top center-=350",
            end: "bottom 65%",
            pin: ".td-fixed-thumb",
            pinSpacing: false,
            scrub: 1,
            markers: false,
          },
        });
      }
    });

    // 🔹 Nettoyage à la désactivation du composant
    return () => {
      mm.revert(); // supprime tous les ScrollTriggers enregistrés via matchMedia
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null; // tout est géré dans le DOM existant
}
