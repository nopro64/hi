// valor aleatorio generado
var y = Math.floor(Math.random() * 10 + 1);
// contar el número de intentos
var x = document.getElementById("guessField").value;
// crear para el intento correcto
if(x == y)
 {
alert("yay ganastes un punto"+playername+"no perdiste"+guess+ "intento");
guess= 1;
 } 
// función para el número adivinado por el usuario     
else if(x > y)
{
guess++;
alert("hiciste muy malo te odio el numero es mas peqeño idiota")
}
else
{
guess++;
alert("hiciste muy malo te odio el numero es mas grande idiota")
}