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
    backgroundColor: "#4285F4",
    color: "#fff",
    cursor: "pointer",
  };

  return (
    <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
      <h2>Avis de nos clients</h2>
      <div style={{ marginBottom: "1rem" }}>
        <button style={buttonStyle} onClick={() => scroll("left")}>◀</button>
        <button style={buttonStyle} onClick={() => scroll("right")}>▶</button>
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
