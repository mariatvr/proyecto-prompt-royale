# Contrato de Modelos de Datos y API - NexoCanino

Este documento es la única fuente de verdad para el intercambio de datos entre Angular y Spring Boot. Las variables deben coincidir en nombre, tipo y formato exacto.

## Base URL Local
- Frontend SPA: http://localhost:4200
- Backend RESTful API: http://localhost:8080/api

## 1. Entidad: Especialidad Canina (GET /api/especialidades)
| Propiedad JSON | Tipo Java | Tipo TypeScript | Descripción |
| :--- | :--- | :--- | :--- |
| `id` | `Long` | `number` | ID único de la especialidad |
| `titulo` | `String` | `string` | Nombre (ej: "Niños en Hospitales") |
| `descripcion` | `String` | `string` | Descripción del soporte emocional |
| `icono` | `String` | `string` | Identificador del icono a renderizar |

## 2. Entidad: Mascota / Perro (GET /api/mascotas?especialidadId=X)
| Propiedad JSON | Tipo Java | Tipo TypeScript | Descripción |
| :--- | :--- | :--- | :--- |
| `id` | `Long` | `number` | ID único del perro de terapia |
| `especialidadId` | `Long` | `number` | ID de la especialidad asociada |
| `nombre` | `String` | `string` | Nombre del perro |
| `raza` | `String` | `string` | Raza canina |
| `edad` | `int` | `number` | Edad en años |
| `anosExperiencia` | `int` | `number` | Años de experiencia en terapias |
| `descripcionPersonalidad`| `String` | `string` | Breve biografía del perro |
| `imagenUrl` | `String` | `string` | Ruta estática de la foto |

## 3. Recepción de Formularios: SolicitudDTO (POST /api/contacto)
Se usa unificado para los formularios del Home (Servicios y Voluntariado).
| Propiedad JSON | Tipo Java | Tipo TypeScript | Valores / Descripción |
| :--- | :--- | :--- | :--- |
| `tipoFormulario` | `String` | `string` | "SOLICITUD_SERVICIO" o "VOLUNTARIADO" |
| `nombreContacto` | `String` | `string` | Nombre de la entidad o persona |
| `email` | `String` | `string` | Correo electrónico de contacto |
| `telefono` | `String` | `string` | Teléfono de contacto |
| `tipoServicio` | `String` | `string` | Nombre de la especialidad elegida |
| `mensaje` | `String` | `string` | Cuerpo o detalles del mensaje |