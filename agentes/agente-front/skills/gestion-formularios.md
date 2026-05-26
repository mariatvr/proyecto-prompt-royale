# Skill: Formularios e Interactividad en Memoria

Cada vez que el usuario te pida crear un formulario interactivo:
1. **Tipado Estricto:** Define siempre una interfaz (`interface`) en TypeScript para el modelo de datos (ej. `interface Perro`).
2. **Two-Way Binding:** Para formularios locales simples, prioriza el uso de `[(ngModel)]` para enlazar los inputs con el objeto de TypeScript, asegurándote de incluir `FormsModule` en los imports.
3. **Mutación Inmutable:** Al añadir un elemento a un array, no uses `.push()`. Usa el operador de propagación para que Angular detecte el cambio de estado inmediatamente:
   `this.lista = [...this.lista, nuevoElemento];`