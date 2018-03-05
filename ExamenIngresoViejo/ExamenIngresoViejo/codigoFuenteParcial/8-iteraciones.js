//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var numero;
    var contadorNumPares = 0;
    var contador = 0;
    var promedio;
    var acumulador = 0;
    var numMax;
    var numMin;
    var seguir;
    var flag = 0;
    


    do
    {
        numero = parseInt(prompt("Ingrese un numero: "));

        while ( numero < 0 )
        {
            numero = parseInt(prompt("Error! Ingrese un numero mayor a 0: "));
        }

        acumulador = acumulador + numero;
        contador++;

        if ( numero % 2 == 0 )
        {
            contadorNumPares++;
        }

        if (numero > numMax || flag == 0 )
        {
            numMax = numero;
        }

        if (numero < numMin || flag == 0 )
        {
            numMin = numero;
            flag = 1;
        }

        seguir = prompt("¿Desea continuar?: ");
    } while ( seguir == 'si' );

    promedio = acumulador / contador;

    document.write("La cantidad de numeros pares son: " + contadorNumPares + "<br/>");
    document.write("El promedio de los numeros ingresados es: " + promedio + "<br/>");
    document.write("La sumas de todos los numeros son: " + acumulador + "<br/>");
    document.write("El numero maximo es: " + numMax + " y el numero minimo es: " + numMin + "<br/>");
    

}

