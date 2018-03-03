//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var ancho;
    var largo;
    var perimetro;
    var alambre;

    largo = parseInt(document.getElementById("largo").value);
    ancho = parseInt(document.getElementById("ancho").value);

    perimetro = ( largo + ancho) * 2;
    
    alambre = perimetro * 6;

    alert("Se necesitan " + alambre + " metros de alambre.");
    

}

