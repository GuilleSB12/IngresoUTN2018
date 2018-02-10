/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{
    var importe;
    var importe25;
    var nuevoImporte;
    
    importe = parseInt(document.getElementById("importe").value);

    importe25 = importe * 0.25;

    nuevoImporte = importe - importe25;
    
    document.getElementById("resultado").value = nuevoImporte;
	
}
