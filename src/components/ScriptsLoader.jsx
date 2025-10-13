import { useEffect } from "react";

export default function ScriptsLoader() {
  useEffect(() => {

    const alreadyLoaded = window.__scriptsLoaded__;
    if (alreadyLoaded) return;
    window.__scriptsLoaded__ = true;

    const scripts = [
      "/assets/js/vendor/jquery.js",
      "/assets/js/bootstrap.min.js",
      "/assets/js/jsap/gsap.js",
      "/assets/js/jsap/gsap-scroll-smoother.js",
      "/assets/js/jsap/gsap-scroll-trigger.js",
      "/assets/js/jsap/gsap-scroll-to-plugin.js",
      "/assets/js/jsap/gsap-split-text.js",
      "/assets/js/isotope.pkgd.min.js",
      "/assets/js/ion.rangeSlider.min.js",
      "/assets/js/effect-slicer.js",
      "/assets/js/imagesloaded.pkgd.min.js",
      "/assets/js/jquery.magnific-popup.min.js",
      "/assets/js/jquery.odometer.min.js",
      "/assets/js/jquery-appear.js",
      "/assets/js/swiper-bundle.min.js",
      "/assets/js/nice-select.js",
      "/assets/js/wow.js",
      "/assets/js/ajax-form.js",
       "/assets/js/main.js",
    ];

    scripts.forEach((src) => {
      const script = document.createElement("script");
      script.src = process.env.PUBLIC_URL + src;
      script.async = false;
      document.body.appendChild(script);
    });

    return () => {
      scripts.forEach((src) => {
        const script = document.querySelector(`script[src="${process.env.PUBLIC_URL + src}"]`);
        if (script) document.body.removeChild(script);
      });
    };
  }, []);

  return null;
}
