let segun= 0;
let avion= 22222;
let acelavion= 20;
let acelmisil= 10;

while (acelavion-acelmisil<=10000){
    acelavion+=20+acelavion;
    acelmisil+=10+acelmisil;
    segun+=1;

    alert("El segundo" +segun);
    alert("La distancia del avion es de:" +acelavion);
    alert("La distancia del misil es de:" +acelmisil);
}
alert("Programa finalizado")