alert ("Bienvenidos a mi sitio!")

let continuar = confirm ("¿Estas seguro que deseas continuar?")
let titulo = document.querySelector(".titulo")

if (continuar==false) {
    titulo.innerText = "Lamentamos que no quieras continuar tu visita por este sitio increible";
}

else {
    titulo.innerText = "QUe alegria que quieras seguir tu visita por este maravilloso sitio!";
}

let nombre = prompt ("Cual es tu nombre?")
let bienvenido = document.querySelector("h1");
bienvenido.innerText = "Bienvenido" + nombre;

let edad = prompt("¿Que edad tienes?")

if (edad>18) {
    alert("permitido su acceso");
}

else { 
    alert ("prohbido continuar")
}

let modo = confirm ("¿Desea utilizar el modo oscuro?");

if (modo==true) {
let fondo = document.querySelector ("body");
fondo.style.backgroundColor = "dimgray";
fondo.style.color = "white";
}


let diaDeSemana = "Domingo"
if (diaDeSemana=="Domingo") {
   alert ("¡Hoy es dia de descanso!") 
}