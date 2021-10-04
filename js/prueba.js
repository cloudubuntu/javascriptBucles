do {
  let dni = parseInt(prompt("Ingrese el numero de DNI"));
  let letraDni="";
  if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
    let res = dni % 23;

    console.log(res);

    switch (res) {
      case 0:
          letraDni="<br>T";          
        document.write("<b>T");
        break;
      case 1:
          letraDni="";
        document.write("<b>R");
        break;
      case 2:
          letraDni=
        document.write("<b>W");
        break;
      case 3:
          letraDni=
        document.write("<b>A");
        break;
      case 4:
          letraDni=
        document.write("<b>G");
        break;
      case 5:
          letraDni=
        document.write("<b>M");
        break;
      case 6:
          letraDni=
        document.write("<b>Y");
        break;
      case 7:
          letraDni=
        document.write("<b>F");
        break;
      case 8:
          letraDni=
        document.write("<b>P");
        break;
      case 9:
          letraDni=
        document.write("<b>D");
        break;
      case 10:
          letraDni=
        document.write("<b>X");
        break;
      case 11:
          letraDni="<br>B";
        /*document.write("<b>B");*/
        break;
      case 12:
          letraDni=
        document.write("<b>N");
        break;
      case 13:
          letraDni=
        document.write("<b>J");
        break;
      case 14:
          letraDni=
        document.write("<b>Z");
        break;
      case 15:
          letraDni=
        document.write("<b>S");
        break;
      case 16:
          letraDni=
        document.write("<b>Q");
        break;
      case 17:
          letraDni=
        document.write("<b>V");
        break;
      case 18:
          letraDni=
        document.write("<b>H");
        break;
      case 19:
          letraDni=
        document.write("<b>L");
        break;
      case 20:
          letraDni=
        document.write("<b>C");
        break;
      case 21:
          letraDni=
        document.write("<b>K");
        break;
      case 22:
          letraDni=
        document.write("<b>E");
        break;
    }
    document.write("La letra correspondiente al Dni ingresado es: "+letraDni);
  } else {
    alert("Usted no a introducido un numero valido");
  }
} while (confirm("Desea consultar otro DNI?"));
