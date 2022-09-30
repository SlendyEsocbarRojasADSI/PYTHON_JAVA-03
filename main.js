let mateFunda= Number(prompt("Digitar los creditos de la materia fundamentos:"));
let mateBd= Number(prompt("Digitar los creditos de la materia BD:"));
let mateEti= Number(prompt("Digitar los creditos de la materia etica:"));
let cantiEstu= Number(promt("Digitar la cantidad de estudiantes:"));

while (cont<=cantiEstu){
    let caliFunda= int(prompt("Ingresar la calificacion de la materia de fundamentos:"));
    let caliBd= int(prompt("Ingresar la calificacion de la materia BD:"));
    let caliEti= int(prompt("Ingresar la calificacion de la materia etica:"));

    let mate1= caliFunda*mateFunda;
    let mate2= caliBd*mateBd;
    let mate3= caliEti*mateEti;

    let sumCredi= mateFunda+mateBd+mateEti;
    let ponderacion= (mate1+mate2+mate3)/sumCredi;

    alert("Su promedio ponderado es de:" +ponderacion);

    cont+=1;
}