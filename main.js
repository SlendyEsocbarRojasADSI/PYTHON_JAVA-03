let vehi= 4;
let turi= 0;
let pert= 0;
let autobu= 0;
let cami= 0;
let moto= 0;
let cont= 1;

while (cont<=vehi){
    let tipoVehi= prompt("Ingresar el tipo de vehiculo que sta pasando (turismo, autobus, camion o motocicleta):");
    cont+=1;

    if (tipoVehi=="turismo"){
        let  per= int(input("Ingresar Cantidad de personas:"));
        turi+=1
        pert=per+pert
    }
    if (tipoVehi=="autobus"){
        autobu+=1
    }
    if (tipoVehi=="camion"){
        cami+=1
    }
    else{
        moto+=1
    }
    alert("La cantidad de autobuses:" +autobu);
    alert("La cantidad de camiones:" +cami);
    alert("La cantidad de motocicletas:" +moto);
    alert("La cantidad de turismo:" +turi);
    alert("La cantidad de personas en vehiculos de turismo son:" +pert);
}