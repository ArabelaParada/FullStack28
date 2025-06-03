function tablademultiplicar() {
let entrada = prompt(`Ingrese el número:`);
let numero = parseInt(entrada);
if (isNaN(numero)){
console.log("Ingrese un numero válido");
return;
}
console.log(`tabla de multiplicar del ${numero}:`);

for (let i=1; i <= 10; i++) {
console.log(`${numero} x ${i} = ${numero * i}`);

      }
}
tablademultiplicar();