import { useState } from 'react';
import './Profile.css';

export default function Profile() {
  const [formData, setFormData] = useState({
    firstName: 'Juan',
    lastName: 'Pérez',
    username: 'juanperez',
    email: 'juan.perez@universidad.edu',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    // TODO: Integrar con backend
    console.log('Guardar perfil:', formData);
  };

  const handleDelete = () => {
    // TODO: Confirmar y eliminar cuenta
    console.log('Eliminar cuenta');
  };

  const initial = formData.firstName ? formData.firstName.charAt(0).toUpperCase() : '?';

  return (
    <div className="profile-page">
      <section className="profile-card" aria-labelledby="profile-heading">
        <h1 id="profile-heading" className="profile-card__title">Mi Perfil</h1>

        {/* Avatar */}
        <div className="profile-avatar" aria-label="Avatar de perfil">
          <div className="profile-avatar__circle">
            <span className="profile-avatar__initial" aria-hidden="true">{initial}</span>
          </div>
          <p className="profile-avatar__name">
            {formData.firstName} {formData.lastName}
          </p>
          <p className="profile-avatar__username">@{formData.username}</p>
        </div>

        {/* Form */}
        <form className="profile-form" onSubmit={handleSave} noValidate>
          <div className="profile-form__grid">
            <div className="profile-form__group">
              <label htmlFor="profile-firstName" className="profile-form__label">
                Nombres
              </label>
              <input
                type="text"
                id="profile-firstName"
                name="firstName"
                className="profile-form__input"
                value={formData.firstName}
                onChange={handleChange}
                autoComplete="given-name"
                aria-label="Tus nombres"
              />
            </div>

            <div className="profile-form__group">
              <label htmlFor="profile-lastName" className="profile-form__label">
                Apellidos
              </label>
              <input
                type="text"
                id="profile-lastName"
                name="lastName"
                className="profile-form__input"
                value={formData.lastName}
                onChange={handleChange}
                autoComplete="family-name"
                aria-label="Tus apellidos"
              />
            </div>

            <div className="profile-form__group">
              <label htmlFor="profile-username" className="profile-form__label">
                Nombre de usuario
              </label>
              <input
                type="text"
                id="profile-username"
                name="username"
                className="profile-form__input"
                value={formData.username}
                onChange={handleChange}
                autoComplete="username"
                aria-label="Tu nombre de usuario"
              />
            </div>

            <div className="profile-form__group">
              <label htmlFor="profile-email" className="profile-form__label">
                Correo electrónico
              </label>
              <input
                type="email"
                id="profile-email"
                name="email"
                className="profile-form__input profile-form__input--readonly"
                value={formData.email}
                readOnly
                aria-label="Tu correo electrónico (no editable)"
                aria-readonly="true"
              />
            </div>
          </div>

          <div className="profile-form__actions">
            <button
              type="submit"
              className="profile-form__btn profile-form__btn--save"
              aria-label="Guardar los cambios de tu perfil"
            >
              Guardar cambios
            </button>
            <button
              type="button"
              className="profile-form__btn profile-form__btn--danger"
              onClick={handleDelete}
              aria-label="Eliminar tu cuenta permanentemente"
            >
              Eliminar cuenta
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
