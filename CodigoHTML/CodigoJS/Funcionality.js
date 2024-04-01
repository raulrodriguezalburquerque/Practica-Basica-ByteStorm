"use strict";

// Contante con color gris oscuro
const DARK_GREY = "#151E21";

// Cuerpo
var body = document.querySelector("body");
// Textos del cuerpo
var bodyTexts = document.getElementsByClassName("BodyText");

// Botones para cambiar el tema de la pagina
var themeChangers = document.querySelectorAll(".themeChanger");
// Añadimos a los botones la funcion de cambiar el tema
themeChangers.forEach(button => {
    button.addEventListener("click", themeChange);
});

// Funcion para cambiar el tema de la pagina
function themeChange() {
    // Se cambia el color del fondo y textos del body
    body.style.backgroundColor = DARK_GREY;
    for (let text of bodyTexts) {
        text.style.color = "white";
    }
}

// Funcion para saludar al usuario con la fecha actual
function welcomeUser() {
    let date = new Date();
    alert("¡Bienvenido! Estamos a "+date);
}

// Cuando la pagina se carga, se lanza un mensaje de bienvenida
window.addEventListener("load", function(){
    welcomeUser();
});