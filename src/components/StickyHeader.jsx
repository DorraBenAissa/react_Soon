import { useEffect } from "react";

export default function StickyHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById("header-sticky");
      if (!header) return;

      if (window.scrollY < 20) {
        header.classList.remove("header-sticky");
      } else {
        header.classList.add("header-sticky");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Exécuter une première fois au montage
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
