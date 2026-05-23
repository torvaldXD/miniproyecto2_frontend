import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Hash, Users, Settings } from 'lucide-react';
import './Dashboard.css';

const SAMPLE_ROOMS = [
  { id: 'ABC123', name: 'Matemáticas Avanzadas', participants: 5, role: 'Propietario' },
  { id: 'DEF456', name: 'Proyecto de Programación', participants: 3, role: 'Propietario' },
  { id: 'GHI789', name: 'Estudio de Algoritmos', participants: 8, role: '' },
];

export default function Dashboard() {
  const [rooms] = useState(SAMPLE_ROOMS);

  const handleCreateRoom = () => {
    console.log('Crear nueva sala');
  };

  const handleJoinRoom = () => {
    console.log('Unirse a sala con ID');
  };

  return (
    <div className="dashboard">
      <header className="dashboard__header">
        <h1 className="dashboard__title">Bienvenido, Juan</h1>
        <p className="dashboard__subtitle">
          Gestiona tus salas de estudio o únete a nuevas sesiones
        </p>
      </header>

      <section className="dashboard__actions">
        <button
          type="button"
          className="dashboard__btn dashboard__btn--create"
          onClick={handleCreateRoom}
        >
          <Plus size={20} /> Crear Nueva Sala
        </button>

        <button
          type="button"
          className="dashboard__btn dashboard__btn--join"
          onClick={handleJoinRoom}
        >
          <Hash size={20} /> Unirse con ID
        </button>
      </section>

      <h2 className="dashboard__section-title">Mis Salas</h2>

      <section className="dashboard__rooms">
        <div className="dashboard__grid">
          {rooms.map((room) => (
            <article key={room.id} className="room-card">
              <div className="room-card__header">
                <h3 className="room-card__name">{room.name}</h3>
                {room.role === 'Propietario' && (
                  <span className="room-card__role-badge">Propietario</span>
                )}
              </div>
              
              <div className="room-card__id">
                # ID: {room.id}
              </div>

              <div className="room-card__participants">
                <Users size={16} /> {room.participants} participantes
              </div>

              <div className="room-card__footer">
                <Link to={`/room/${room.id}`} className="room-card__enter-btn">
                  Entrar
                </Link>
                <button className="room-card__settings-btn" aria-label="Ajustes de sala">
                  <Settings size={20} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
