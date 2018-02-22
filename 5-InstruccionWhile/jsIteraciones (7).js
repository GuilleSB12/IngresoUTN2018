function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta;

do
	{
		numero = parseInt( prompt("Ingrese numero "));
		contador = contador + 1;
		acumulador = acumulador + numero;
		respuesta = prompt("Desea continuar?: ");
	} while ( respuesta == 'si' );

	promedio = acumulador / contador;


document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = acumulador;

}//FIN DE LA FUNCIÓN