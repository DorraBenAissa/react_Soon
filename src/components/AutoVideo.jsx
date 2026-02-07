import { useState, useRef, useEffect } from "react";
import AutoPopUp from "../assets/video/AdobeStock_1533669189_Video_HD_Preview.mov";

const AutoVideo = ({ width = 160, height = 285 }) => {
  const [isVisible, setIsVisible] = useState(false); // ⛔ Fermé au chargement
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Bonjour 👋 Je suis Léa, votre assistante virtuelle ! Cliquez sur la vidéo pour discuter avec moi.",
    },
  ]);
  const [input, setInput] = useState("");
  const chatRef = useRef(null);

  // 📌 Auto-scroll dans le chat
  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 📌 Ouvre en scroll bas, ferme en scroll haut
  useEffect(() => {
    let lastScroll = 0;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      const scrollingDown = currentScroll > lastScroll;
      const scrollingUp = currentScroll < lastScroll;

      const atBottom =
        window.innerHeight + currentScroll >=
        document.body.offsetHeight - 200;

      // 🔽 Ouvre quand on atteint le bas
      if (scrollingDown && atBottom) {
        setIsVisible(true);
      }

      // 🔼 Ferme quand on remonte assez
      if (scrollingUp && currentScroll < document.body.offsetHeight - 800) {
        setIsVisible(false);
        setIsChatOpen(false); // ferme aussi le chat
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 🤖 Réponses automatiques
  const getBotReply = (msg) => {
    const message = msg.toLowerCase();
    if (message.includes("bonjour") || message.includes("salut"))
      return "Bonjour 😊 Ravie de vous revoir ! Comment puis-je vous aider aujourd’hui ?";
    if (message.includes("aide") || message.includes("question"))
      return "Bien sûr 💡 Posez-moi votre question, je suis là pour vous aider.";
    if (message.includes("prix") || message.includes("tarif") || message.includes("devis"))
      return "Nos tarifs varient selon le projet 💼. Voulez-vous une estimation gratuite ?";
    if (message.includes("contact") || message.includes("email"))
      return "Vous pouvez nous contacter via notre site 🌐 ou continuer ici.";
    if (message.includes("site") || message.includes("portfolio"))
      return "Souhaitez-vous que je vous partage le lien du site ?";
    if (message.includes("merci"))
      return "Avec plaisir 😄 !";
    if (message.includes("nom") || message.includes("qui es-tu"))
      return "Je m’appelle Léa 🤖, votre assistante virtuelle !";
    return "Je n’ai pas bien compris 🤔 Pouvez-vous reformuler ?";
  };

  // ✉️ Envoi message
  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const botMsg = { from: "bot", text: getBotReply(input) };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <>
      {/* Bouton + pour rouvrir */}
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          style={{
            position: "fixed",
            right: "14px",
            bottom: "30px",
            zIndex: 100,
            color: "#e26F57",
            background: "white",
            borderRadius: "50%",
            border: "2px solid #e26F57",
            width: "40px",
            height: "40px",
            fontWeight: "bold",
          }}
        >
          +
        </button>
      )}

      {/* AUTO VIDEO */}
      {isVisible && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "96px",
            width: `${width}px`,
            height: `${height}px`,
            zIndex: 99,
            transition: "all 0.4s ease-in-out",
            transform: isVisible ? "scale(1)" : "scale(0.8)",
            opacity: isVisible ? 1 : 0,
          }}
        >
          <video
            autoPlay
            loop
            controls
            width={width}
            height={height}
            style={{
              borderTopLeftRadius: "60px",
              borderBottomRightRadius: "60px",
              cursor: "pointer",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            onClick={() => setIsChatOpen(true)}
          >
            <source src={AutoPopUp} type="video/mp4" />
          </video>

          {/* Fermer la vidéo */}
          <button
            onClick={() => setIsVisible(false)}
            style={{
              position: "absolute",
              top: "5px",
              right: "5px",
              zIndex: 101,
              backgroundColor: "#e26F57",
              border: "none",
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              cursor: "pointer",
              color: "#fff",
              fontWeight: "bold",
            }}
          >
            ×
          </button>

          {/* Bulle Hello */}
          <h5
            style={{
              position: "absolute",
              top: "5px",
              left: "10px",
              backgroundColor: "#e26F57",
              color: "#fff",
              padding: "10px 15px",
              borderRadius: "20px",
              zIndex: 102,
              maxWidth: "150px",
              textAlign: "center",
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          >
            Hello
            <span
              style={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid #e26F57",
              }}
            ></span>
          </h5>

          {/* CHAT */}
          {isChatOpen && (
            <div
              style={{
                position: "absolute",
                bottom: `${height + 20}px`,
                right: 0,
                width: "300px",
                height: "400px",
                backgroundColor: "#fff",
                border: "2px solid #e26F57",
                borderRadius: "25px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
                zIndex: 103,
                padding: "10px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ textAlign: "right" }}>
                <button
                  onClick={() => setIsChatOpen(false)}
                  style={{
                    border: "none",
                    background: "transparent",
                    cursor: "pointer",
                    fontSize: "16px",
                    color: "#e26F57",
                  }}
                >
                  ✕
                </button>
              </div>

              <div
                ref={chatRef}
                style={{ flex: 1, overflowY: "auto", padding: "5px" }}
              >
                {messages.map((msg, i) => (
                  <div key={i} style={{ textAlign: msg.from === "user" ? "right" : "left", margin: "5px 0" }}>
                    <span
                      style={{
                        backgroundColor: msg.from === "user" ? "#e26F57" : "#f1f1f1",
                        color: msg.from === "user" ? "#fff" : "#000",
                        padding: "8px 12px",
                        borderRadius: "18px",
                        display: "inline-block",
                        maxWidth: "80%",
                      }}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}

                {isTyping && (
                  <div style={{ textAlign: "left", margin: "5px 0" }}>
                    <span
                      style={{
                        backgroundColor: "#f1f1f1",
                        color: "#555",
                        padding: "8px 12px",
                        borderRadius: "18px",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "3px",
                        fontStyle: "italic",
                      }}
                    >
                      Léa est en train d’écrire...
                    </span>
                  </div>
                )}
              </div>

              <form onSubmit={handleSend} style={{ display: "flex", gap: "6px" }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écrivez un message..."
                  style={{
                    flex: 1,
                    padding: "10px 12px",
                    borderRadius: "25px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#e26F57",
                    color: "#fff",
                    border: "none",
                    borderRadius: "25px",
                    padding: "8px 16px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Envoyer
                </button>
              </form>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default AutoVideo;
