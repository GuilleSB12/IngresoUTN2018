//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var importe;
    var iva;
    var Final;

    importe = parseFloat(prompt("Ingrese importe "));

    iva = importe * .21;

   
    final = importe + iva;

    document.getElementById("importe").value = final;

}    

