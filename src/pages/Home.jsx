import { Link } from 'react-router-dom';
import './Home.css';

const features = [
  {
    id: 'video',
    icon: '🎥',
    title: 'Video en Tiempo Real',
    description:
      'Conéctate cara a cara con tus compañeros usando tecnología WebRTC de última generación. Sin retrasos, sin complicaciones.',
  },
  {
    id: 'chat',
    icon: '💬',
    title: 'Chat Instantáneo',
    description:
      'Envía mensajes, comparte enlaces y colabora en tiempo real con el sistema de mensajería integrado en cada sala.',
  },
  {
    id: 'rooms',
    icon: '🔒',
    title: 'Salas Privadas',
    description:
      'Crea y gestiona tus propias salas de estudio. Controla quién entra y mantén tus sesiones organizadas.',
  },
];

export default function Home() {
  return (
    <div className="home">
      {/* Animated background elements */}
      <div className="home__bg-effects" aria-hidden="true">
        <div className="home__orb home__orb--1"></div>
        <div className="home__orb home__orb--2"></div>
        <div className="home__orb home__orb--3"></div>
      </div>

      {/* Hero Section */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero__content">
          <h1 id="hero-heading" className="hero__title">
            Salas de Estudio{' '}
            <span className="hero__title-accent">Colaborativas</span>
          </h1>
          <p className="hero__subtitle">
            Conecta, estudia y colabora en tiempo real con tus compañeros.
            La plataforma diseñada para potenciar tu aprendizaje universitario.
          </p>
          <div className="hero__actions">
            <Link
              to="/register"
              className="hero__cta hero__cta--primary"
              aria-label="Comenzar ahora — Crear una cuenta"
            >
              Comenzar ahora
              <span className="hero__cta-arrow" aria-hidden="true">→</span>
            </Link>
            <Link
              to="/login"
              className="hero__cta hero__cta--secondary"
              aria-label="Iniciar sesión en tu cuenta existente"
            >
              Ya tengo cuenta
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features" aria-labelledby="features-heading">
        <h2 id="features-heading" className="features__heading">
          Todo lo que necesitas para estudiar mejor
        </h2>
        <div className="features__grid" role="list">
          {features.map((feature) => (
            <article
              key={feature.id}
              className="feature-card"
              role="listitem"
              aria-labelledby={`feature-${feature.id}-title`}
            >
              <div className="feature-card__icon" aria-hidden="true">
                {feature.icon}
              </div>
              <h3 id={`feature-${feature.id}-title`} className="feature-card__title">
                {feature.title}
              </h3>
              <p className="feature-card__description">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
