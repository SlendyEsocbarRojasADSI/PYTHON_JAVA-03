let noTieneDere= 0;
let cont= 0;

while (cont<=40){
    let nota1= Number(prompt("Digitar la primera nota:"));
    let nota2= Number(prompt("Digitar la segunda nota:"));
    let nota3= Number(prompt("Digitar la tercera nota:"));
    let nota4= Number(prompt("Digitar la cuarta nota:"));
    let nota5= Number(prompt("Digitar la quinta nota:"));

    let pro= (nota1+nota2+nota3+nota4+nota5)/5;
    cont +=1;

    if (pro<=3){
        noTieneDere+=1;
    }
    alert("La cantidad de alumnos que no tienen derecho al examen de nivelacion son:" +noTieneDere);
}