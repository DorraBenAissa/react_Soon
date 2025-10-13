import React, { useRef, useEffect, useState } from "react";

const TexteScrollColor = ({ textLines, className = "" }) => {
  // textLines : tableau de 7 lignes
  const lineRefs = useRef(textLines.map(() => React.createRef()));
  const [scrollY, setScrollY] = useState(0);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleResize = () => setWindowHeight(window.innerHeight);

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Calcul de la progression du background pour chaque ligne
  const getProgress = (ref) => {
    if (!ref.current) return 0;
    const rect = ref.current.getBoundingClientRect();
    const lineTop = rect.top;
    const lineBottom = rect.bottom;

    // Calcul de la proportion de la ligne visible dans le viewport
    const visibleHeight = Math.min(lineBottom, windowHeight) - Math.max(lineTop, 0);
    const progress = Math.min(Math.max(visibleHeight / rect.height, 0), 1);
    return progress;
  };

  return (
    <div className={`td-about-title mb-30 ${className}`}>
      {textLines.map((line, index) => {
        const progress = getProgress(lineRefs.current[index]);
        return (
          <div
            key={index}
            ref={lineRefs.current[index]}
            style={{
              backgroundImage:
                "linear-gradient(to right, rgb(28,29,31) 50%, rgb(168,169,169) 50%)",
              backgroundSize: "200% 100%",
              backgroundPositionX: `${100 - progress * 100}%`,
              color: "transparent",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              display: "inline-block",
              marginBottom: "0.3em",
              transition: "background-position 0.6s linear",
            }}
          >
            {line}
          </div>
        );
      })}
    </div>
  );
};

export default TexteScrollColor;
