let i=parseInt(prompt("Ingrese un numero"));
let k=1;
if(i<=50){
    do{
        for(let j=1; j<=k;j++){
            document.write(j);
        }
        k++;
        document.write("<br>");
    }while(k<=i)
}else{
    document.write("numero fuera de rango");
}
