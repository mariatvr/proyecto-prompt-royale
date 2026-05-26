# Skill: Estándares de Angular Moderno

Cada vez que generes o modifiques un componente en Angular:
1. **Componentes Standalone:** Todos los componentes deben ser `standalone: true`.
2. **Nueva Sintaxis de Control de Flujo:** - Prohibido usar `*ngIf`. Usa siempre la estructura `@if () { ... } @else { ... }`.
   - Prohibido usar `*ngFor`. Usa siempre `@for (item of lista; track item.id) { ... }`.
3. **Optimización:** Importa en el array `imports: []` solo los módulos estrictamente necesarios (como `CommonModule` o `FormsModule`).