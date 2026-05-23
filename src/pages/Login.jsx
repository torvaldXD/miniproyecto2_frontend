import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: Integrar con backend de autenticación
    console.log('Login:', formData);
  };

  return (
    <div className="auth-page">
      <section className="auth-card" aria-labelledby="login-heading">
        <div className="auth-card__header">
          <h1 id="login-heading" className="auth-card__title">Iniciar Sesión</h1>
          <p className="auth-card__subtitle">
            Bienvenido de vuelta a StudyRoom
          </p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__group">
            <label htmlFor="login-email" className="auth-form__label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="login-email"
              name="email"
              className={`auth-form__input ${errors.email ? 'auth-form__input--error' : ''}`}
              value={formData.email}
              onChange={handleChange}
              autoComplete="email"
              aria-describedby={errors.email ? 'login-email-error' : undefined}
              aria-invalid={errors.email ? 'true' : 'false'}
            />
            {errors.email && (
              <span id="login-email-error" className="auth-form__error" role="alert">
                {errors.email}
              </span>
            )}
          </div>

          <div className="auth-form__group">
            <label htmlFor="login-password" className="auth-form__label">
              Contraseña
            </label>
            <input
              type="password"
              id="login-password"
              name="password"
              className={`auth-form__input ${errors.password ? 'auth-form__input--error' : ''}`}
              value={formData.password}
              onChange={handleChange}
              autoComplete="current-password"
              aria-describedby={errors.password ? 'login-password-error' : undefined}
              aria-invalid={errors.password ? 'true' : 'false'}
            />
            {errors.password && (
              <span id="login-password-error" className="auth-form__error" role="alert">
                {errors.password}
              </span>
            )}
          </div>

          <button type="submit" className="auth-form__submit" aria-label="Iniciar sesión con correo y contraseña">
            Iniciar Sesión
          </button>
        </form>

        <div className="auth-divider" role="separator">
          <span className="auth-divider__text">o</span>
        </div>

        <button
          type="button"
          className="auth-form__google"
          aria-label="Iniciar sesión con tu cuenta de Google"
        >
          <span className="auth-form__google-icon" aria-hidden="true">G</span>
          Continuar con Google
        </button>

        <p className="auth-card__footer">
          ¿No tienes cuenta?{' '}
          <Link to="/register" className="auth-card__link">
            Regístrate
          </Link>
        </p>
      </section>
    </div>
  );
}
