import React, { useRef } from "react";

const googleReviews = [
  { name: "Alice Dupont", feedback: "Super service ! Je recommande vivement.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Marc Leclerc", feedback: "Très satisfait, l'équipe est professionnelle et réactive.", rating: 4, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Sophie Martin", feedback: "Une expérience agréable du début à la fin.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Jean Moreau", feedback: "Accueil chaleureux et service impeccable.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Claire Petit", feedback: "Équipe très professionnelle et à l'écoute.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Thomas Leroy", feedback: "Résultat au-delà de mes attentes, bravo !", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Julie Bernard", feedback: "Service rapide et efficace, je recommande.", rating: 4, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Pierre Dubois", feedback: "Très satisfait du suivi client.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Laura Fontaine", feedback: "Super communication et qualité de travail.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
  { name: "Kevin Renaud", feedback: "Très pro, résultat impeccable.", rating: 5, link: "https://www.google.com/maps/place/Soon+Chessy/reviews" },
];

const GoogleReviewsCarousel = () => {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      carouselRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const containerStyle = {
    display: "flex",
    overflowX: "auto",
    scrollBehavior: "smooth",
    gap: "1rem",
    padding: "1rem 0",
  };

  const cardStyle = {
    minWidth: "300px", // largeur pour afficher 3 cartes à la fois sur desktop
    height: "300px",
    flex: "0 0 auto",
    backgroundColor: "#e26F57",
    color: "#fff",
    borderTopRightRadius: "142px",
    borderBottomLeftRadius: "142px",
    borderTopLeftRadius: "0",
    borderBottomRightRadius: "0",
    padding: "1.5rem",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
    textDecoration: "none",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    margin: "0 0.5rem",
    border: "none",
    borderRadius: "6px",
  
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }} className="td-faq-4-wrap-right td-faq-2-wrap-right mb-30">
      <h2 className="td-testimonial-title mb-20 td-text-invert" >Avis de <span>nos clients</span></h2>
      <div style={{ marginBottom: "1rem" }}>
        <span className="td-testimonial-prev d-inline-block">
                                <svg
                                  width="31"
                                  height="24"
                                  viewBox="0 0 31 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => scroll("right")}
                                >
                                  <path
                                    d="M30.8699 12.2679L0.014612 12.4214"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M11.5445 0C11.5445 6.63283 6.38111 12 2.56383e-05 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M4.08971e-05 12C6.38112 12 11.5446 17.3671 11.5446 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </span>
                              <span className="td-testimonial-next ml-15 d-inline-block">
                                <svg
                                  width="31"
                                  height="24"
                                  viewBox="0 0 31 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  onClick={() => scroll("left")}
                                >
                                  <path
                                    d="M-0.000234102 12.2679L30.855 12.4214"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M19.3251 0C19.3251 6.63283 24.4886 12 30.8696 12"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                  <path
                                    d="M30.8696 12C24.4885 12 19.3251 17.3671 19.3251 24"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeMiterlimit="10"
                                  />
                                </svg>
                              </span>
        {/* <button style={buttonStyle} onClick={() => scroll("left")}>◀</button>
        <button style={buttonStyle} onClick={() => scroll("right")}>▶</button> */}
      </div>
      <div style={containerStyle} ref={carouselRef}>
        {googleReviews.map((review, index) => (
          <a
            key={index}
            href={review.link}
            target="_blank"
            rel="noopener noreferrer"
            style={cardStyle}
          >
            <p style={{ fontStyle: "italic" }}>"{review.feedback}"</p>
            <p style={{ fontWeight: "bold" }}>- {review.name}</p>
            <p>{"⭐".repeat(review.rating)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewsCarousel;