let cont=1;

while (cont<=5){
    let nom= prompt("Escribir el nombre del estudiante:");
    let ape= prompt("Escribir el apellido del estudiante:");
    let edad= Number(prompt("Escribir la edad del estudiante:"));

    let nota1= Number(prompt("Escribe la primera nota del estudiante:"));
    let nota2= Number(prompt("Escribe la segunda nota del estudiante:"));

    let prome= (nota1+nota2)/2;
    alert("El estudiante" +nom+ape+ "su edad es de" +edad+ "tiene una nota promedio de" +prome);
    cont+=1;
}