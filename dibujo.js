/* VARIABLES  */

var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var yi, xf;
var yin, xfn;

var colorCeleste = "orange";
var colorPink = "brown";


/* CICLO */

for( l = 0; l < lineas ; l++){

    yi = 10 * l;
    xf= 10 * (l + 1);

    dibujarLinea(colorCeleste, 0, yi, xf, 299);
    dibujarLinea(colorPink, 299, yi, xf, 0);
    console.log("linea " + l)    

}


dibujarLinea(colorCeleste,1,1,1,299 );
dibujarLinea(colorCeleste,1,299,299,299 );

dibujarLinea(colorPink,299, 299, 299, 1 );
dibujarLinea(colorPink,299, 1, 1, 1 );



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


