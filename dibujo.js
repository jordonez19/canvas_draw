/* VARIABLES  */
var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

/* FUNCIONES */

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
};


function dibujoPorClick()
{ 

    var xxx= parseInt(texto.value);
    var lineas = xxx;
    var yi, xf;
    var yin, xfn;
    var colorOrange = "orange";
    var colorPink = "brown";
    var espacio = ancho/lineas;


/* CICLO */

for( l = 0; l < lineas ; l++)
{

yi = espacio * l;
xf= espacio * (l + 1);

    dibujarLinea(colorOrange, 0, yi, xf, 299);
                dibujarLinea(colorPink, 299, yi, xf, 0);

}
    dibujarLinea(colorOrange,1,1,1,299 );
    dibujarLinea(colorOrange,1,299,299,299 );

                dibujarLinea(colorPink,299, 299, 299, 1 );
                dibujarLinea(colorPink,299, 1, 1, 1 );
} 
