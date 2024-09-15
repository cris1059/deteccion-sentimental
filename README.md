# Analizador de Comentario / sentimental

## Descripción

El "Analizador de Comentario" es una aplicación diseñada para analizar comentarios y determinar si el sentimiento expresado es positivo o negativo. Utiliza un conjunto de palabras clave para realizar el análisis y presenta los resultados en una interfaz de usuario web.

## REPOSTORIO Y APP DESPLEGADA

- Repositorio: https://github.com/cris1059/deteccion-sentimental.git
- App Desplegada: https://deteccion-sintactico.netlify.app/

## Índice

- [Características](#características)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Licencia](#licencia)

## Características

- **Análisis de Sentimiento:** Determina si un comentario es positivo o negativo basado en palabras clave.
- **Interfaz de Usuario:** Ofrece una interfaz simple para ingresar comentarios y visualizar resultados.
- **Manejo de Modificadores:** Maneja modificadores como "pero" que pueden cambiar el sentimiento del comentario.

## Instalación

1. **Clona el Repositorio**

   ```bash
   git clone https://github.com/cris1059/deteccion-sentimental.git

2. **Navega a la Carpeta del Proyecto**

    cd analizador-comentario

3. **Abre el Archivo index.html en tu Navegador**

    Simplemente abre el archivo index.html en tu navegador preferido para iniciar la aplicación.

# Análisis de Sentimientos

## COLABORADORES

- Fabricio Haziel Mejia Manzilla (Tester)

## Uso

1. **Ingresa un Comentario:** Escribe un comentario en el área de texto proporcionada.
2. **Genera el Análisis:** Haz clic en el botón "Generar" para analizar el comentario.
3. **Visualiza el Resultado:** El resultado se mostrará en una ventana modal indicando si el comentario es positivo, negativo o indeterminado.

## Estructura del Proyecto

- **index.html:** Archivo principal de la interfaz de usuario.
- **src/public/js/script_general.js:** Contiene la lógica principal para el análisis de sentimientos.
- **src/public/js/tools-script.js:** Funciones utilitarias para manipulación de texto y eventos.
- **src/public/js/sData_Base.js:** Base de datos simulada con palabras clave para análisis.
- **src/public/style/style.css:** Estilos generales del sistema.
- **src/public/style/style_modal.css:** Estilos para la ventana modal.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para más detalles.

Para más información, consulta el código fuente o ponte en contacto con el autor, Cristopher Camacho Durán.
