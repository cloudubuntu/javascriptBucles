let acumulado=0;

do{
    let num=parseInt(prompt("Ingrese un numero entero"));
    if(Number.isInteger(num)){
        acumulado+=num;
    }else{
        alert("NO INGRESO UN NUMERO")
    }
}while(confirm("Ingrese otro numero"))

document.write("<br>La suma total de todos los numeros ingresados es: "+ acumulado);