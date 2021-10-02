let str=prompt("Inrgese un texto.");

for(let i=0; i<str.length; i++){
    document.write(str.substr(i,1));
    if((i+1)==str.length){
        document.write("");
    }else{
        document.write("-");
    }   
}


