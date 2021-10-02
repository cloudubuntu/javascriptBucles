let str=prompt("Ingrese un texto");
let i=0;
let posicion=0;

do{
    if(str.substr(posicion,1)=="a"||str.substr(posicion,1)=="e"||str.substr(posicion,1)=="i"||str.substr(posicion,1)=="o"||str.substr(posicion,1)=="u"){
        document.write("<br>La posicion de la primera vocal es: "+posicion);
        i++;
    }else{
        posicion++;
    }  
}while(i==0)





/*
if(str.substr(posicion,1)=="a"||str.substr(posicion,1)=="e"||str.substr(posicion,1)=="i"||str.substr(posicion,1)=="o"||str.substr(posicion,1)=="u"){
    document.write("<br>La posicion de la primera vocal es: "+posicion);
    i++;
}else{
    posicion++;
}*/




/*for(let j=0; j<str.length; j++){
    if(posicion==NaN){
        if(str.substr(j,1)=="a"||str.substr(j,1)=="e"||str.substr(j,1)=="i"||str.substr(j,1)=="o"||str.substr(j,1)=="u"){
            posicion=j;
    
        }
    }

}

document.write("<br>La posicion de la primera vocal es: "+posicion);*/


/*do{
    if(str.substr(i,1)=="a"||str.substr(i,1)=="e"||str.substr(i,1)=="i"||str.substr(i,1)=="o"||str.substr(i,1)=="u"){
        posicion=i;

    }else{
        i++;
    }

}while(posicion==NaN)

document.write("La posicion de la primera vocal es: "+posicion);*/


/*if(posicion==NaN){
    for(let i=0; i<str.length; i++){

   
        if(text.substr(i,1)=="a"||text.substr(i,1)=="e"||text.substr(i,1)=="i"||text.substr(i,1)=="o"||text.substr(i,1)=="u"){
           posicion=i;
       }
}else{
    document.write
}

for(let i=0; i<str.length; i++){

   
     if(text.substr(i,1)=="a"||text.substr(i,1)=="e"||text.substr(i,1)=="i"||text.substr(i,1)=="o"||text.substr(i,1)=="u"){
        posicion=i;
    }
}*/