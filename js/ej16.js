let str=prompt("Ingrese un texto");

let long=str.length;

let ultLtr=long-1;

do{
    document.write(str.substr(ultLtr,1));
    ultLtr--;
}while(ultLtr>=0)