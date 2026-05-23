import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import './Room.css';

const PARTICIPANTS = [
  { id: 1, name: 'Participante 1', initial: 'P1' },
  { id: 2, name: 'Participante 2', initial: 'P2' },
  { id: 3, name: 'Participante 3', initial: 'P3' },
  { id: 4, name: 'Participante 4', initial: 'P4' },
];

const SAMPLE_MESSAGES = [
  { id: 1, sender: 'Participante 1', text: '¡Hola a todos! ¿Listos para estudiar?' },
  { id: 2, sender: 'Participante 2', text: 'Sí, empecemos con el tema 3.' },
  { id: 3, sender: 'Participante 3', text: '¿Alguien tiene las diapositivas?' },
];

export default function Room() {
  const { id } = useParams();
  const [micOn, setMicOn] = useState(true);
  const [cameraOn, setCameraOn] = useState(true);
  const [messages] = useState(SAMPLE_MESSAGES);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    // TODO: Enviar mensaje por WebSocket
    console.log('Mensaje:', chatInput);
    setChatInput('');
  };

  return (
    <div className="room">
      {/* Room header */}
      <header className="room__header">
        <h1 className="room__title">
          <span className="room__title-icon" aria-hidden="true">🎓</span>
          Sala: {id}
        </h1>
        <span className="room__participants-count" aria-label={`${PARTICIPANTS.length} participantes en la sala`}>
          👥 {PARTICIPANTS.length}
        </span>
      </header>

      <div className="room__content">
        {/* Video grid */}
        <section className="room__video-area" aria-label="Área de video de los participantes">
          <div className="room__video-grid">
            {PARTICIPANTS.map((p) => (
              <article
                key={p.id}
                className="video-tile"
                aria-label={`Video de ${p.name}`}
              >
                <div className="video-tile__placeholder">
                  <span className="video-tile__initial" aria-hidden="true">{p.initial}</span>
                </div>
                <span className="video-tile__name">{p.name}</span>
              </article>
            ))}
          </div>

          {/* Control bar */}
          <nav className="room__controls" aria-label="Controles de la sala">
            <button
              type="button"
              className={`room__control-btn ${!micOn ? 'room__control-btn--muted' : ''}`}
              onClick={() => setMicOn((prev) => !prev)}
              aria-label={micOn ? 'Silenciar micrófono' : 'Activar micrófono'}
              aria-pressed={micOn}
              title={micOn ? 'Silenciar micrófono' : 'Activar micrófono'}
            >
              {micOn ? '🎤' : '🔇'}
            </button>
            <button
              type="button"
              className={`room__control-btn ${!cameraOn ? 'room__control-btn--muted' : ''}`}
              onClick={() => setCameraOn((prev) => !prev)}
              aria-label={cameraOn ? 'Apagar cámara' : 'Encender cámara'}
              aria-pressed={cameraOn}
              title={cameraOn ? 'Apagar cámara' : 'Encender cámara'}
            >
              {cameraOn ? '📹' : '📷'}
            </button>
            <button
              type="button"
              className="room__control-btn"
              aria-label="Compartir pantalla"
              title="Compartir pantalla"
            >
              🖥️
            </button>
            <Link
              to="/dashboard"
              className="room__control-btn room__control-btn--leave"
              aria-label="Salir de la sala y volver al dashboard"
              title="Salir de la sala"
            >
              📞
            </Link>
          </nav>
        </section>

        {/* Chat sidebar */}
        <aside className="room__chat" aria-label="Chat de la sala">
          <h2 className="room__chat-title">Chat</h2>

          <div className="room__chat-messages" role="log" aria-live="polite" aria-label="Mensajes del chat">
            {messages.map((msg) => (
              <div key={msg.id} className="chat-message">
                <span className="chat-message__sender">{msg.sender}</span>
                <p className="chat-message__text">{msg.text}</p>
              </div>
            ))}
          </div>

          <form className="room__chat-form" onSubmit={handleSendMessage} aria-label="Enviar un mensaje al chat">
            <label htmlFor="chat-input" className="sr-only">
              Escribe un mensaje
            </label>
            <input
              type="text"
              id="chat-input"
              className="room__chat-input"
              placeholder="Escribe un mensaje..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              autoComplete="off"
              aria-label="Escribe un mensaje para la sala"
            />
            <button
              type="submit"
              className="room__chat-send"
              aria-label="Enviar mensaje"
            >
              ➤
            </button>
          </form>
        </aside>
      </div>
    </div>
  );
}
