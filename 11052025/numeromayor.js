function numeromayor(numero1,numero2) {
    
let nume_romayor=0;

    if (numero1 > numero2) {
        numeromayor=numero1;
    } else {
        numeromayor = numero2;
    }
    
    console.log("El Primer Número es:", numero1);
    console.log("El Segundo Número es:", numero2);
    console.log("El Número Mayor es:", numeromayor);
    
   // return numeromayor;
}

console.log(numeromayor(5,12));


