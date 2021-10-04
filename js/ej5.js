do {
  let dni = parseInt(prompt("Ingrese el numero de DNI a consultar"));
  if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
    let res = dni % 23;
    
    console.log(res);

    switch (res) {
      case 0:
        document.write("<br>La letra correspondiente al DNI ingresado es: T");
        break;
      case 1:
        document.write("<br>La letra correspondiente al DNI ingresado es: R");
        break;
      case 2:
        document.write("<br>La letra correspondiente al DNI ingresado es: W");
        break;
      case 3:
        document.write("<br>La letra correspondiente al DNI ingresado es: A");
        break;
      case 4:
        document.write("<br>La letra correspondiente al DNI ingresado es: G");
        break;
      case 5:
        document.write("<br>La letra correspondiente al DNI ingresado es: M");
        break;
      case 6:
        document.write("<br>La letra correspondiente al DNI ingresado es: Y");
        break;
      case 7:
        document.write("<br>La letra correspondiente al DNI ingresado es: F");
        break;
      case 8:
        document.write("<br>La letra correspondiente al DNI ingresado es: P");
        break;
      case 9:
        document.write("<br>La letra correspondiente al DNI ingresado es: D");
        break;
      case 10:
        document.write("<br>La letra correspondiente al DNI ingresado es: X");
        break;
      case 11:
        document.write("<br>La letra correspondiente al DNI ingresado es: B");
        break;
      case 12:
        document.write("<br>La letra correspondiente al DNI ingresado es: N");
        break;
      case 13:
        document.write("<br>La letra correspondiente al DNI ingresado es: J");
        break;
      case 14:
        document.write("<br>La letra correspondiente al DNI ingresado es: Z");
        break;
      case 15:
        document.write("<br>La letra correspondiente al DNI ingresado es: S");
        break;
      case 16:
        document.write("<br>La letra correspondiente al DNI ingresado es: Q");
        break;
      case 17:
        document.write("<br>La letra correspondiente al DNI ingresado es: V");
        break;
      case 18:
        document.write("<br>La letra correspondiente al DNI ingresado es: H");
        break;
      case 19:
        document.write("<br>La letra correspondiente al DNI ingresado es: L");
        break;
      case 20:
        document.write("<br>La letra correspondiente al DNI ingresado es: C");
        break;
      case 21:
        document.write("<br>La letra correspondiente al DNI ingresado es: K");
        break;
      case 22:
        document.write("<br>La letra correspondiente al DNI ingresado es: E");
        break;
    }
  } else {
    alert("Usted no a introducido un numero valido");
  }
} while (confirm("desea consultar nuevamente"));
