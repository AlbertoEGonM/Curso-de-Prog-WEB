# Curso de programación web

Bitácora de práctica con la página «Curso de programación». El proyecto reúne un formulario y una lista de tareas que iremos convirtiendo en una aplicación web.

## Clase 1 — HTML semántico y formularios

- **Tema:** estructura del documento, `header`, `main`, `section`, listas y formularios.
- **Práctica:** crear la página con dos campos obligatorios, un botón de envío y una lista de ejemplo.
- **Resultado:** al pulsar una etiqueta, Chrome enfocó el campo asociado; al intentar enviar el formulario vacío, el navegador mostró la validación de `required`.
- **Idea clave:** `id` identifica el elemento, `for` vincula la etiqueta con el campo y `name` identifica el dato al enviarlo.

## Clase 2 — CSS: selectores, colores y espaciado

- **Tema:** hoja de estilos externa, selectores de elemento, color, fondo y alineación.
- **Práctica:** dar estilo a la página y al formulario; comparar `margin` con `margin-bottom` y cambiar el `padding` de `16px` a `32px`.
- **Resultado:** los estilos se vieron en Chrome y el formulario aprovechó más ancho al quitar sus márgenes laterales.
- **Idea clave:** `padding` añade espacio interior; `margin`, espacio exterior. Un solo valor de `padding` se aplica a los cuatro lados.

## Clase 3 — Selectores de clase

- **Tema:** seleccionar elementos concretos y reutilizar estilos con `class`.
- **Práctica:** aplicar `bienvenida` a dos párrafos y destacar un elemento de la lista con `tarea_destacada`.
- **Resultado:** ambos párrafos compartieron estilo y solo la tarea con la clase de destaque cambió de apariencia.
- **Idea clave:** `li` selecciona todos los elementos de lista de ese tipo; un selector de clase selecciona los elementos que tengan esa clase. En el ejemplo de los párrafos, `.bienvenida` tuvo más especificidad que `p`.

## Clase 4 — Combinar clases y representar estados

- **Tema:** clases base, clases de estado y orden de las reglas CSS.
- **Práctica:** aplicar `tarea` a tres elementos y añadir `completada` a la primera y a la tercera. Invertir el orden de las reglas para observar el efecto.
- **Resultado:** dos tareas quedaron verdes y tachadas; la pendiente conservó el azul marino. Al invertir las reglas, cambió el color y se mantuvo el tachado.
- **Idea clave:** los nombres de clase se separan con espacios dentro de un mismo atributo. Entre las dos reglas de igual especificidad del ejercicio, la última declaración gana solo en la propiedad que entra en conflicto.

## Clase 5 — Modelo de caja y ancho adaptable

- **Tema:** `content-box`, `border-box`, `width`, `max-width` y márgenes automáticos.
- **Práctica:** comparar los modelos de caja, centrar `main` con un máximo de `900px` y ajustar la caja de prueba con `max-width: 100%`.
- **Resultado:** con `border-box`, los diagramas de Chrome mostraron un ancho total de `300px` en la vista amplia y de `264px` en la vista de `320px`. En la vista estrecha el texto pasó a dos líneas y la caja dejó de sobresalir de `main`.
- **Idea clave:** para calcular el ancho se cuentan los bordes y el padding de izquierda y derecha. `border-box` los incluye en el ancho declarado; `max-width` permite reducirlo cuando falta espacio.

## Clase 6 — Flexbox y formulario adaptable

- **Tema:** hijos directos de un contenedor Flexbox, `display: flex`, `flex-direction`, `gap` y consultas de medios.
- **Práctica:** agrupar cada etiqueta con su campo y organizar los dos grupos y el botón en columna por defecto y en fila desde `800px`.
- **Resultado:** las capturas de Chrome muestran la columna a `799px` y la fila a `800px`. La consulta de medios cambia solo la dirección y el `gap: 16px` se mantiene desde la regla base. Queda por comprobar el foco al pulsar las etiquetas.
- **Idea clave:** Flexbox distribuye los hijos directos. Dentro de `@media` basta con declarar las propiedades que deben cambiar.

## Clase 7 — JavaScript: DOM y eventos · próxima clase

- **Próximo ejercicio:** escuchar el envío del formulario y añadir una tarea a la lista desde JavaScript.
