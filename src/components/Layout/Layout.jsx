import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import './Layout.css';

export default function Layout() {
  return (
    <div className="layout">
      <a className="skip-link" href="#main-content">
        Saltar al contenido principal
      </a>

      <header className="layout__header" role="banner">
        <Navbar />
      </header>

      <main id="main-content" className="layout__main" role="main">
        <Outlet />
      </main>

      <footer className="layout__footer" role="contentinfo">
        <div className="footer__content">
          <p>&copy; {new Date().getFullYear()} StudyRoom. Todos los derechos reservados.</p>
          <p className="footer__tagline">Plataforma de salas de estudio colaborativas</p>
        </div>
      </footer>
    </div>
  );
}
