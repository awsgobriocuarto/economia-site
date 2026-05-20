import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

/**
 * Helper function to format the current time as HH:MM
 */
const getFormattedTime = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
};

export default function ChatBubble() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([]);
  
  const chatBodyRef = useRef(null);

  // Initialize chat with the welcome message
  useEffect(() => {
    setMessages([
      {
        id: 'welcome',
        sender: 'bot',
        text: 'Hola, Soy tu asistente virtual y estoy aqui para para ayudarte. Por favor selecciona una opcion que coincida con tu consulta.',
        timestamp: getFormattedTime(),
        showOptions: true,
      },
    ]);
  }, []);

  // Scroll to bottom whenever messages list changes or chat is opened
  useEffect(() => {
    if (isOpen && chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  // Toggle chat window visibility
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Handle Quick Reply options click
  const handleOptionClick = (option) => {
    const userTime = getFormattedTime();
    
    // 1. Add User message to the chat
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: option.label,
      timestamp: userTime,
    };

    // Remove options from previous message
    setMessages((prev) => 
      prev.map(msg => msg.showOptions ? { ...msg, showOptions: false } : msg)
    );

    setMessages((prev) => [...prev, userMsg]);

    // 2. Handle redirection or bot response
    setTimeout(() => {
      const botTime = getFormattedTime();

      if (option.action === 'redirect') {
        // Add a friendly bot confirmation message
        const botRedirectMsg = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: `Te estoy redirigiendo a la sección: ${option.label.split(' ').slice(1).join(' ')}...`,
          timestamp: botTime,
        };
        setMessages((prev) => [...prev, botRedirectMsg]);

        // Redirect to target path
        setTimeout(() => {
          router.push(option.path);
          setIsOpen(false); // Close chat on redirect
        }, 1000);
        
      } else if (option.action === 'contact') {
        // Bot replies with contact info and displays "Volver al Menú Principal"
        const botContactMsg = {
          id: `bot-${Date.now()}`,
          sender: 'bot',
          text: 'Puedes comunicarte con la Secretaría de Economía a través de los siguientes canales:\n📞 Teléfono: 0800-444-5454\n✉️ Email: economia@riocuarto.gov.ar\n⏰ Horario: Lunes a Viernes de 7:30 a 13:30 hs.\n\n¿Deseas realizar otra consulta?',
          timestamp: botTime,
          showBackToMenu: true,
        };
        setMessages((prev) => [...prev, botContactMsg]);
      }
    }, 600);
  };

  // Reset to main menu
  const handleBackToMenu = () => {
    const userTime = getFormattedTime();
    const botTime = getFormattedTime();

    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: 'Volver al Menú Principal',
      timestamp: userTime,
    };

    // Remove back to menu option from previous message
    setMessages((prev) => 
      prev.map(msg => msg.showBackToMenu ? { ...msg, showBackToMenu: false } : msg)
    );

    setMessages((prev) => [...prev, userMsg]);
    
    setTimeout(() => {
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Por favor selecciona una de las siguientes opciones para continuar:',
        timestamp: botTime,
        showOptions: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  // Handle custom text input submission
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userText = inputValue.trim();
    const userTime = getFormattedTime();
    setInputValue('');

    // Remove options/menus from previous messages so user doesn't click old ones
    setMessages((prev) => 
      prev.map(msg => ({ ...msg, showOptions: false, showBackToMenu: false }))
    );

    // Add user message
    const userMsg = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: userText,
      timestamp: userTime,
    };

    setMessages((prev) => [...prev, userMsg]);

    // Bot response for free text input
    setTimeout(() => {
      const botTime = getFormattedTime();
      const botMsg = {
        id: `bot-${Date.now()}`,
        sender: 'bot',
        text: 'Para procesar tu consulta de forma ágil, por favor selecciona alguna de las opciones predefinidas en el menú.',
        timestamp: botTime,
        showOptions: true,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 800);
  };

  // Definition of the quick reply options
  const quickReplies = [
    { label: '💳 Consultar Pagos y Deudas', action: 'redirect', path: '/pagos-y-deudas' },
    { label: '📄 Guía de Trámites', action: 'redirect', path: '/tramites-y-servicios/guia-de-tramites' },
    { label: '🔍 Buscar en la Web', action: 'redirect', path: '/buscar' },
    { label: '🏛️ Información Institucional', action: 'redirect', path: '/institucional' },
    { label: '📞 Contacto / Ayuda', action: 'contact' },
  ];

  // Helper to render message text with line breaks
  const renderMessageText = (text) => {
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div className="chat-bubble-wrapper">
      {/* Chat Trigger Button (Always rendered, classes control CSS visibility animation) */}
      <button 
        className={`chat-trigger ${isOpen ? 'is-hidden' : ''}`}
        onClick={toggleChat}
        title="Abrir chat de soporte"
        aria-label="Abrir chat de soporte"
      >
        <span>💬</span>
      </button>

      {/* Chat Window Container (Responsive) */}
      <div className={`chat-window ${isOpen ? 'is-active' : ''}`}>
        {/* Chat Header (Orange Gradient) */}
        <div className="chat-header">
          <div className="chat-header-info">
            <div className="avatar">🏛️</div>
            <div>
              <h6 className="title">Asistente Virtual</h6>
              <small className="subtitle">Secretaría de Economía</small>
            </div>
          </div>
          <button 
            type="button" 
            className="close-btn" 
            onClick={toggleChat}
            aria-label="Cerrar chat"
          >
            ✕
          </button>
        </div>

        {/* Chat Messages Area (Smooth Scroll & Custom Scrollbar) */}
        <div className="chat-body" ref={chatBodyRef}>
          {messages.map((msg) => (
            <div key={msg.id} className="chat-msg-group">
              {/* Message Row */}
              <div className={`chat-msg-row ${msg.sender === 'user' ? 'msg-user' : 'msg-bot'}`}>
                <div className="chat-message">
                  <p>{renderMessageText(msg.text)}</p>
                  <span className="chat-msg-time">
                    {msg.timestamp}
                  </span>
                </div>
              </div>

              {/* Quick Replies Menu (No line breaking on layout) */}
              {msg.sender === 'bot' && msg.showOptions && (
                <div className="quick-replies">
                  {quickReplies.map((reply, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="quick-reply-btn"
                      onClick={() => handleOptionClick(reply)}
                    >
                      {reply.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Back to Menu Option */}
              {msg.sender === 'bot' && msg.showBackToMenu && (
                <div className="quick-replies">
                  <button
                    type="button"
                    className="quick-reply-btn"
                    onClick={handleBackToMenu}
                    style={{ borderStyle: 'dashed' }}
                  >
                    🔄 Volver al Menú Principal
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Chat Footer Area (Input) */}
        <div className="chat-footer">
          <input
            type="text"
            className="chat-input"
            placeholder="Escribe tu mensaje aquí..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSendMessage(e);
              }
            }}
          />
          <button 
            className="send-btn" 
            type="button"
            onClick={handleSendMessage}
            disabled={!inputValue.trim()}
            aria-label="Enviar mensaje"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
