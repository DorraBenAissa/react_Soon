import { useEffect } from "react";

// Si tu as installé gsap via npm
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function SmoothScrollController() {
  useEffect(() => {
    const wrapper = document.getElementById("smooth-wrapper");
    const content = document.getElementById("smooth-content");

    if (!wrapper || !content) return;

    // 🔹 Enregistrement des plugins
    gsap.registerPlugin(ScrollTrigger, ScrollSmoother, ScrollToPlugin);

    // 🔹 Configuration GSAP
    gsap.config({ nullTargetWarn: false });

    // 🔹 Création du ScrollSmoother
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 2,
      effects: true,
      smoothTouch: 0.1,
      normalizeScroll: false,
      ignoreMobileResize: true,
    });

    // 🧹 Cleanup à la sortie du composant
    return () => {
      smoother && smoother.kill();
    };
  }, []);

  return null; // Composant invisible
}
