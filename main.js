let cont= 1;
let opciA= 0;
let opciB= 0;
let opciC= 0;
let canti= Number(prompt("Ingresar la cantidad de alumnos que van a votar:"));

while (cont<=canti){
    let repre= prompt("Elija el representante por el cual desea votar: (A, B o C):");
    cont+=1;

    if (repre=="A"){
        opciA+=1;
    }else if (repre=="B"){
        opciB+=1;
    }else {
        opciC+=1;
    }

    let totalA= (opciA/canti)*100;
    let totalB= (opciB/canti)*100;
    let totalC= (opciC/canti)*100;

    if(totalA>totalB && totalA>totalC){
        alert("El porcentaje de la votacion del representante A es:" +totalA);
        alert("El porcentaje de la votacion del representante B es:" +totalB);
        alert("El porcentaje de la votacion del representante C es:" +totalC);
    }else if (totalB>totalA && totalB>totalC){
        alert("El porcentaje de la votacion del representante A es:" +totalA);
        alert("El porcentaje de la votacion del representante B es:" +totalB);
        alert("El porcentaje de la votacion del representante C es:" +totalC);
    }
    if (totalC>totalA && totalC>totalB){
        alert("El porcentaje de la votacion del representante A es:" +totalA);
        alert("El porcentaje de la votacion del representante B es:" +totalB);
        alert("El porcentaje de la votacion del representante C es:" +totalC);
    }
    if (totalB==totalA && totalB==totalC){
        print("Se cancelan las elecciones de representante")
    }
    else if(totalA>=totalB && totalB>=totalC){
        cont= 1;
        opciA= 0;
        opciB= 0;

        alert("Hay un empate entre A y B");
        canti= Number(prompt("Digitar la cantidad de alumnos que van a votar:"));

        while (cont<=canti){
            cont+=1
            represen= Number(prompt("Digite el representante por el que va a votar (A o B):"));

            if (rep=="A"){
                A+=1
            }
            else{B+=1}
        }
        totalA= (opciA/canti)*100;
        totalB= (opciB/canti)*100;

        if (totalA>=51){
            alert("El ganador de las votaciones es A con un:" +totalA)
        }

        if (totalB>=51){
            alert("El ganador de las votaciones es B con un:" +totalB)
        }
        else{
            alert("Doble empate entre A y B")
        }
        if (totalA>=totalC && totalC>totalB){
            cont= 1;
            A= 0;
            C= 0;

            alert("Hay un empate entre A y C")
        }
        canti= Number(prompt("Digitar la cantidad de alumnos que van a votar:"));

        while (cont<=canti){
            cont+=1;
            repre= prompt("Digitar el representante por el que vas a votar (A o C):");

            if (repre=="A"){
                a+=1
            }
            else {C+=1}
        }
        totalA= (opciA/canti)*100;
        totalC= (opciC/canti)*100;

        if (totalA>=51){
            alert("El ganador de las votaciones es A con un:" +totalA);
        }
        else if (totalC>=51){
            alert("El ganador de las votaciones es C con un:" +totalC);
        }
        else {
            print("Hay un empate entre A y C")
        }
    }
    else {
        cont= 1;
        opciB= 0;
        opciC =0;

        alert("Hay un empate entre B y C")

        canti= Number(prompt("Digitar la cantidad de alumnos que van a votar:"));
    }
}