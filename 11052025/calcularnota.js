
function calcularnota(nota1,nota2,nota3,nota4)     //definición de la funcion, recibe 4 parametros
{
 
 nota1 = nota1 * 0.20;
 nota2 = nota2 * 0.40;
 nota3 = nota3 * 0.10;
 nota4 = nota4 * 0.30;
let notafinal= nota1 + nota2 + nota3 + nota4;
return notafinal;
}
let nombre = "Arabela Parada";
 let carnet = "199600780" ;
 let resultado = calcularnota(9,8,7,6);
console.log("Nota Final", resultado);
console.log("Nombre", nombre);
console.log("Carnet", carnet);