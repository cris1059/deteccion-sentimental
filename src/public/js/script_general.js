/* 
@Autor: Cristopher Camacho Durán
@App: Analizador de comentario
@File: script_general.js
@Version: v1.0.0
@Fecha: 13/09/2024
@Licencia: MIT
@GIT Repository: 

Descripción:
Este script implementa la funcionalidad general del programa, donde se conjunta todos los archivos requeridos y necesarios para que funcione de manera correcta

Funciones:
- `listener()`: Funcion que carga el control de eventos de tools-script para controlar el evento del boton generar y pueda efectuar todo el algoritmo
- `main()`: Funcion main, donde se ejecuta ya todo el algoritmo empleado anteriormente
- `detectarSentimiento(arr)`: Funcion main de deteccion de sentimiento (Negativo o positivo), recibe por parametro un arreglo que contiene las palabras de la oracion
- `operacionAlgoritmo(resultados)`: Operacion Inicial del algoritmo que escoge las dos vertientes para analizar lo que se queire decir si es negativo -1. o positivo 1
- `operacionOR(resultados)`: Operacion OR en caso de incluir la palabra "pero" que cambia por completo el comentario (MODIFICADOR)
- `operacionGenal(resultados)`: Funcion general en caso de no contener los MODIFICADORES este realizara las operaciones del algoritmo
- `writeHtml(resultado)`: Funcion para escribir en el html los resultados
*/


const listener = (event) => {
    if(event.target && event.target.id == 'generar') main();
    if(event.target && event.target.id == 'close') location.reload();
}

function main() {
    comentario = document.getElementById('input-frase').value;
    if(comentario!=''){
        comentario = convertirAMinusculas(comentario);
        comentario = normalizarEspacios(comentario);
        comentario = limpiarComas(comentario);
        let div = dividirEnPalabras(comentario);
        detectarSentimiento(div);
    } else{
        alert("Escribe lo solicitado");
    }

}

function detectarSentimiento(arr) {
    let resultados = [], resultado;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if(modificador.includes(element))   resultados.push(2);
        else if(negacion.includes(element)) resultados.push(-1);
        else if(positivo.includes(element)) resultados.push(1);
    }
    if(resultados.length != 0){
        resultado = operacionAlgoritmo(resultados);
    }else resultado = `No hay suficiente informacion para determinar 
    si es positivo o negativo. Por lo tanto es neutral`;
    writeHtml(resultado);
}

function operacionAlgoritmo(resultados){
    let resultado_final = '';
    if(resultados.includes(2)) resultado_final = operacionOR(resultados);
    else resultado_final = operacionGenal(resultados);

return resultado_final;}

function operacionOR(resultados) {
    let part_one = 1, part_two = 1;
    for (let i = 0; i < resultados.length; i++) {
        const element = resultados[i];
        if(element == 2) {
            part_one = part_two;
            part_two = 1;
        }
        else part_two *= element;
    }
    if(part_one == 1 || part_two == 1) return 'El comentario es Positivo';
    else return 'El comentario es Negativo'
}

function operacionGenal(resultados) {
    let resultado = 1;
    for (let i = 0; i < resultados.length; i++) resultado *= resultados[i];
    if(resultado == 1) return 'Tu comentario es Positivo';
    else return 'Tu comentario es Negativo';
}

function writeHtml(resultado) {
    console.log('entro');
    document.querySelector('.transparent').classList.toggle('active');
    if(resultado.includes('Positivo')){
        document.getElementById('resultados').innerHTML = `
                                                        <h2>${resultado}</h2>
                                                        <div class = "img"><img src="./src/public/img/positivo.jpg" alt=""></div> `;
    }else if(resultado.includes('Negativo')){
        document.getElementById('resultados').innerHTML = `
                                                        <h2>${resultado}</h2>
                                                        <div class = "img"><img src="./src/public/img/negativo.jpg" alt=""></div> `;
    }else{
        document.getElementById('resultados').innerHTML = `
                                                        <h2>${resultado}</h2>
                                                        <div class = "img"><img src="./src/public/img/meh.jpg" alt=""></div> `;
    }
                                            
}