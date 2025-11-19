import React, { useState } from "react";
import FaqVisuel from "./../assets/img/faq/Faq_visuel.webp";
// import '../assets/css/animate.css';
// import '../assets/css/bootstrap.min.css';

const faqItems = [
  {
    question: "Comment démarrer un projet avec Soon Agency ?",
    answer: "Démarrer un projet avec Soon Agency est simple et structuré. Nous commençons par une réunion découverte pour comprendre vos besoins, vos objectifs et votre vision. Ensuite, nous réalisons un audit stratégique pour analyser votre marché, vos concurrents et vos cibles. Enfin, nous vous présentons une proposition créative et un plan d’action détaillé, incluant les étapes, les délais et les budgets, afin que votre projet démarre sur des bases claires et transparentes."
  },
  {
    question: "Comment fonctionne une agence de communication comme Soon Agency ?",
    answer: "Soon Agency est un partenaire stratégique qui accompagne les entreprises dans la conception et la diffusion de leur message. Nous combinons créativité et stratégie, en proposant des services tels que : création d’identités visuelles, conception de supports marketing, gestion des réseaux sociaux, campagnes publicitaires et communication digitale. Nous travaillons en étroite collaboration avec nos clients pour garantir cohérence, visibilité et impact sur leurs cibles."
  },
  {
    question: "Comment créer une identité de marque distinctive avec Soon Agency ?",
    answer: "Créer une identité de marque distinctive avec Soon Agency passe par plusieurs étapes clés. Nous commençons par analyser votre marché, vos concurrents et votre public cible afin de définir le positionnement idéal. Ensuite, nous déterminons l’ADN de votre marque, en précisant ses valeurs, sa mission, sa personnalité et sa promesse. Puis, nous créons l’univers visuel et verbal de votre marque, incluant le logo, les couleurs, les typographies, le ton de communication et les messages clés. Enfin, nous veillons à appliquer cette identité de manière cohérente sur tous vos supports, garantissant une image homogène et reconnaissable. Cette démarche permet à votre marque de se démarquer et de créer un lien fort avec votre audience."
  },
  {
    question: "Pourquoi faire appel à une agence de communication est essentiel pour le succès de votre entreprise",
    answer: "Faire appel à Soon Agency vous permet de bénéficier de compétences spécialisées, de créativité et d’une vision stratégique. Nous vous accompagnons pour définir clairement la position de votre entreprise sur le marché, créer des messages cohérents et impactants, développer votre notoriété et fidéliser vos clients. Nous optimisons vos actions marketing grâce à des stratégies adaptées et mesurables. En collaborant avec Soon Agency, vous gagnez du temps, de l’efficacité et une communication professionnelle, ce qui augmente considérablement vos chances de succès."
  },
  {
    question: "Quels services Soon Agency propose-t-elle pour booster votre communication ?",
    answer: "Soon Agency propose une gamme complète de services pour accompagner votre entreprise dans sa stratégie de communication. Nous créons des identités visuelles fortes, développons des contenus marketing engageants, gérons votre présence digitale sur les réseaux sociaux et réalisons des campagnes publicitaires performantes. Notre approche allie créativité et stratégie afin d’assurer la cohérence de votre communication, d’améliorer votre visibilité et de renforcer votre relation avec votre audience. Grâce à nos solutions sur mesure, chaque action contribue directement au succès de votre entreprise."
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null); // index de l'accordéon ouvert

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index); // ouvre ou ferme
  };

  return (
    <div className="td-faq-2-area pt-160">
      <div className="container">
        <div className="row">

          {/* Image */}
          <div className="col-lg-6">
            <div className="td-faq-2-thumb mb-30 fix td-rounded-10">
              <img
                data-speed=".9"
                className="td-rounded-10"
                src={FaqVisuel}
                alt="FAQ visuel"
              />
            </div>
          </div>

          {/* FAQ */}
          <div className="col-lg-6">
            <div className="td-faq-4-wrap-right td-faq-2-wrap-right mb-30">
              <h2 className="td-testimonial-title mb-20 td-text-invert" style={{ color: "#e26F57" }}>
                Vos questions,<span>nos réponses</span>
              </h2>

              <div className="td-faq-4-accordion">
                <div className="accordion" id="accordionExample">
                  {faqItems.map((item, index) => (
                    <div className="accordion-items" key={index}>
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-buttons ${openIndex === index ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          aria-expanded={openIndex === index}
                          style={{ textDecoration: 'none' }} // <<< empêche le soulignement
                        >
                          {item.question}
                          <span className="plus-icon"></span> {/* seul symbole */}
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${openIndex === index ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          <p>{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default FaqSection;
