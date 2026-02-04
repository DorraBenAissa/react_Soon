import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ServicePins() {
  const location = useLocation();

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 991px)", () => {
      const panels = document.querySelectorAll(".td-service-pin-item-panel");
      const container = document.querySelector(".td-service-pin-items");

      if (!panels.length || !container) return;

      const tl = gsap.timeline();

      panels.forEach((section) => {
        tl.to(section, {
          scrollTrigger: {
            trigger: section,
            pin: section,
            scrub: 1,
            start: "top top",
            end: "bottom 100%",
            endTrigger: container,
            pinSpacing: false,
          },
        });
      });

      // 1️⃣ frame suivante
      requestAnimationFrame(() => {
        ScrollTrigger.refresh(true);
      });

      // 2️⃣ après chargement images
      window.addEventListener("load", ScrollTrigger.refresh);

      // 3️⃣ refresh différé (sécurité SPA)
      const t = setTimeout(() => {
        ScrollTrigger.refresh(true);
      }, 300);

      return () => {
        clearTimeout(t);
        window.removeEventListener("load", ScrollTrigger.refresh);
        tl.kill();
        ScrollTrigger.getAll().forEach(st => st.kill());
      };
    });

    return () => mm.kill();
  }, [location.pathname]);

  return null;
}
