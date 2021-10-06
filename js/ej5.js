do {
  let dni = parseInt(prompt("Ingrese el numero de DNI a consultar"));
  if (!isNaN(dni) && dni >= 0 && dni <= 99999999) {
    let res = dni % 23;
    
    console.log(res);

    switch (res) {
      case 0:
        alert("La letra correspondiente al DNI ingresado es: T");
        break;
      case 1:
        alert("La letra correspondiente al DNI ingresado es: R");
        break;
      case 2:
        alert("La letra correspondiente al DNI ingresado es: W");
        break;
      case 3:
        alert("La letra correspondiente al DNI ingresado es: A");
        break;
      case 4:
        alert("La letra correspondiente al DNI ingresado es: G");
        break;
      case 5:
        alert("La letra correspondiente al DNI ingresado es: M");
        break;
      case 6:
        alert("La letra correspondiente al DNI ingresado es: Y");
        break;
      case 7:
        alert("La letra correspondiente al DNI ingresado es: F");
        break;
      case 8:
        alert("La letra correspondiente al DNI ingresado es: P");
        break;
      case 9:
        alert("La letra correspondiente al DNI ingresado es: D");
        break;
      case 10:
        alert("La letra correspondiente al DNI ingresado es: X");
        break;
      case 11:
        alert("La letra correspondiente al DNI ingresado es: B");
        break;
      case 12:
        alert("La letra correspondiente al DNI ingresado es: N");
        break;
      case 13:
        alert("La letra correspondiente al DNI ingresado es: J");
        break;
      case 14:
        alert("La letra correspondiente al DNI ingresado es: Z");
        break;
      case 15:
        alert("La letra correspondiente al DNI ingresado es: S");
        break;
      case 16:
        alert("La letra correspondiente al DNI ingresado es: Q");
        break;
      case 17:
        alert("La letra correspondiente al DNI ingresado es: V");
        break;
      case 18:
        alert("La letra correspondiente al DNI ingresado es: H");
        break;
      case 19:
        alert("La letra correspondiente al DNI ingresado es: L");
        break;
      case 20:
        alert("La letra correspondiente al DNI ingresado es: C");
        break;
      case 21:
        alert("La letra correspondiente al DNI ingresado es: K");
        break;
      case 22:
        alert("La letra correspondiente al DNI ingresado es: E");
        break;
    }
  } else {
    alert("Usted no a introducido un numero valido");
  }
} while (confirm("desea consultar nuevamente"));
