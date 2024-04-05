"use strict";

// Cuerpo
let body = document.querySelector("body");

// Botones para cambiar el tema de la pagina
let themeChangers = document.querySelectorAll(".themeChanger");
// Añadimos a los botones la funcion de cambiar el tema
themeChangers.forEach(button => {
    button.addEventListener("click", themeChange);
});

// Funcion para cambiar el tema de la pagina
function themeChange() {
    // Se cambia la clase del cuerpo a tema oscuro o se quita si ya la tenia
    body.classList.toggle("dark-theme");
    // Se guarda si el cuerpo tiene el tema oscuro
    storeTheme(body.classList.contains("dark-theme"));
    // Se cambia la clase del boton para que cambie de color
    themeChangers.forEach(button => {
        button.classList.toggle("btn-light");
        button.classList.toggle("btn-dark");
    });
}

// Funcion para pasar el mes de formato numerico a string
function getMonthString(month)
{
    // Comprobamos el mes
    switch (month) {
        case 0:
            return "Enero";
        case 1:
            return "Febrero";
        case 2:
            return "Marzo";
        case 3:
            return "Abril";
        case 4:
            return "Mayo";
        case 5:
            return "Junio";
        case 6:
            return "Julio";
        case 7:
            return "Agosto";
        case 8:
            return "Septiembre";
        case 9:
            return "Octubre";
        case 10:
            return "Noviembre";
        case 11:
            return "Diciembre";
        default:
            return "MES ERRONEO";
    }
}

// Funcion para obtener la fecha actual en formato legible
function getActualDate() {
    // Obtenemos la fecha actual
    let date = new Date();
    // Obtenemos hora y minutos del dia
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if(minutes < 10) {
        minutes = "0" + minutes.toString();
    }
    // Obtenemos dia, mes y año
    let day = date.getDate();
    let month = getMonthString(date.getMonth());
    let year = date.getFullYear();
    // Creamos y devolvemos un mensaje con la fecha legible
    let dateString = `Son las ${hours}:${minutes} del ${day} de ${month} del ${year}`;
    return dateString;
}

// Funcion para saludar al usuario con la fecha actual
function welcomeUser() {
    // Obtenemos la fecha
    let date = getActualDate();
    // Enviamos la alerta con el mensaje
    alert("¡Bienvenido! "+date);
}

// Funcion para guardar si el tema oscuro esta seleccionado
function storeTheme(theme) {
    localStorage.setItem('darkTheme', theme);
}

// Cuando la pagina se carga, se carga el tema y se lanza un mensaje de bienvenida
window.addEventListener("load", function(){
    // Comprobamos si teniamos puesto el modo oscuro para colocarlo
    const darkTheme = localStorage.getItem("darkTheme");
    if(darkTheme == "true") {
        themeChange();
    }
    // Lanzamos mensaje de bienvenida
    welcomeUser();
});