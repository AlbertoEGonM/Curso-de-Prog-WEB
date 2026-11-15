const formulario = document.querySelector("form");
const lista_tareas = document.querySelector("#lista-tareas");
const tarea = document.querySelector("#tarea_curso");
const descripcion = document.querySelector("#descripcion");
   
formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();
  console.log("Tarea", tarea.value);
  console.log("Descripción", descripcion.value);
  const lista = document.createElement("li");
  lista.textContent = `${tarea.value} - ${descripcion.value}`;
  lista_tareas.append(lista);
  lista.classList.add("tarea");
});