import { useEffect } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function TextInvertEffect() {
  useEffect(() => {
    // Diviser le texte en lignes
    const split = new SplitText(".td-text-invert, .td-text-opacity", { type: "lines" });

    // Appliquer l'animation à chaque ligne
    split.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          scrub: 1,
          start: "top 85%",
          end: "bottom center",
        },
      });
    });

    // Nettoyage à la sortie du composant
    return () => {
      split.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return null;
}
