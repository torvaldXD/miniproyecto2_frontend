import { Link } from 'react-router-dom';
import './Home.css';



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


    </div>
  );
}
