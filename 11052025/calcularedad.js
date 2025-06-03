function validarEdad(edad) {
    console.log("Ingresa tu edad: ", edad); // Para que se vea en la consola, usamos console log
    
    // Validación , si la edad es diferente a número, 
    // 1. Que sea de tipo número = typeof edad !== 'number'
    // 2. Que no sea NaN (Not a Number)= isNaN(edad)
    // 3. Que no sea negativo =  edad < 0 
    //4. Que sea un entero (no decimal) = !Number.isInteger(edad)

    if (typeof edad !== 'number' || isNaN(edad) || edad < 0 || !Number.isInteger(edad)) {
        return "Error: Ingresa un número entero positivo válido.";
    }
    
    // Operador ternario 
    return edad >= 18 ? "Mayor de Edad" : "Menor de Edad";
}

 //Ejemplo de uso:
console.log(validarEdad(25));    
console.log(validarEdad(15));    
console.log(validarEdad(-5));    
console.log(validarEdad("abc")); 