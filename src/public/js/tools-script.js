
/* 
@Autor: Cristopher Camacho Durán
@App: Analizador de comentario
@File: tools-script.js
@Version: v1.0.0
@Fecha: 13/09/2024
@Licencia: MIT
@GIT Repository: 

Descripción:
Este script implementa funcionalidades basicas que se pueden retomar para futuros codigos y proyectos que puedan necesitar de esta

Funciones:
- `manejadorDeEventos()`: Funcion para controlar los eventos que ocurren en la pagina, es decir, el 'click'
- `normalizarEspacios(texto)`: Funcion para normalizar espacios de una cadena de texto, en este caso un comentario
- `dividirEnPalabras(texto)`: Divide el texto por los espacios asignados en palabras separas, y cada palabra es guardada en un arreglo
- `convertirAMinusculas(texto)`: Convierte la cadena de texto en minusculas
- `limpiarComas(texto)`: Funcion para reemplaxar las comas
*/

function manejadorDeEventos() {
    document.addEventListener('DOMContentLoaded', ()=>{document.querySelector('body').addEventListener('click', listener)});
}
manejadorDeEventos();

function normalizarEspacios(texto) {
    return texto.replace(/\s+/g, ' ').trim();
}

function dividirEnPalabras(texto) {
    return texto.trim().split(/\s+/);
}

function convertirAMinusculas(texto) {
    return texto.toLowerCase();
}

function limpiarComas(texto) {
    return texto.replace(/,/g, '');
}
