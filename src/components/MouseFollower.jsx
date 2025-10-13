import { useEffect, useRef } from "react";

export default function MouseFollower() {
  const followerRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;
    const dot = dotRef.current;

    if (!follower || !dot) return;

    // 🎯 Suivi du curseur
    const handleMouseMove = (e) => {
      follower.animate(
        [
          {
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out",
          },
        ],
        {
          duration: 3000,
          fill: "forwards",
        }
      );

      dot.animate(
        [
          {
            opacity: 1,
            left: `${e.clientX}px`,
            top: `${e.clientY}px`,
            easing: "ease-in-out",
          },
        ],
        {
          duration: 1500,
          fill: "forwards",
        }
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    // ✨ Hover sur les liens et boutons
    const interactiveEls = document.querySelectorAll("a, button");
    const handleHoverToggle = () => {
      document.querySelector(".mouse-follower")?.classList.toggle("hide-cursor");
    };
    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHoverToggle);
      el.addEventListener("mouseleave", handleHoverToggle);
    });

    // 🟣 Hover sur les titres
    const headingEls = document.querySelectorAll(
      "h1, h2, h3, h4, .display-one, .display-two, .display-three, .display-four, .display-five, .display-six"
    );
    const handleHeadingHover = (e) => {
      document.querySelector(".mouse-follower")?.classList.toggle("highlight-cursor-head");
      e.target.classList.toggle("highlight-cursor-head");
    };
    headingEls.forEach((el) => {
      el.addEventListener("mouseenter", handleHeadingHover);
      el.addEventListener("mouseleave", handleHeadingHover);
    });

    // 🟡 Hover sur les paragraphes
    const paragraphEls = document.querySelectorAll("p");
    const handleParaHover = (e) => {
      document.querySelector(".mouse-follower")?.classList.toggle("highlight-cursor-para");
      e.target.classList.toggle("highlight-cursor-para");
    };
    paragraphEls.forEach((el) => {
      el.addEventListener("mouseenter", handleParaHover);
      el.addEventListener("mouseleave", handleParaHover);
    });

    // 🧹 Nettoyage des événements
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverToggle);
        el.removeEventListener("mouseleave", handleHoverToggle);
      });
      headingEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleHeadingHover);
        el.removeEventListener("mouseleave", handleHeadingHover);
      });
      paragraphEls.forEach((el) => {
        el.removeEventListener("mouseenter", handleParaHover);
        el.removeEventListener("mouseleave", handleParaHover);
      });
    };
  }, []);

  return (
    <div className="mouse-follower">
      <span ref={followerRef} className="cursor-outline"></span>
      <span ref={dotRef} className="cursor-dot"></span>
    </div>
  );
}
