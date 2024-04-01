"use strict";

// Cuerpo
var body = document.querySelector("body");

// Botones para cambiar el tema de la pagina
var themeChangers = document.querySelectorAll(".themeChanger");
// Añadimos a los botones la funcion de cambiar el tema
themeChangers.forEach(button => {
    button.addEventListener("click", themeChange);
});

// Funcion para cambiar el tema de la pagina
function themeChange() {
    // Se cambia la clase del cuerpo a tema oscuro o se quita si ya la tenia
    body.classList.toggle("DarkTheme");
    // Se guarda si el cuerpo tiene el tema oscuro
    storeTheme(body.classList.contains("DarkTheme"));
}

// Funcion para saludar al usuario con la fecha actual
function welcomeUser() {
    let date = new Date();
    alert("¡Bienvenido! Estamos a "+date);
}

// Funcion para guardar si el tema oscuro esta seleccionado
function storeTheme(theme) {
    localStorage.setItem('darkTheme', theme);
}

// Cuando la pagina se carga, se carga el tema y se lanza un mensaje de bienvenida
window.addEventListener("load", function(){
    // Comprobamos el tema que teniamos puesto y se carga
    const darkTheme = localStorage.getItem("darkTheme");
    if(!darkTheme) {
        storeTheme("false");
    }
    else if(darkTheme == "true") {
        body.classList.add("DarkTheme");
    }
    // Lanzamos mensaje de bienvenida
    welcomeUser();
});