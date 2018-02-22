function Mostrar()
{

var sexo = prompt("ingrese f ó m .");

sexo = sexo.toLowerCase();

while ( sexo != "f" && sexo != "m" ) //FIjarse bien si eso es verdadero no entra!! Si es falso si.
//while ( !(sexo == "f" || sexo == "m"))

    {
        sexo = prompt("Error. Vuelve a intentarlo");

        sexo = sexo.toLowerCase();
    }

if ( sexo == "f")
    {
        sexo = "Femenino";
    }
else
    {
        sexo = "Masculino";
    }

document.getElementById('Sexo').value = sexo;

}//FIN DE LA FUNCIÓN