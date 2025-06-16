//Cambiar el Contenido del titulo principal
const titulo = document.getElementById("titulo-principal");
titulo.textContent="¡Hola Esta es mi primera página dinámica!";

//Seleccionar el botón para agregar tareas
const botonAgregar = document.getElementById("btn-agregar");

//Evento para agregar una nueva tarea a la lista
botonAgregar.addEventListener("click", () => {
const nuevaTarea=document.createElement("li");
nuevaTarea.textContent ="Practicar DOM con JavaScript";
document.getElementById("lista-tareas").appendChild(nuevaTarea);
})

//Cambiar el estilo del párrafo de descripción
const descripcion = document.querySelector(".descripcion");
descripcion.style.color = "blue";
descripcion.style.fontWeight = "bold";

//Interactividad: cambiar el color de fondo al hacer clic en el botón
const botonFondo = document.getElementById("btn-fondo");

botonFondo.addEventListener("click", () => {
//Generar un color aleatorio
const colorAleatorio = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");

//Math.random = genera un numero aleatorio exadecimal
// el numero mas grande exadecimal 16777215 equivale a 253 al cubo -1 para RGB

document.body.style.backgroundColor = colorAleatorio;
console.log("Color de fondo cambiado a:", colorAleatorio);

})