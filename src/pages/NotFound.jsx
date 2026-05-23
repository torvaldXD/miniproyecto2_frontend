import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <div className="not-found" role="alert">
      <section className="not-found__content" aria-labelledby="not-found-heading">
        <h1 className="not-found__code" aria-hidden="true">404</h1>
        <h2 id="not-found-heading" className="not-found__title">Página no encontrada</h2>
        <p className="not-found__text">
          Lo sentimos, la página que buscas no existe o fue movida.
        </p>
        <Link
          to="/"
          className="not-found__link"
          aria-label="Volver a la página de inicio"
        >
          ← Volver al inicio
        </Link>
      </section>
    </div>
  );
}
