//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
    var nota;
    var sexo;
    var acumuladorNota = 0;
    var promedio;
    var notaBaja;
    var contadorVaronesMas6 = 0;
    var flag = 0;
    //Acordarse todos los contadore y acum igualar a 0

    for ( var i = 0 ; i < 3 ; i++ )
    {
       
        nota = parseInt(prompt("Ingrese nota: "));

        while (nota < 0 || nota > 10)
        {
            nota = parseInt(prompt("Error! Ingrese nota de 0 a 10: "));
        }

        sexo = prompt("Ingrese sexo: ");

        while ( sexo != 'm' && sexo != 'f' )
        {
            sexo = prompt("Error. Ingrese sexo 'f' o 'm': ");
        }

        acumuladorNota = acumuladorNota + nota;

        if ( nota < notaBaja || flag == 0 )
        {
            notaBaja = nota;
            flag = 1
        }

        if ( sexo == 'm' && nota >= 6 )
        {
            contadorVaronesMas6++;
        }


    }

    promedio = acumuladorNota / 3;

    alert("a\ El promedio de las notas totales es: " + promedio.toFixed(2) + "\nb\ La nota mas baja es: " + notaBaja + "\nc\) Los varones aprobados son: " + contadorVaronesMas6 );
    

}

