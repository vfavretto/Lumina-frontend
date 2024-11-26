import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import "../../../assets/styles/chat.css";
import PropTypes from "prop-types";

const ChatMessage = ({ text, isSent }) => (
  <div className={`message ${isSent ? "sent" : "received"}`}>
    <div className="message-content">{text}</div>
  </div>
);

ChatMessage.propTypes = {
  text: PropTypes.string.isRequired,
  isSent: PropTypes.bool.isRequired
};

const Chat = ({ chatPartner, onClose }) => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState("");
  const messagesContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const backend = import.meta.env.VITE_BACKEND_URL;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");
  const messagePollingRef = useRef(null);
  const lastMessageTimestampRef = useRef(null);
  const wasScrolledToBottomRef = useRef(true);

  const isScrolledToBottom = () => {
    const container = messagesContainerRef.current;
    if (!container) return true;
    return container.scrollHeight - container.scrollTop - container.clientHeight < 100; // 100px tolerance
  };

  const scrollToBottom = (smooth = true) => {
    const container = messagesContainerRef.current;
    const bottomElement = messagesEndRef.current;
  
    if (container && bottomElement) {
      const isAtBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 100;
  
      if (isAtBottom) {
        bottomElement.scrollIntoView({ 
          behavior: smooth ? "smooth" : "auto",
          block: "nearest"
        });
      }
    }
  };

  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      wasScrolledToBottomRef.current = isScrolledToBottom();
    };

    container.addEventListener('scroll', handleScroll);
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fetchMessages = async (forceUpdate = false) => {
    try {
      const response = await axios.get(
        `${backend}/api/v1/messages/${userId}/${chatPartner._id}`, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          params: {
            limit: 50,
            offset: 0
          }
        }
      );
      
      const sortedMessages = response.data.reverse().map(msg => ({
        text: msg.mensagem,
        sent: msg.idEmpresaEnvia === userId,
        timestamp: msg.data
      }));
  
      const latestMessageTimestamp = sortedMessages.length > 0 
        ? sortedMessages[sortedMessages.length - 1].timestamp 
        : null;
  
      if (forceUpdate || 
          !lastMessageTimestampRef.current || 
          latestMessageTimestamp !== lastMessageTimestampRef.current) {
        
        setMessages(sortedMessages);
        
        if (latestMessageTimestamp) {
          lastMessageTimestampRef.current = latestMessageTimestamp;
        }
  
        // Scroll só acontece se estiver no final ou for a primeira carga
        setTimeout(() => {
          scrollToBottom(forceUpdate); // Usa parâmetro forceUpdate para determinar animação
        }, 100);
      }
    } catch (error) {
      console.error("Erro ao buscar mensagens:", error);
    }
  };

  useEffect(() => {
    if (userId && chatPartner?._id) {
      // Busca inicial de mensagens
      fetchMessages(true);
      
      // Configura polling para verificar novas mensagens
      messagePollingRef.current = setInterval(() => {
        fetchMessages();
      }, 10000); // 10 segundos

      return () => {
        // Limpa o intervalo quando o componente for desmontado
        if (messagePollingRef.current) {
          clearInterval(messagePollingRef.current);
        }
      };
    }
  }, [chatPartner._id, userId, backend, token]);

  const handleSendMessage = async () => {
    if (inputText.trim()) {
      try {
        const messageData = {
          idEmpresaEnvia: userId,
          idEmpresaRecebe: chatPartner._id,
          mensagem: inputText
        };
  
        await axios.post(
          `${backend}/api/v1/messages`, 
          messageData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
  
        setInputText("");
        await fetchMessages(true); // Aguarda a atualização das mensagens
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
      }
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img 
              src={chatPartner.userImg} 
              alt={`Foto de ${chatPartner.nomeEmpresa}`} 
              className="chat-partner-img mr-3" 
              style={{width: "40px", height: "40px", borderRadius: "50%", marginRight: "10px"}}
            />
            <h2>{chatPartner.nomeEmpresa}</h2>
          </div>
          <button onClick={onClose} className="btn btn-sm btn-secondary">
            <i className="fa fa-times"></i>
          </button>
        </div>
      </div>

      <div 
        ref={messagesContainerRef} 
        className="chat-messages"
      >
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
  );
};

Chat.propTypes = {
  chatPartner: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    nomeEmpresa: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired
  }).isRequired,
  onClose: PropTypes.func.isRequired
};

export default Chat;