import { useEffect } from "react";
import $ from "jquery";

export default function Loader() {
  useEffect(() => {
    const handleLoad = () => {
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    };

    // Si la page est déjà chargée
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      // Sinon, on attend l'événement load
      window.addEventListener("load", handleLoad);
    }

    // Cleanup : on retire le listener quand le composant est démonté
    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return (
    <>
    <div id="preloader" className="preloader">
        <div className="animation-preloader">
          <div className="spinner"></div>
          <div className="txt-loading">
            <span data-text-preloader="S" className="letters-loading">
              S
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="O" className="letters-loading">
              O
            </span>
            <span data-text-preloader="N" className="letters-loading">
              N
            </span>
          </div>
          <p className="text-center">Loading</p>
        </div>
        <div className="loader">
          <div className="row">
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-left">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
            <div className="col-3 loader-section section-right">
              <div className="bg"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  ); // Ce composant ne rend rien
}
