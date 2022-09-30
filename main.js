let cantigalli=   Number(prompt("Ingresar la cantidad de gallinas:"));
let conta= 1;

while (conta<=cantigalli){
    let peso= Number(prompt("Ingresar el peso de la gallina:"));
    let altu= Number(prompt("Ingresar la altura de la gallina en cm:"));
    let numHueve= Number(prompt("Ingresar el numero de huevos que pone la gallina o la cantidad de huevos que tiene la gallina:"));
    
    let cali= (peso*altu)/numHueve;
    alert("La cantidad del huevo que puso la gallina es de:" +cali);

    let precio= cali*1000;
    alert("El precio de venta por cada kilo de huevo es de:" +precio);

    conta+=1;
}
alert("Programa finalizado");