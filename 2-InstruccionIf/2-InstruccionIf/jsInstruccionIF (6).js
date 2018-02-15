function Mostrar()
{
//tomo la edad  
var edad;

//siempre parsear si me ìde un numero

edad = parseInt(document.getElementById("edad").value);

if ( edad < 13)
    {
        alert("Usted es un niño");
    }   

else if ( edad >= 13 && edad <= 17 )
    {
        alert("Usted es adolescente");
    }

else
    {
        alert("Usted es un adulto");
    }

}//FIN DE LA FUNCIÓN
