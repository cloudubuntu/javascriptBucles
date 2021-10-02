let text=prompt("Ingrese un texto");

let vocales=0;

for(let i=0; i<text.length; i++){
    if(text.substr(i,1)=="a"||text.substr(i,1)=="e"||text.substr(i,1)=="i"||text.substr(i,1)=="o"||text.substr(i,1)=="u"){
        vocales++;
    }
}

document.write("El numero total de vocales es: "+vocales);