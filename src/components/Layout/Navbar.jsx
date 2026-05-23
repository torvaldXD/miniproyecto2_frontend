import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Layout.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="navbar" aria-label="Navegación principal">
      <div className="navbar__container">
        <Link to="/" className="navbar__brand" aria-label="StudyRoom — Ir al inicio">
          <span className="navbar__logo" aria-hidden="true">📚</span>
          <span className="navbar__brand-text">StudyRoom</span>
        </Link>

        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--active' : ''}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
          aria-label={menuOpen ? 'Cerrar menú de navegación' : 'Abrir menú de navegación'}
          type="button"
        >
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
          <span className="navbar__hamburger-line" aria-hidden="true"></span>
        </button>

        <div
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}
          role="menubar"
        >
          <ul className="navbar__links" role="none">
            <li role="none">
              <NavLink
                to="/"
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
                role="menuitem"
                end
              >
                Inicio
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/dashboard"
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
                role="menuitem"
              >
                Dashboard
              </NavLink>
            </li>
            <li role="none">
              <NavLink
                to="/profile"
                className={({ isActive }) => `navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                onClick={closeMenu}
                role="menuitem"
              >
                Perfil
              </NavLink>
            </li>
          </ul>

          <div className="navbar__auth">
            <Link
              to="/login"
              className="navbar__btn navbar__btn--ghost"
              onClick={closeMenu}
              aria-label="Iniciar sesión en tu cuenta"
            >
              Iniciar Sesión
            </Link>
            <Link
              to="/register"
              className="navbar__btn navbar__btn--primary"
              onClick={closeMenu}
              aria-label="Crear una cuenta nueva"
            >
              Registrarse
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
