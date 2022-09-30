let numtraba= Number(prompt("Ingresar el numero de trabajadores:"));
let cont= 1;
let comi= 0;

while(cont<=numtraba){
    let sueldo= Number(prompt("Ingresar el sueldo del trabajador"));
    let vent1= Number(prompt("Ingresar la primera venta:"));
    let vent2= Number(prompt("Ingresar la segunda venta:"));
    let vent3= Number(prompt("Ingresar la tercera venta:"));

    comi= (vent1+vent2+vent3)*0.10;

    alert("El trabajador tiene un sueldo mensual de" +sueldo+ "con una comision mensual de" +comi);
    alert("El sueldo total mas la comision es de" +(sueldo+comi));
}