function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	
	numero = Math.floor ( Math.random() * 10) + 1;

	alert(numero);

	if ( numero == 9 || numero == 10)
		{
			alert("Excelente");
		}
	
	else if ( numero < 9 && numero >= 4)
		{
			alert("Aprobado");
		}
	
	else
		{
			alert("Vamos! La proxima se puede.");
		}
	
	
	

}//FIN DE LA FUNCIÓN