import React, { useRef } from "react";

const googleReviews = [
  { name: "Andre Alves", feedback: "Un grand merci pour tout ce que vous avez fait pour nous.", rating: 5, link: "https://www.google.com/maps/contrib/106704755462100378601/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@43.8230304,-3.1745428,6z/data=!4m6!1m5!8m4!1e1!2s106704755462100378601!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Sandy DE MONTEIRO", feedback: "Nous les recommandons vivement et avec grand plaisir.", rating: 4, link: "https://www.google.com/maps/contrib/104420522809584899948/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@46.4863349,6.1438244,7z/data=!4m6!1m5!8m4!1e1!2s104420522809584899948!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Sandrine Roussel", feedback: "Une équipe de confiance sur qui nous pouvons toujours compter !", rating: 5, link: "https://www.google.com/maps/contrib/110232247415938396766/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@48.8540002,2.7719286,14z/data=!4m6!1m5!8m4!1e1!2s110232247415938396766!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Jokic Milijana", feedback: "Un service irréprochable et une équipe réactive. ", rating: 5, link: "https://www.google.com/maps/contrib/109329766859142879273/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@42.6803838,7.7576878,5z/data=!4m6!1m5!8m4!1e1!2s109329766859142879273!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Olivier HOTTON", feedback: "A recommander les yeux fermés et au plaisir de retravailler bientôt avec vous.", rating: 5, link: "https://www.google.com/maps/contrib/100399946152399735387/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@48.859038,2.774579,17z/data=!4m6!1m5!8m4!1e1!2s100399946152399735387!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Stéphane LE NY", feedback: "Une équipe professionnelle et créative, bravo !", rating: 5, link: "https://www.google.com/maps/contrib/111245001159934686514/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@48.8206046,2.6975555,13z/data=!4m6!1m5!8m4!1e1!2s111245001159934686514!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Natacha Merel", feedback: "Équipe au top ! Très réactive et passionnée.", rating: 4, link: "https://www.google.com/maps/contrib/111116305519039486441/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@47.3786099,2.4007429,7z/data=!4m6!1m5!8m4!1e1!2s111116305519039486441!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Alain TIBO", feedback: "Très satisfait du suivi client.", rating: 5, link: "https://www.google.com/maps/contrib/114349809329636169329/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@47.6375914,3.4808593,8z/data=!4m6!1m5!8m4!1e1!2s114349809329636169329!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Laure Anis", feedback: "Super partenaire pour la création de notre signalétique Entreprise.", rating: 5, link: "https://www.google.com/maps/contrib/100988142400216903759/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@40.2417576,-2.6010696,5z/data=!4m6!1m5!8m4!1e1!2s100988142400216903759!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
  { name: "Alain Khau", feedback: "Une agence de communication professionnelle, étincelante, majestueuse.", rating: 5, link: "https://www.google.com/maps/contrib/111750586735177562632/place/ChIJC9mXS7kE5kcRlBRPbbGREHM/@25.080426,53.2783538,4z/data=!4m6!1m5!8m4!1e1!2s111750586735177562632!3m1!1e1?hl=fr-FR&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D" },
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
    minWidth: "500px", // largeur pour afficher 3 cartes à la fois sur desktop
    height: "350px",
    flex: "0 0 auto",
    backgroundColor: "#ffffffff",
    color: "#000000ff",
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
    <div style={{ maxWidth: "1800px", margin: "0 auto", textAlign: "center" }} className="td-faq-4-wrap-right td-faq-2-wrap-right mb-30">
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
      <svg width="100" height="72" viewBox="0 0 100 72" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.4286 41.8731H1V0.99707H41.8571V42.6371L27.9531 70.457H8.76046L22.3231 43.3201L23.0463 41.8731H21.4286Z" stroke="#0A1119" stroke-opacity="0.3" stroke-width="2"></path>
        <path d="M78.5711 41.8731H58.1426V0.99707H98.9997V42.6371L85.0957 70.457H65.903L79.4656 43.3201L80.1888 41.8731H78.5711Z" stroke="#0A1119" stroke-opacity="0.3" stroke-width="2"></path>
      </svg>
      <div class="col-lg-4">
                                {/* <div class="td-testimonial-5-ratings-wrap mb-45 d-flex align-items-center">
                                    <h3 class="title mb-0 mr-20">4.82</h3>
                                    <div>
                                        <span class="ratings mb-10">
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                            <i class="fa-solid fa-star-sharp"></i>
                                        </span>
                                        <span class="review">Client review</span>
                                    </div>
                                </div> */}
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