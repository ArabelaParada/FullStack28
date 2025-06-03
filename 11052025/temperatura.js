//Crear programa donde se introduce una temperatura en Celsius y salga el resultado en 
//Fahrenheit, una vez teniendo la temperatura en Fahrenheit deberá devolver lo siguiente:
//c=F/1.8

function temperatura() {
let celsius = prompt(`Ingrese el número:`);
let temperaturac = parseInt(celsius);
if (isNaN(temperaturac)){
console.log("Ingrese un numero válido");
return null;
}
let Fahrenheit = (temperaturac * 1.8) + 32;
console.log("temperatura ingresada (C):", temperaturac);
console.log("temperatura a fahrenheit (F):", Fahrenheit);

if (Fahrenheit >=14 && Fahrenheit <32) {
console.log("temperatura baja");
}else if (Fahrenheit >=32 && Fahrenheit < 68){
console.log("temperatura adecuada");
}else if (Fahrenheit >= 68 && Fahrenheit <= 96){
console.log("temperatura alta");
} else {
console.log("temperatura desconocida");

}
return Fahrenheit;
        
    }

temperatura();