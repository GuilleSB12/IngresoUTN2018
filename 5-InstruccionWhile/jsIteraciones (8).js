function Mostrar()
{

	
	var positivos = 0;
	var negativos = 1;
	var flag = false;
	var respuesta='si';

do
{
	numero = parseInt( prompt("Ingrese un numero "));

	if ( numero > 0 )
		{
			positivos = positivos + numero;
		}
	
	else
		{
			negativos = negativos * numero;
			flag = true;
		}
	
	respuesta = prompt("¿Desea continuar?: ");
	
} while ( respuesta == 'si');

document.getElementById('suma').value = positivos;

if ( !flag )
	{
		negativos = 0;
	}
document.getElementById('producto').value = negativos;

}//FIN DE LA FUNCIÓN