document.write("Ejercicio N°1");

let edad=parseInt(prompt("Ingrese un numero"));

console.log(edad);

if(edad>0&&edad>18&&edad<70){
    document.write("<br>tiene edad para conducir");
}else{
    document.write("<br>la edad no es apta para conducir")
}