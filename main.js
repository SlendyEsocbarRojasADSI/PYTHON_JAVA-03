let cont=0;

while (cont<=10){
    let num1= Number(prompt("Escribir el primer numero:"));
    let num2= Number(prompt("Escribir el segundo numero:"));

    let sum= num1+num2;
    alert("El resultado de la suma es de:" +sum);

    let rest= num1-num2;
    alert("El resultado de la resta es de:" +rest);

    let multi= num1*num2;
    alert("El resultadi de la multiplicacion es de:" +multi);

    let divi= num1/num2;
    alert("El resultado de la division es de:" +divi);
}