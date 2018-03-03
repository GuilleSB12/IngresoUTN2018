//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var venta;
    var mayorVenta
    var menorVenta;
    var menorDia;
    var mayorDia;
    var flag = 0;

    for ( var i = 1; i <= 3; i++ )
    {
        venta = parseFloat( prompt("Ingrese un importe: "));

        while ( venta <= 0 )
        {
            venta = parseFloat(prompt("Ingrese un monto mayor a 0!!"));
        }

        if ( venta > mayorVenta || flag == 0)
        {
            mayorVenta = venta;
            mayorDia = i;
        }

        if ( venta < menorVenta || flag == 0)
        {
             menorVenta = venta;
             menorDia = i;
            flag = 1;
        }
    }

    alert("El mayor importe fue $ " + mayorVenta + " en el dia " + mayorDia  + " y el de menor importe fue $ " + menorVenta + " en el dia " + menorDia ); 
 
    
}

