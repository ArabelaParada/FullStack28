function valoresenteros() {

let negativo = 0;
let positivo = 0;
let multiplo15 = 0;
let acumulado = 0;

for (let i = 1; i <= 10; i++) {

let entrada = prompt ("Ingrese el número ${i}:");
let numero = parseInt(entrada);

if (numero < 0) negativo++;
if (numero > 0) positivo++;
if (numero % 15 === 0) multiplo15++;
acumulado += numero;
//if (numero % 2 === 0) acumulado += numero;
}
console.log("negativos:", negativo);
console.log("positivo:", positivo);
console.log("nmultiplo de 15:", multiplo15);
console.log("acumulado:", acumulado);
}
valoresenteros()




