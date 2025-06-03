//calcular una misma variable muchas veces

function descuentoviajes (origen, destino) {

 let descuento= 0;

switch (true) {
case origen === "ciudad de palma" && destino === "la costa del sol":
    descuento= 0.05;
    break;
case destino === "panchimalco":
    descuento = 0.10;
    break;
case destino === "puerto el triunfo":
    descuento= 0.15;
    break;
}
return descuento;

}
console.log(descuentoviajes("ciudad de palma", "la costa del sol" ));
console.log(descuentoviajes("ciudad de palma", "panchimalco" ));
console.log(descuentoviajes("ciudad de palma", "puerto el triunfo" ));