import React, { useState, useRef, useEffect } from "react";
import "../../../assets/styles/chat.css";

const ChatMessage = ({ text, isSent }) => (
  <div className={`message ${isSent ? "sent" : "received"}`}>
    <div className="message-content">{text}</div>
  </div>
);

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { text: inputText, sent: true }]);
      setInputText("");

      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: "Mensagem recebida de exemplo", sent: false },
        ]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-page">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Chat</h2>
        </div>

        <div className="chat-messages">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              text={message.text}
              isSent={message.sent}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div className="chat-input-container">
          <div className="chat-input-wrapper">
            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Digite sua mensagem..."
              className="message-input"
            />
            <button onClick={handleSendMessage} className="chat-send-button">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
