import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type"; // ⚠️ Remplace SplitText par SplitType

gsap.registerPlugin(ScrollTrigger);

export default function TitleAnimation() {
  useEffect(() => {
    // Sélectionne tous les éléments ayant la classe .td-title-anim
    const titles = gsap.utils.toArray(".td-title-anim");

    titles.forEach((title) => {
      // Split le texte en lignes et mots
      const split = new SplitType(title, { types: "lines, words" });

      gsap.set(title, { perspective: 300 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          end: "bottom 60%",
          scrub: false,
          markers: false,
          toggleActions: "play none none none",
        },
      });

      tl.from(split.lines, {
        duration: 1,
        delay: 0.3,
        opacity: 0,
        rotationX: -50,
        force3D: true,
        transformOrigin: "top center -50",
        stagger: 0.2,
      });
    });

    // Cleanup ScrollTrigger
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return null;
}
