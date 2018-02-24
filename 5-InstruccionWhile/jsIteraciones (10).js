function Mostrar()
{

	var numero;
	var seguir;
	var diferencia;
	var promedioPos = 0;
	var promedioNeg = 0;
	var acumuladorNeg = 0;
	var acumuladorPos = 0;
	var contadorPos = 0;
	var contadorNeg = 0;
	var contadorCeros = 0;
	var contadorPares = 0;

	do
	{
		numero = parseInt( prompt("Ingrese un numero: "));

		if ( numero > 0 )
		{
			contadorPos++;
			acumuladorPos++;
		}
		
		else if ( numero < 0 )
		{
			contadorNeg++;
			acumuladorNeg++;
		}

		else
		{
			contadorCero++;
		}	

		if ( numero % 2 == 0)
		{
			contadorPares++;
		}


		seguir = prompt("¿Desea continuar?");

	} while ( seguir == 'si' );

	if ( contadorPos != 0 ) //Le pongo un condicional xq si contador pos o neg son cero no continua el programa
	{
		promedioPos = acumuladorPos / contadorPos; //con esto nos aseguramos de el programa muestre cero en ves de nan o se cuelgue
	}

	if ( contadorNeg != 0 )
	{
		promedioNeg = acumuladorNeg / contadorNeg;
	}

	diferencia = contadorPos - contadorNeg;

	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los negativos " + acumuladorNeg + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");
	document.write("1_Suma de los positivos " + acumuladorPos + "<br/>");






}//FIN DE LA FUNCIÓNi