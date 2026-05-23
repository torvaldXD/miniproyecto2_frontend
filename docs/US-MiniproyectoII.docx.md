# **Backlog del Mini proyecto 2**  {#backlog-del-mini-proyecto-2}

# **(US-01 a US-15) — con criterios de aceptación (Gherkin) e Historias técnicas habilitadoras (TS)**  {#(us-01-a-us-15)-—-con-criterios-de-aceptación-(gherkin)-e-historias-técnicas-habilitadoras-(ts)}

**Índice**

**[Backlog del Mini proyecto 2	1](#backlog-del-mini-proyecto-2)**

[**(US-01 a US-15) — con criterios de aceptación (Gherkin) e Historias técnicas habilitadoras (TS)	1**](#\(us-01-a-us-15\)-—-con-criterios-de-aceptación-\(gherkin\)-e-historias-técnicas-habilitadoras-\(ts\))

[**Convenciones (aplican a todas las historias)	2**](#convenciones-\(aplican-a-todas-las-historias\))

[**Historias de usuarios	2**](#historias-de-usuarios)

[US-01 — Registro Manual de Usuario	2](#us-01-—-registro-manual-de-usuario)

[US-02 — Registro con Google (Flujo Username Obligatorio)	3](#us-02-—-registro-con-google-\(flujo-username-obligatorio\))

[US-03 — Inicio de Sesión (Login)	3](#us-03-—-inicio-de-sesión-\(login\))

[US-04 — Ver y Editar Perfil de Usuario	4](#us-04-—-ver-y-editar-perfil-de-usuario)

[US-05 — Eliminar Cuenta de Usuario	4](#us-05-—-eliminar-cuenta-de-usuario)

[US-06 — Crear y Visualizar Salas Propias	5](#us-06-—-crear-y-visualizar-salas-propias)

[US-07 — Editar y Eliminar Salas	5](#us-07-—-editar-y-eliminar-salas)

[US-08 — Unirse a una Sala	6](#us-08-—-unirse-a-una-sala)

[US-09 — Visualizar Entorno de Sala	6](#us-09-—-visualizar-entorno-de-sala)

[US-10 — Mensajería Instantánea	6](#us-10-—-mensajería-instantánea)

[US-11 — Historial de Chat	7](#us-11-—-historial-de-chat)

[US-12 — Transmisión de Audio y Video	7](#us-12-—-transmisión-de-audio-y-video)

[US-13 — Control de Estados AV	7](#us-13-—-control-de-estados-av)

[US-14 — Compartir Pantalla	7](#us-14-—-compartir-pantalla)

[US-15 — Accesibilidad (WCAG 2.2)	8](#us-15-—-accesibilidad-\(wcag-2.2\))

[**Historias Técnicas Habilitadoras (TS) Refinadas	8**](#historias-técnicas-habilitadoras-\(ts\))

[TS-01 — Configuración de Firebase Auth y Perfiles en Firestore	8](#ts-01-—-configuración-de-firebase-auth-y-perfiles-en-firestore)

[TS-02 — Infraestructura de WebSockets y Modelado de Salas/Chat	8](#ts-02-—-infraestructura-de-websockets-y-modelado-de-salas/chat)

[TS-03 — Implementación de Lógica WebRTC (Signaling Server)	9](#ts-03-—-implementación-de-lógica-webrtc-\(signaling-server\))

[TS-04 — Auditoría y Configuración de Accesibilidad Base Frontend	9](#ts-04-—-auditoría-y-configuración-de-accesibilidad-base-frontend)

[**Reglas para que el equipo cree sus propias historias técnicas como forma de organización	9**](#reglas-para-que-el-equipo-cree-sus-propias-historias-técnicas-como-forma-de-organización)

* **Historias de Usuario (US):**  describen funcionalidades del producto desde la  perspectiva del usuario final (“Como estudiante, quiero…, para…”). Son el “qué” del producto y se validan con criterios de aceptación (Gherkin) observables en la interfaz y el comportamiento del sistema.   
* **Historias Técnicas Habilitadoras (TS):**  describen trabajo técnico necesario para poder construir, integrar, asegurar calidad o entregar las historias de usuario (por ejemplo, autenticación, modelo de datos, contrato de API, despliegue). Las TS **no agregan valor directo al usuario por sí solas**, pero habilitan que las US funcionen end-to-end y cumplan el Definition of Done. 

En su tablero de gestión del proceso de desarrollo las US representan el valor funcional del MVP y las TS representan la infraestructura y calidad mínima para hacerlo posible; ambas se planifican por sprint y deben cerrar con evidencia verificable (PR, endpoints, capturas y/o enlaces) en el Documento Único de Evidencias.

# **Convenciones (aplican a todas las historias)** {#convenciones-(aplican-a-todas-las-historias)}

* **DoD del curso (obligatorio):** una historia está “Done” cuando:   
  1. `funciona end-to-end (FE ↔ API ↔ BD),`   
  2. incluye estados y mensajes requeridos,   
  3. cumple mínimos de accesibilidad WCAG 2.2 definidos, y   
  4. tiene evidencia publicada (link/captura/PR) en el Documento Único de Evidencias.  
* **Evidencia mínima por historia:** enlace a PR/commit \+ 1 captura de éxito \+ 1 captura de error controlado (cuando aplique).

# **Historias de usuarios** {#historias-de-usuarios}

## **US-01 — Registro Manual de Usuario**  {#us-01-—-registro-manual-de-usuario}

Como estudiante nuevo, quiero registrarme ingresando mis nombres y apellidos, un nombre de usuario único, avatar, correo y contraseña, para crear una identidad en la plataforma.

* **Escenario: Registro exitoso**  
  * **Dado** que estoy en la pantalla de registro manual  
  * **Cuando** ingreso nombres, apellidos, username único, avatar, correo institucional y contraseña válida  
  * **Entonces** el sistema crea mi cuenta en Firebase Auth y guarda mi perfil completo en Firestore.  
* **Escenario: Username ya ocupado**  
  * **Dado** que ingreso mis datos de registro  
  * **Cuando** el username ingresado ya existe en la base de datos  
  * **Entonces** el sistema muestra un mensaje de error visual y me impide continuar hasta cambiarlo.

## **US-02 — Registro con Google (Flujo Username Obligatorio)**  {#us-02-—-registro-con-google-(flujo-username-obligatorio)}

Como estudiante, quiero registrarme con mi cuenta de Google, para agilizar el proceso, pero pudiendo elegir un nombre de usuario único.

* **Escenario: Primer ingreso con Google**  
  * **Dado** que selecciono "Continuar con Google" por primera vez  
  * **Cuando** Google me autentica exitosamente  
  * **Entonces** el sistema toma mi nombre, avatar, correo y me redirige obligatoriamente a una pantalla para elegir mi username.  
* **Escenario: Finalización de perfil Google**  
  * **Dado** que confirmo un username válido tras usar Google  
  * **Entonces** el sistema completa mi perfil en Firestore y me lleva al dashboard.

## **US-03 — Inicio de Sesión (Login)**  {#us-03-—-inicio-de-sesión-(login)}

Como estudiante registrado, quiero autenticarme en la plataforma, para acceder a mis funciones de estudio.

* **Escenario: Login manual exitoso**  
  * **Dado** que tengo una cuenta activa  
  * **Cuando** ingreso mi correo y contraseña correctos  
  * **Entonces** accedo al dashboard principal.  
* **Escenario: Login con Google recurrente**  
  * **Dado** que inicio sesión con una cuenta de Google que ya tiene username  
  * **Entonces** el sistema me lleva directo al dashboard sin pedir username adicional.

## **US-04 — Ver y Editar Perfil de Usuario**  {#us-04-—-ver-y-editar-perfil-de-usuario}

Como estudiante autenticado, quiero ver y modificar mis datos personales (nombre, apellido, avatar, username), para mantener mi información actualizada.

* **Escenario: Edición exitosa**  
  * **Dado** que estoy en la pantalla "Mi Perfil"  
  * **Cuando** modifico mis datos y guardo  
  * **Entonces** el sistema actualiza Firestore y muestra un mensaje de éxito.  
* **Escenario: Colisión de Username al editar**  
  * **Dado** que intento cambiar mi username por uno que ya usa otro estudiante  
  * **Entonces** el sistema bloquea la acción y muestra un error de disponibilidad.  
* **Escenario: Colisión de correo al editar**  
  * **Dado** que intento cambiar mi correo por uno que ya existe en la BD  
  * **Entonces** el sistema bloquea la acción y muestra un error de disponibilidad.

## **US-05 — Eliminar Cuenta de Usuario**  {#us-05-—-eliminar-cuenta-de-usuario}

Como estudiante, quiero poder eliminar mi cuenta definitivamente, para tener control sobre mi privacidad.

* **Escenario: Eliminación con advertencia**  
  * **Dado** que presiono "Eliminar cuenta" en mi perfil  
  * **Cuando** confirmo en el modal de advertencia crítica  
  * **Entonces** el sistema borra mis datos de Firestore, me elimina de Firebase Auth y me redirige al Login.

## **US-06 — Crear y Visualizar Salas Propias**  {#us-06-—-crear-y-visualizar-salas-propias}

Como anfitrión, quiero crear salas de estudio y verlas en mi panel, para organizar mis espacios.

* **Escenario: Creación exitosa**  
  * **Dado** que ingreso un nombre válido en "Crear Sala" y confirmo  
  * **Entonces** el sistema genera un ID único, guarda la sala y me redirige a su interior como Administrador.  
* **Escenario: Dashboard vacío y con salas**  
  * **Dado** que ingreso al dashboard  
  * **Entonces** veo un mensaje amigable si no tengo salas, o una lista con los nombres e IDs de las salas que he creado.

## **US-07 — Editar y Eliminar Salas**  {#us-07-—-editar-y-eliminar-salas}

Como anfitrión, quiero editar el nombre de mis salas o eliminarlas, para gestionar su ciclo de vida.

* **Escenario: Edición y Eliminación**  
  * **Dado** que soy el creador de la sala  
  * **Cuando** edito su nombre o confirmo su eliminación  
  * **Entonces** los cambios se reflejan inmediatamente en la base de datos y en el dashboard.  
* **Escenario: Restricción a invitados**  
  * **Dado** que soy un participante (no creador) en una sala  
  * **Entonces** los botones de editar/eliminar están ocultos y no puedo acceder a esas rutas.

## **US-08 — Unirse a una Sala**  {#us-08-—-unirse-a-una-sala}

Como invitado, quiero ingresar a una sala usando su ID, para unirme a una sesión.

* **Escenario: Unión exitosa**  
  * **Dado** que ingreso un ID válido y confirmo  
  * **Entonces** el sistema me conecta y me da acceso a la interfaz de la sala.  
* **Escenario: ID inexistente**  
  * **Dado** que ingreso un ID que no existe  
  * **Entonces** el sistema me muestra un error indicando que la sala no fue encontrada.

## **US-09 — Visualizar Entorno de Sala** {#us-09-—-visualizar-entorno-de-sala}

Como participante, quiero ver la cuadrícula de usuarios y los estados de sus dispositivos, para saber quiénes están en la sesión.

* **Escenario: Grid y estados**  
  * **Dado** que estoy dentro de la sala  
  * **Entonces** visualizo una cuadrícula dinámica con los videos/avatares y veo claramente si alguien tiene el micrófono o cámara apagados.

## **US-10 — Mensajería Instantánea**  {#us-10-—-mensajería-instantánea}

Como participante, quiero enviar y recibir mensajes síncronos, para comunicarme sin interrumpir el audio.

* **Escenario: Sincronización en tiempo real**  
  * **Dado** que envío un mensaje en la sala  
  * **Entonces** aparece inmediatamente para todos los presentes haciendo auto-scroll.

## **US-11 — Historial de Chat** {#us-11-—-historial-de-chat}

Como participante, quiero que el chat se guarde, para no perder el contexto si me desconecto.

* **Escenario: Persistencia y carga**  
  * **Dado** que ingreso a una sala con actividad previa  
  * **Entonces** el sistema carga los mensajes anteriores ordenados cronológicamente desde la base de datos.

## **US-12 — Transmisión de Audio y Video**  {#us-12-—-transmisión-de-audio-y-video}

Como estudiante, quiero transmitir mi video y audio, para interactuar de forma natural.

* **Escenario: Conexión AV síncrona**  
  * **Dado** que permito el acceso a cámara y micrófono  
  * **Entonces** mi video se transmite vía WebRTC a los demás participantes con baja latencia.

## **US-13 — Control de Estados AV**  {#us-13-—-control-de-estados-av}

Como usuario, quiero mutear mi micrófono o apagar mi cámara, para gestionar mi privacidad.

* **Escenario: Cambio de estado**  
  * **Dado** que presiono "Mute" o "Apagar Cámara"  
  * **Entonces** mi transmisión se corta y los demás ven el ícono correspondiente tachado.

## **US-14 — Compartir Pantalla**  {#us-14-—-compartir-pantalla}

Como expositor, quiero compartir mi pantalla, para mostrar documentos al equipo.

* **Escenario: Streaming de escritorio**  
  * **Dado** que inicio la función de compartir pantalla  
  * **Entonces** el sistema reemplaza mi flujo de video por el de mi escritorio para todos vía WebRTC.

## **US-15 — Accesibilidad (WCAG 2.2)**  {#us-15-—-accesibilidad-(wcag-2.2)}

El equipo de trabajo debe realizarla.

# **Historias Técnicas Habilitadoras (TS)**  {#historias-técnicas-habilitadoras-(ts)}

## **TS-01 — Configuración de Firebase Auth y Perfiles en Firestore** {#ts-01-—-configuración-de-firebase-auth-y-perfiles-en-firestore}

* **Propósito:** Configurar Firebase, habilitar Auth (Email/Google) y modelar la colección `users` en Firestore. Implementar validaciones de unicidad de username y la lógica CRUD (Crear, Leer, Actualizar, Eliminar) para los perfiles.  
* **Habilita a:** US-01, US-02, US-03, US-04, US-05.  
* **Criterio Done:** Flujos de registro, login, actualización y borrado de cuenta operativos. Las rutas privadas rechazan usuarios no logueados.

## **TS-02 — Infraestructura de WebSockets y Modelado de Salas/Chat** {#ts-02-—-infraestructura-de-websockets-y-modelado-de-salas/chat}

* **Propósito:** Modelar `rooms` y `messages` en Firestore. Levantar un servidor Node.js/TypeScript (Socket.io) para sincronizar estados de sala, presencias de usuarios y enrutamiento del texto en tiempo real.  
* **Habilita a:** US-06, US-07, US-08, US-10, US-11.  
* **Criterio Done:** Salas operativas (CRUD en base de datos). Los usuarios pueden unirse validando el ID. Mensajes de texto enviados por un cliente son emitidos al resto por WebSockets y guardados en Firestore.

## **TS-03 — Implementación de Lógica WebRTC (Signaling Server)** {#ts-03-—-implementación-de-lógica-webrtc-(signaling-server)}

* **Propósito:** Utilizar el servidor de WebSockets existente para intercambiar ofertas SDP y candidatos ICE entre pares. Orquestar la malla de conexiones P2P y sincronizar los eventos de cambio de estado de media (mute/unmute).  
* **Habilita a:** US-09, US-12, US-13, US-14.  
* **Criterio Done:** Al menos dos navegadores logran establecer conexión P2P estable sin errores de ICE. Streams de audio, video y pantalla se renderizan en el DOM.

## **TS-04 — Auditoría y Configuración de Accesibilidad Base Frontend**  {#ts-04-—-auditoría-y-configuración-de-accesibilidad-base-frontend}

El equipo de trabajo debe realizarla.

# **Reglas para que el equipo cree sus propias historias técnicas como forma de organización** {#reglas-para-que-el-equipo-cree-sus-propias-historias-técnicas-como-forma-de-organización}

1. Toda TS nueva debe indicar: **“Habilita a: US-\_\_”** (al menos una).  
2. Una TS **no reemplaza** una US: no vale como “ya trabajamos” si no habilita entrega funcional.  
3. TS nuevas deben ser **pequeñas y cerrables en 1 sprint** (o partirse).  
4. TS no debe introducir funcionalidades fuera del alcance (p. ej., “IA de recomendaciones”, “calendario con sincronización Google”, etc.).  
5. TS debe cumplir DoD: evidencia verificable (PR/links/capturas) y efecto demostrable (por ejemplo, endpoint funcionando, deploy accesible).