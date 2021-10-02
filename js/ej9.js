
for(let k=1; k<=500; k++){

    if(k%5===0){
        document.write("<br>"+k);
        document.write("<hr>");

    }else{
        if(k%4===0){
            document.write("<br>"+k+"(Multiplo de 4)");
        }else if((k%9===0)){
            document.write("<br>"+k+"(Multiplo de 9)");
        }else{
            document.write("<br>"+k);
        }

}

}