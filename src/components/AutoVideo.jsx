import { useState } from "react";
import AutoPopUp from "../assets/video/AdobeStock_1533669189_Video_HD_Preview.mov";

const AutoVideo = ({ width = 160, height = 285 }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Bonjour 👋 Je suis votre assistant virtuel ! Cliquez sur la vidéo pour discuter." },
  ]);
  const [input, setInput] = useState("");

  // Réponses automatiques du robot
  const getBotReply = (msg) => {
    const message = msg.toLowerCase();

    if (message.includes("bonjour") || message.includes("salut"))
      return "Bonjour 😊 Comment puis-je vous aider aujourd’hui ?";
    if (message.includes("prix"))
      return "Nos tarifs varient selon les projets. Voulez-vous que je vous envoie un devis ?";
    if (message.includes("contact"))
      return "Vous pouvez nous écrire via le formulaire de contact sur notre site 🌐.";
    if (message.includes("merci"))
      return "Avec plaisir 😄 !";
    return "Je n’ai pas bien compris 🤖 Pouvez-vous reformuler ?";
  };

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg = { from: "user", text: input };
    const botMsg = { from: "bot", text: getBotReply(input) };

    setMessages([...messages, userMsg, botMsg]);
    setInput("");
  };

  return (
    <>
      {!isVisible && (
        <button
          onClick={() => setIsVisible(true)}
          style={{
            position: "fixed",
            right: "20px",
            bottom: "40px",
            zIndex: 100,
            color: "#e26F57",
          }}
        >
          X
        </button>
      )}

      {isVisible && (
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "40px",
            width: `${width}px`,
            height: `${height}px`,
            zIndex: 99,
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
            }}
            onClick={() => setIsChatOpen(true)}
          >
            <source src={AutoPopUp} type="video/mp4" />
          </video>

          {/* Bouton fermer vidéo */}
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <i className="fa-solid fa-xmark" style={{ color: "#ffffff" }}></i>
          </button>

          {/* Bulle Hello */}
          <h5
            style={{
              position: "absolute",
              top: "5px",
              left: "10px",
              backgroundColor: "#e26F57",
              color: "#ffffff",
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
                width: 0,
                height: 0,
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                borderTop: "10px solid #e26F57",
              }}
            ></span>
          </h5>

          {/* Chatbot */}
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
                borderRadius: "15px",
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
                  X
                </button>
              </div>

              {/* Messages */}
              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "5px",
                }}
              >
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    style={{
                      textAlign: msg.from === "user" ? "right" : "left",
                      margin: "5px 0",
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: msg.from === "user" ? "#e26F57" : "#f1f1f1",
                        color: msg.from === "user" ? "#fff" : "#000",
                        padding: "8px 12px",
                        borderRadius: "15px",
                        display: "inline-block",
                        maxWidth: "80%",
                      }}
                    >
                      {msg.text}
                    </span>
                  </div>
                ))}
              </div>

              {/* Input */}
              <form onSubmit={handleSend} style={{ display: "flex", gap: "5px" }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Écrivez un message..."
                  style={{
                    flex: 1,
                    padding: "8px",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                  }}
                />
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#e26F57",
                    color: "#fff",
                    border: "none",
                    borderRadius: "10px",
                    padding: "8px 12px",
                    cursor: "pointer",
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
