# Skill: Estructuras Simétricas con CSS Grid

Cada vez que diseñes una página completa o un formulario:
1. Usa siempre un contenedor envolvente con `max-width: 1200px; margin: 0 auto;`.
2. Para formularios limpios, distribuye los elementos usando:
   `display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;`
3. Prohibido usar márgenes negativos o posiciones absolutas para cuadrar cajas.