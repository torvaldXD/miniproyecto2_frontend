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
          Sala: {id}
        </h1>
      </header>

      <div className="room__content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2rem', color: 'var(--color-text-bright)' }}>Próximamente...</h2>
        <Link to="/dashboard" className="navbar__btn navbar__btn--primary" style={{ marginTop: '2rem', textDecoration: 'none' }}>
          Volver al Dashboard
        </Link>
      </div>
    </div>
  );
}
