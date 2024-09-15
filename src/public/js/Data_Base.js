
/* 
@Autor: Cristopher Camacho Durán
@App: Analizador de comentario
@File: Data_Base.js
@Version: v1.0.0
@Fecha: 13/09/2024
@Licencia: MIT
@GIT Repository: 

Descripción:
Aqui se almacena la Base De Conocimiento con el que los comentarios se van a analizar para determinar si es positivo o negativo

Funciones:
- 3 constantes que almacenas y simulan una BD
*/

const negacion = ['no', 
                'feo',
                'horrible',
                'disgusto',
                'nada', 
                'fea',
                'malo',
                'malisimo',
                'disgusta']; // -1

const positivo = ['gusto', 
                'encanto', 
                'chido',
                'buen',
                'bueno', 
                'buenisimo',
                'cool', 
                'agrado', 
                'gusta', 
                'encanta', 
                'cumple',
                'agrada', 
                'chida']; // 1

const modificador = ['pero', 
                    'sin embargo', 
                    'y']; // 2


