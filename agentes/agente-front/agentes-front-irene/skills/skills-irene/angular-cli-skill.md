# Skill: Angular CLI y Arquitectura Feature-Driven

## Cuándo usarla
Cuando el plan requiera generar nuevos componentes, servicios, interfaces o rutas en el proyecto frontend de Angular.

## Comandos Permitidos
- Generar un componente standalone: `ng generate component features/[tema]/components/[nombre] --standalone`
- Generar un servicio: `ng generate service features/[tema]/services/[nombre]`
- Generar un modelo/interface: `ng generate interface features/[tema]/models/[nombre] --type=model`
- Generar un pipe/directiva compartida: `ng generate pipe shared/pipes/[nombre] --standalone`

## Reglas de Ejecución
- Asegúrate de respetar estrictamente la estructura de carpetas dictada en el Agente Frontend (features y shared).
- Tras generar los archivos, ábrelos y aplica las reglas de reactividad (Signals), constructores con `inject()` y HTML con `@if` / `@for`.