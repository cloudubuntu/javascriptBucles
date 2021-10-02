let i=parseInt(prompt("Ingrese un numero"));

do{
    for(let j=1; j<=i;j++){
        document.write(i);
    }
    i--;
    document.write("<br>");
}while(i<=50&&i>0)

document.write("<br>FIN.")