---
title: 'CSS Tips'
date: '05-11-2022'
---

# CSS Tips

Dar estilo a nuestros proyectos resulta ser una tarea que va de lo sencillo hasta darnos dolores de cabeza porque simplemente no podemos hacer que un diseño quede cómo nosotros queremos.<br/>
Es por eso que a continuación te quiero brindar un par de tips que a mi me sirvieron en su momento para solidificar mis bases sobre css y no hacerme tanto dolor de cabeza.

## Resetear estilos

El primer consejo que te quiero dar y que debería ser lo primero que tenés que hacer al comenzar a escribir tus hojas de estilo es resetear los estilos por defecto que tiene el navegador.<br/>
Una opción es usar un archivo llamado <span id="line-span">[Normalize.css](https://necolas.github.io/normalize.css/)</span> , este archivo viene cargado con todos los resets de estilos para que el navegador no pongas nada más que el font-family por defecto que tiene.<br/>
La otra forma sería a mano escribiendo un par de líneas al inicio de nuestra hoja de estilos.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none; /* Esto para sacar el underline de las etiquetas "a" */
  list-style: none; /* Esto para quitar el estilo a las listas*/
}

body {
  overflow-x: hidden;
  min-height: 100vh;
}
```

De esta manera con unas cuantas líneas de código logramos resetear los estilos por defecto del navegador, aunque nada nos garantiza que se vaya a cumplir entodos los navegadores. Es por eso que el "normalize.css" no me parece una mala opción, además no pesa nada, pero eso ya queda en cada uno.

---

## Tamaño de fuente

El segundo consejo que quiero darles es que definan el tamaño de los títulos y textos que vayan a utilizar y que primero lo hagan para mobile y luego escalen resoluciones más grandes.<br/>
Haciendo esto van a dar un orden a sus hojas de estilo y evitarán problemas en donde los tamaños de las fuentes varían entre cada páginam lo cual no se ve lindo.<br/>
Recomiendo al menos darles un tamaño por defecto al "h1", "h2", "h3" y "p".

```css
h1 {
  font-size: 32px;
}
h2 {
  font-size: 24px;
}
h3 {
  font-size: 19px;
}
p {
  font-size: 16px;
}
```

---

## Mobile First

En tercer lugar les vengo a proponer un punto de inicio a la hora de empezar a dar estilos o simplemente diseñar nuestra página.<br/>
**Mobile First** es un concepto bastante simple de entender, ya que propone encarara un trabajo desde resoluciones pequeñas hacia las más grandes, en este caso las resoluciones de dispositivos móviles, pasando por smartphones, tablets hasta llegar a las resoluciones de escritorio.<br/>
Pensar tu página desde una resolución pequeña en primera instancia te va a facilitar el responsive design ya que resulta más práctico escalar a resoluciones más grandes que viceversa.<br/>
Debemos tener en cuenta algún punto de quiebre en donde empiece el diseño para resoluciones más grandes a las de un smartphone. En mi experiencia suele utilizar un **min-width:768px** para indicar el final del diseño mobile y empezar con el diseño de otros dispositivos.

```css
@media screen and (min-width: 768px) {
}
```
