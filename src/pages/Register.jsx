import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
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
    if (!formData.firstName) newErrors.firstName = 'Los nombres son obligatorios';
    if (!formData.lastName) newErrors.lastName = 'Los apellidos son obligatorios';
    if (!formData.username) newErrors.username = 'El nombre de usuario es obligatorio';
    if (!formData.email) newErrors.email = 'El correo electrónico es obligatorio';
    if (!formData.password) newErrors.password = 'La contraseña es obligatoria';
    if (formData.password && formData.password.length < 6) {
      newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Las contraseñas no coinciden';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    // TODO: Integrar con backend de autenticación
    console.log('Register:', formData);
  };

  const fields = [
    { id: 'reg-firstName', name: 'firstName', label: 'Nombres', type: 'text', autoComplete: 'given-name' },
    { id: 'reg-lastName', name: 'lastName', label: 'Apellidos', type: 'text', autoComplete: 'family-name' },
    { id: 'reg-username', name: 'username', label: 'Nombre de usuario', type: 'text', autoComplete: 'username' },
    { id: 'reg-email', name: 'email', label: 'Correo electrónico', type: 'email', autoComplete: 'email' },
    { id: 'reg-password', name: 'password', label: 'Contraseña', type: 'password', autoComplete: 'new-password' },
    { id: 'reg-confirmPassword', name: 'confirmPassword', label: 'Confirmar contraseña', type: 'password', autoComplete: 'new-password' },
  ];

  return (
    <div className="auth-page">
      <section className="auth-card auth-card--wide" aria-labelledby="register-heading">
        <div className="auth-card__header">
          <h1 id="register-heading" className="auth-card__title">Crear Cuenta</h1>
          <p className="auth-card__subtitle">
            Únete a StudyRoom y empieza a colaborar
          </p>
        </div>

        {/* Avatar placeholder */}
        <div className="auth-avatar" aria-label="Seleccionar avatar de perfil">
          <div className="auth-avatar__circle">
            <span className="auth-avatar__icon" aria-hidden="true">👤</span>
          </div>
          <p className="auth-avatar__text">Seleccionar avatar</p>
        </div>

        <form className="auth-form" onSubmit={handleSubmit} noValidate>
          <div className="auth-form__grid">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`auth-form__group ${
                  field.name === 'email' ? 'auth-form__group--full' : ''
                }`}
              >
                <label htmlFor={field.id} className="auth-form__label">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  id={field.id}
                  name={field.name}
                  className={`auth-form__input ${errors[field.name] ? 'auth-form__input--error' : ''}`}
                  value={formData[field.name]}
                  onChange={handleChange}
                  autoComplete={field.autoComplete}
                  aria-describedby={errors[field.name] ? `${field.id}-error` : undefined}
                  aria-invalid={errors[field.name] ? 'true' : 'false'}
                />
                {errors[field.name] && (
                  <span id={`${field.id}-error`} className="auth-form__error" role="alert">
                    {errors[field.name]}
                  </span>
                )}
              </div>
            ))}
          </div>

          <button type="submit" className="auth-form__submit" aria-label="Crear tu cuenta en StudyRoom">
            Crear cuenta
          </button>
        </form>

        <div className="auth-divider" role="separator">
          <span className="auth-divider__text">o</span>
        </div>

        <button
          type="button"
          className="auth-form__google"
          aria-label="Registrarse con tu cuenta de Google"
        >
          <span className="auth-form__google-icon" aria-hidden="true">G</span>
          Continuar con Google
        </button>

        <p className="auth-card__footer">
          ¿Ya tienes cuenta?{' '}
          <Link to="/login" className="auth-card__link">
            Inicia sesión
          </Link>
        </p>
      </section>
    </div>
  );
}
