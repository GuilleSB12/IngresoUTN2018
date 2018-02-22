function Mostrar()
{

	var contador = 0; //Las igualo a cero xq la primera vez q las voy a usar necesito q vlagan un numero en una operacion o condicion!!!!!!!!!!!!!
	var acumulador = 0;
	var numero;
	var promedio;

while ( contador < 5 )
	{
		numero = parseInt( prompt("Ingrese un numero: "));
		contador = contador + 1; 
		acumulador = acumulador + numero; //OJO!! si hay errores de ortografia no corre el programa!!!REVISAR!!!!!
	} //CONTADOR = acumula valores fijos/// ACUMULADOR = acumula valores variables!!!!

	promedio = acumulador / 5;


document.getElementById('suma').value = acumulador;
document.getElementById('promedio').value = promedio;

}//FIN DE LA FUNCIÓN