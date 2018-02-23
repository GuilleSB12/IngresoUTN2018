function Mostrar()
{

	//var contador = 0;
	var minimo;
	var maximo;
	var respuesta = 'si';
	var numero;
	var flag = 0;
	do
	{
		numero = parseInt( prompt("Ingrese numero "));
		//contador = contador + 1;

		//if ( contador == 1 )
		//{
			//minimo = numero;
			//maximo = numero;
		//}

		if ( numero > maximo || flag == 0 )
		{
			maximo = numero;
		}

		if ( numero < minimo || flag == 0 )
		{
			minimo = numero;
			flag = 1;
		}

		respuesta = prompt("¿Desea continuar? ");

	} while ( respuesta == 'si' )

document.getElementById("maximo").value = "El numero mas grande es " + maximo;
document.getElementById("minimo").value = "El numero mas chico es " + minimo;

		
	
	




}//FIN DE LA FUNCIÓN