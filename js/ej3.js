let texto="";

do{
    let cadena=prompt("ingrese un texto");
    if(texto==""){
        texto=texto+cadena;
    }else{
        texto=texto+"-"+cadena;

    }


}while(confirm("desea ingresar otro texto?"))

document.write(texto);