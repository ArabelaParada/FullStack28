//Clase base receta

class Receta {
    constructor(nombre,ingredientes,tiempo,dificultad,tipo) {
        this.nombre=nombre;
        this.ingredientes= ingredientes;
        this.tiempoPreparacion = tiempo;
        this.dificultad = dificultad;
        this.tipo =tipo;
    }
    getNombre() {
        return this.nombre;
    }

    getDificultad(){
        return this.dificultad;
    }

    getTipo(){
        return this.tipo;
    }

    resumen() {
        return `
        <div class="receta">
            <h3>${this.nombre}(${this.tipo})</h3>
            <p><strong>Ingredientes:</strong>${this.ingredientes.join(",")}</p>
            <p><strong>Tiempo:</strong>${this.tiempoPreparacion} minutos</p>
            <p><strong>Dificultad:</strong> ${this.dificultad}</p>
            <p>${this.preparar()}</p>
            </div> 
            `;
        }
}

//sub clase receta dulce

class RecetaDulce extends Receta{
    constructor(nombre, ingredientes,tiempo,dificultad)
    {
        super(nombre, ingredientes, tiempo, dificultad, "dulce");
    }

    preparar() {
        return "Preparando una receta dulce deliciosa";
    }
}

// sub clase Receta salada
class RecetaSalada extends Receta {
    constructor(nombre,ingredientes,tiempo,dificultad)
    {
        super(nombre, ingredientes, tiempo, dificultad, "salada");
    }
     preparar() {
        return "Preparando una receta salada";
    }
}

//Clase LibroRecetas

class LibroDeRecetas{
    constructor() {
        this.recetas=[];
    }
    agregar(receta) 
{
    this.recetas.push(receta);
}

    listar(filtroDificultad=""){
        return this.recetas
            .filter(r=> !filtroDificultad || r.getDificultad() === filtroDificultad)
            .map(r => r.resumen())
            .join("");
            }
        }
    
        //LOGICA DE INTERACCION DOM 

        const libro = new LibroDeRecetas();
        const form = document.getElementById("formReceta");
        const filtro = document.getElementById("filtroDificultad") || { value: ""};
        const contenedorRecetas = document.getElementById("contenedorRecetas");
const renderizar = () => {
const html = libro.listar(filtro.value);
contenedorRecetas.innerHTML = html || "<p>No hay recetas disponibles</p>";
};




function obtenerDatosFormulario(){

   const nombre = document.getElementById("nombre").value;
    const ingredientes = document.getElementById("ingredientes").value.split(",");
    const dificultad = document.getElementById("dificultad").value;
    const tiempo = parseInt(document.getElementById("tiempo").value);
    const tipo = document.getElementById("tipo").value;

return {nombre, ingredientes, tiempo, dificultad, tipo};
}



form.addEventListener("submit", (e) =>{
    e.preventDefault();


    const{nombre,ingredientes,tiempo,dificultad,tipo} = obtenerDatosFormulario();

        if (!nombre || 
            ingredientes.length === 0 || isNaN(tiempo)) {
        alert("Por favor completa todos los campos correctamente");
        return;
       } 

    const receta = tipo === "dulce"
    ? new RecetaDulce(nombre, ingredientes, tiempo, dificultad)
    : new RecetaSalada(nombre, ingredientes, tiempo, dificultad);
    libro.agregar(receta);
    form.reset();
    renderizar();
});

if (filtro.addEventListener) {
    filtro.addEventListener("change", renderizar);
}

   

