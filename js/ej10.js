let fila=parseInt(prompt("Ingrese el numero de filas"));

let columnas=parseInt(prompt("Ingrese el numero de columnas")
);

let nroInicio=fila*columnas;

for(let i=1; i<=fila; i++){
    document.write("<br><br>Fila N°"+i+"--:")
    for(let j=1; j<=columnas; j++){
        document.write("  ");
        document.write(nroInicio)
        nroInicio--;
    }
}