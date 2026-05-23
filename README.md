# 🎓 StudyHub — Salas de Estudio Colaborativas

Plataforma web de salas de estudio virtuales con video, audio y chat en tiempo real para estudiantes universitarios.

## 📋 Descripción

StudyHub permite a los estudiantes crear y unirse a salas de estudio virtuales donde pueden:
- 📹 Comunicarse por video y audio en tiempo real (WebRTC)
- 💬 Enviar mensajes instantáneos con historial persistente
- 🖥️ Compartir pantalla para presentaciones y tutorías
- 🔐 Gestionar salas privadas con control de acceso

## 🛠️ Tecnologías

| Tecnología | Uso |
|-----------|-----|
| React 19 | Frontend SPA |
| Vite | Build tool y dev server |
| React Router DOM | Navegación SPA |
| Firebase Auth | Autenticación (Email + Google) |
| Firestore | Base de datos en tiempo real |
| Socket.io | WebSockets para chat |
| WebRTC | Video/audio peer-to-peer |

## 🚀 Instalación y Ejecución

### Prerrequisitos
- Node.js >= 18
- npm >= 9

### Pasos
```bash
# Clonar el repositorio
git clone <URL_DEL_REPO>
cd miniproyecto2-proyectoIntegrador

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
src/
├── assets/          # Recursos estáticos
├── components/      # Componentes reutilizables
│   └── Layout/      # Layout principal y navegación
├── pages/           # Vistas/páginas de la aplicación
├── routes/          # Configuración de rutas SPA
├── hooks/           # Custom hooks
├── services/        # Lógica de Firebase y APIs
└── utils/           # Funciones utilitarias
```

## 🗺️ Rutas de la Aplicación

| Ruta | Página | Descripción |
|------|--------|-------------|
| `/` | Home | Landing page |
| `/login` | Login | Inicio de sesión |
| `/register` | Register | Registro de usuario |
| `/dashboard` | Dashboard | Panel de salas |
| `/room/:id` | Room | Sala de estudio |
| `/profile` | Profile | Perfil de usuario |

## ♿ Accesibilidad

Este proyecto implementa el **Principio 1: Perceptible** de WCAG 2.2, enfocado en usuarios con **baja visión**. Ver [docs/decision-wcag.md](docs/decision-wcag.md) para más detalles.

## 👥 Equipo

Ver [docs/documento-equipo.md](docs/documento-equipo.md) para roles y acuerdos.

## 📄 Licencia

Proyecto académico — Universidad del Valle, Ingeniería de Sistemas.
