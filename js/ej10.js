let fila=parseInt(prompt("Ingrese el numero de filas"));

let columnas=parseInt(prompt("Ingrese el numero de columnas")
);

let nroInicio=fila*columnas;

document.write("<table border>");

for(let i=1; i<=fila; i++){
    document.write("<tr>")
    for(let j=1; j<=columnas; j++){
        document.write("<td>"+nroInicio+"</td>");
        /*document.write(nroInicio)*/
        nroInicio--;
    }
    document.write("</tr>");
}


document.write("</table>");