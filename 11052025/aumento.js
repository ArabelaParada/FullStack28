function aumento(nombre, salario, categoria) {
let aumentot = 0;
if (categoria === "A") {
aumentot= salario * 0.15;
} else if (categoria === "B") {
 aumentot= salario * 0.30; 
} else if (categoria === "C") { 
aumentot= salario * 0.10;
}else if (categoria = "D") {
    aumentot= salario * 0.20;
}    
console.log("Nombre:", nombre);
console.log("Salario:", salario);
console.log("Categoría:", categoria);
console.log("Aumento Total:", aumentot);

return aumentot;
}

aumento("Arabela", 1000.00, "D");