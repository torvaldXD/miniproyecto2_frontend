import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const SAMPLE_ROOMS = [
  { id: 'sala-calculo', name: 'Cálculo Diferencial', participants: 4, emoji: '📐' },
  { id: 'sala-programacion', name: 'Programación Web', participants: 6, emoji: '💻' },
  { id: 'sala-fisica', name: 'Física Mecánica', participants: 3, emoji: '⚡' },
];

export default function Dashboard() {
  const [rooms] = useState(SAMPLE_ROOMS);
  const [joinCode, setJoinCode] = useState('');

  const handleCreateRoom = () => {
    // TODO: Integrar con backend
    console.log('Crear nueva sala');
  };

  const handleJoinRoom = (e) => {
    e.preventDefault();
    if (!joinCode.trim()) return;
    // TODO: Integrar con backend
    console.log('Unirse a sala:', joinCode);
  };

  return (
    <div className="dashboard">
      <section className="dashboard__header" aria-labelledby="dashboard-heading">
        <h1 id="dashboard-heading" className="dashboard__title">
          Mis Salas de Estudio
        </h1>
        <p className="dashboard__subtitle">
          Gestiona tus salas o únete a una nueva sesión de estudio
        </p>
      </section>

      {/* Actions bar */}
      <section className="dashboard__actions" aria-label="Acciones de sala">
        <button
          type="button"
          className="dashboard__btn dashboard__btn--create"
          onClick={handleCreateRoom}
          aria-label="Crear una nueva sala de estudio"
        >
          <span aria-hidden="true">＋</span> Crear Sala
        </button>

        <form className="dashboard__join" onSubmit={handleJoinRoom} role="search" aria-label="Unirse a sala con código">
          <label htmlFor="join-code" className="sr-only">
            Código de sala
          </label>
          <input
            type="text"
            id="join-code"
            className="dashboard__join-input"
            placeholder="Código de sala..."
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            aria-label="Ingresa el código de la sala"
          />
          <button
            type="submit"
            className="dashboard__btn dashboard__btn--join"
            aria-label="Unirse a la sala con el código ingresado"
          >
            Unirse
          </button>
        </form>
      </section>

      {/* Room cards grid */}
      {rooms.length > 0 ? (
        <section className="dashboard__rooms" aria-label="Lista de salas de estudio">
          <div className="dashboard__grid" role="list">
            {rooms.map((room) => (
              <article key={room.id} className="room-card" role="listitem" aria-labelledby={`room-${room.id}-name`}>
                <div className="room-card__emoji" aria-hidden="true">{room.emoji}</div>
                <h2 id={`room-${room.id}-name`} className="room-card__name">{room.name}</h2>
                <div className="room-card__meta">
                  <span className="room-card__badge" aria-label={`${room.participants} participantes`}>
                    <span aria-hidden="true">👥</span> {room.participants} participantes
                  </span>
                </div>
                <Link
                  to={`/room/${room.id}`}
                  className="room-card__enter"
                  aria-label={`Entrar a la sala ${room.name}`}
                >
                  Entrar a la sala
                </Link>
              </article>
            ))}
          </div>
        </section>
      ) : (
        <section className="dashboard__empty" aria-label="Sin salas disponibles">
          <div className="dashboard__empty-content">
            <span className="dashboard__empty-icon" aria-hidden="true">📭</span>
            <h2 className="dashboard__empty-title">No tienes salas aún</h2>
            <p className="dashboard__empty-text">
              Crea una nueva sala o únete a una existente con un código de invitación.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
