function descuento(coche) 
{
    let porcentajedescuento = 0;
switch (coche.toUpperCase()){
case "FORD FIESTA": porcentajedescuento = 5; break;
case "FORD FOCUS": porcentajedescuento = 10; break;
case "FORD ESCAPE": porcentajedescuento = 20; break;
default: porcentajedescuento = 0;

}
 return porcentajedescuento; 

}
console.log(descuento("FORD ESCAPE"));
console.log(descuento("FORD FOCUS"));
console.log(descuento("FORD FIESTA"));
console.log(descuento("toyota"));
