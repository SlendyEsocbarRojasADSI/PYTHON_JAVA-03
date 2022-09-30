let cont= 1;
let cantiVehi= Number(prompt("Ingresar la cantidad de vehiculos que ingresaron a Bogota:"));

while (cont<=cantiVehi){
    let placa= Number(prompt("Digitar el ultimo digito de la placa del vehiculo:"));

    if (placa==1 && placa==2){
        alert("La calcomania es amarrilla");
    } else if (placa==4 && placa==4){
        alert("La calcomania es rosa");
    }
    if (placa==5 && placa==6){
        alert("La calcomania es roja");
    } else if(placa==7 && placa==8){
        alert("La calcomania es verde");
    }
    if (placa==8 && placa==9){
        alert("La calcomania es azul");
    }else{
        alert("Error al digitar la placa");
    }
}