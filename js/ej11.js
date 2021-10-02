let ed1=parseInt(prompt("Ingrese la primera edad"));
let ed2=parseInt(prompt("Ingrese la segundad edad"));
let ed3=parseInt(prompt("Ingrese la tercera edad"));

let nam1=prompt("Ingrese el primer nombre");
let nam2=prompt("Ingrese el segundo nombre");
let nam3=prompt("Ingrese el tercer nombre");

let edMayor=Math.max(ed1, ed2, ed3);

if(edMayor===ed1){
    document.write("<br> El mayor es: "+nam1);
}else if(edMayor===ed2){
    document.write("<br> El mayor es: "+nam2);
}else{
    document.write("<br> El mayor es: "+nam3);
}


