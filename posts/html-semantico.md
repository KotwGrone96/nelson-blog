---
title: 'HTML Semántico'
date: '05-07-2022'
---

# HTML Semántico

Si bien HTML no es un lenguaje difícil de aprender, muchas veces olvidamos la semántica fundamental y tendemos a encerrar todo dentro de una etiqueta DIV.<br/>
En este artículo quiero compartir algunas buenas prácticas en relación a la semántica, ya que no es algo complejo, pero en la práctica no solo nos olvidamos, sino que también nos va a tocar revisar código ajeno que cayó en malas prácticas, por lo que está bueno hacernos amigos de la semántica desde un principio.

## Etiquetas obsoletas

Con el paso del tiempo HTML ha evolucionado hasta llegar a lo que conocemos hoy en su versión 5, por lo que no es absurdo pensar que muchas cosas que se practicaban antes, hoy resultan descontinuadas.<br/>
Es importante mantenerse actualizado con los nuevos cambios de las tecnologías que manejemos por varias razones que van desde funcionalidades que ya no reciben soporte en los navegadores, hasta la indexación por parte de los robots buscadores que siempre priorizan sitios web con buenas prácticas.<br/>
Algunas de estas etiquetas en desuso son `<center/> | <font/> | <menu/> | <hgroup/>` entre otras.<br/>
En el siguiente link encontrarás no solo etiquetas, sino también atributos obsoletos en HTML 5.<br/>
[Ver html obsoleto](https://lenguajehtml.com/html/semantica/etiquetas-html-obsoletas/)

---

## Semántica básica

Muchos editores de texto ya cuenta con atajos para armar una estructura básica de un documento html.<br/>
Algo más o menos así.

```html
<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body></body>
</html>
```

Pero ¿Cómo debemos llenar estas etiquetas?<br/>
Imagino que ya tendrás una noción de las etiquetas anteriores y si no es así te lo explico rápido.<br/>

- !DOCTYPE : Indica el tipo de documento.
- `<html>` : Etiqueta de apertura de documento html.
- `<head>` : Etiqueta de elementos NO visibles para el usuario.
- `<body>` : Etiqueta de elementos visibles para el usuario.

### Etiqueta head

Dentro de ella deben ir todos los metadatos como el título del archivo y su descripción. También deberían ir los links de nuestros archivos CSS en caso de que estemos trabajando los estilos en una hoja aparte (que sería lo correcto en vez trabajar los estilos dentro del mismo archivo html), así como también podemos cargar scripts para que se ejecuten lo más antes posible a la carga del DOM.<br/>
A continuación te dejo un ejemplo con metadatos fundamentales que deberías poner en cada proyecto.

```html
<head>
  <meta name="viewport" content="width=device-width" />
  <meta charset="utf-8" />
  <meta name="description" content="breve descripción de la página..." />
  <title>Título de la página</title>
</head>
```

Title y meta description son etiquetas que no deben faltarte nunca ya que es lo que los motores de busqueda utilizan para coincidir con lo que busca un usuario.<br/>
Por otro lado el matadato "u1tf-8" indica la codificación de lo que escribamos en la página y que así pueda ser interpretado por el navegador, de lo contrario palabras con tílde podrían verse algo raras debido a que el navegador no comprende este caracter.<br/>
Por último el metadato "viewport" ajusturá el tamaño de nuestra página al dispositivo en el que se visualice. Básicamente volverá nuestro sitio responsive, aunque ya sabemos que esto después debemos trabajarlo aparte con css.

### Etiqueta body

Esta etiqueta es el cuerpo de nuestra página, es decir todo lo que será visto por el usuario. Acá es donde por lo general se empieza a perder la semántica y caemos en encerrar div sobre otro div y así hasta el infito y más allá.<br/>
Te dejo un ejemplo básico de cómo debería estar estructurado el body.

```html
<body>
  <header></header>
  <main></main>
  <footer></footer>
</body>
```

Vamos a explicar brevemente para que sirve cada una de estas etiquetas y luego entraremos en detalle.

- `<header>` : Es la cabecera de nuestra página.
- `<main>` : Acá va el contenido principal de la página.
- `<footer>` : Este es el pie de página.

Anterior a HTML 5 se marcaban etiquetas DIVs con estos nombres como IDs. Por favor NO HAGAN ESTO, ya que para eso se crearon estas etiquetas nuevas en la versión 5, así cómo otras más que se crearon.

### Etiqueta header

Cómo ya dijimos esta etiqueta representa la cabecera de nuestra página. Muchas veces la verás siempre presenta mientras navegás por una web, cómo por ejemplo en esta misma página y en otras ocasiones simplemente anclada en lo superior, eso ya depende del diseño.<br/>
Al principio creía que esta etiqueta simplemente servía para alojar el nav, pero la verdad que estuve MUY EQUIVOCADO 😅

```html
<header>
  <img src="" alt="" />
  <nav>
    <a href="">Inicio</a>
    <a href="">Sobre mi</a>
    <a href="">Contacto</a>
  </nav>
  <div class="otros-items"></div>
</header>
```

Este es un ejemplo de todo lo que podemos alojar dentro de la cabecera. Como dije antes mi razonamiento en cuanto al header era erróneo ya que dentro del mismo debemos alojar no solo el nav, sino todo lo que creamos que debe verse como cabecera, por ejemplo el logo de una marca entre otras utilidades.

### Etiqueta main

Acá alojamos nuestro contenido principal, pero exactamente ¿cómo debemos hacerlo?<br/>
Bueno, a continuación te presento situaciones típicas a la hora de empezar a dar forma a nuestra página.

<span class="main-item">**_Secciones_**</span>

La mejor manera de empezar a seccionar nuestra página y darle una correcta estructura es dividir nuestro contenido principal en secciones.<br/>
Para ello haremos uso de la etiqueta `<section></section>` . <br/>
Es importante resaltar que dentro del "section" deberías tener una etiqueta heading (h2, h3...) que de nombre a la sección y no por fuera. No es un detalle que te vaya a cambiar la vida, pero es más comprensible a nivel lectura y te va a servir para darle un estilo definido a cada etiqueta heading que se encuentre dentro de una etiqueta "section".<br/>
Como consejo te puedo decir que antes de que empieces a llenar el `<main>` trates de hacer un boceto de una primera estructura de tu página, creeme que más adelante te va a servir ya que de seguro vas a querer modificar, agregar o eliminar elementos y el tener una estructura sólida te ayudará a que no tengas que estar moviendo elementos de más o rompiendo poco a poco tu página, es pocas palabras te va a ahorrar dolores de cabeza.

<span class="main-item">**_Imágenes_**</span>

Al principio nos acostumbramos a que las imágenes vayan dentro del "div" al que pertenecen o simplemente poner una etiqueta "div" para contener una imagen y algo de texto. Bueno es momento de hacer uso de la etiqueta `<figure></figure>`, que si bien tiene varios usos, el más común es para remarcar imágenes de contenido independiente que están relacionadas con el eje principal de nuestro contenido, pero no deja de ser independiente. Dentro de este elemento podemos hacer uso de otra etiqueta llamada `<figcaption></figcaption>` que representa una descripción del contenido independiente alojado en "figure", es decir que es el lugar perfecto para alojar el texto que se relacione con esta imagen.

```html
<figure>
  <img src="image.jpg" alt="image" />
  <figcaption>
    <h3>Título</h3>
    <p>Descripción</p>
  </figcaption>
</figure>
```

Esto es simplemente un ejemplo básico de cómo estructurar dentro de "figure", acá lo importante es que dejes de usar "div" para todo y empieces a usar las demás etiquetas destinadas a una tarea en concreto.

<span class="main-item">**_Artículos_**</span>

Esta es una etiqueta que la veo muy poco y que estaría bueno empezar a usarla. La etiqueta `<article></article>` nos va a servir para agrupar nuestros artículos dentro de "section" o incluso por fuera. En caso de usar varios "article" dentro de un "section", estos se anidarán y darán a entender que los tópicos que contienen están relacionados en base al "section".

```html
<section>
  <h2>Título</h2>
  <article>
    <h3>Artículo 1</h3>
  </article>
  <article>
    <h3>Artículo 2</h3>
  </article>
  <article>
    <h3>Artículo 3</h3>
  </article>
</section>
```

De nuevo, si un artículo no tiene relación alguna con la sección en la que estás o simplemente no sigue el hilo del contenido, simplemente ubicalo por fuera de las secciones, pero tratá de darle una etiqueta heading en la medida de lo posible.

<span class="main-item">**_Aside_**</span>

Esta etiqueta nos va a servir para cuando necesitemos un menú de navegación o quizá un índice de nuestra página ubicado a los costados de la misma.<br/> A diferencia del "nav" que lo encontraremos en la mayoría de los casos ubicado en la parte superior y algunas veces a los costados (como en los layouts de un dashboard), la etiqueta `<aside></aside>` representa una sección que está directamente relacionada con el contenido de la página y se ubica al costado de la misma y en su mayoría de usos la encontraremos siempre visible al hacer scroll (position: fixed). Es decir que es el lugar perfecto para poner un menú de índice en caso que nuestra página lo necesite o simplemente agregar información que necesitemos que esté, pero que no esté sobre la línea de nuestro contenido, sino a un lado. En otras ocasiones la podemos encontrar alojando simple publicidad que también puede tener relación, o no, con el contenido de la página, por ejemplo leer un blog de libros de ficción y que al costado aparezca publicidad de una tienda que venda libros, etc.

### Etiqueta footer

Acá si no hay mucho que agregar, existen alguas etiquetas específicas con relación al footer y la información que podemos mostrar, cómo la etiqueta `<addres></addres>` que es para almacenar información en relación al autor de la web, pero acá no se maten pensando mucho en semántica, simplemente tengan presenta que SIEMPRE deben tener un pie de página.

---

## Conclusión

Como podés ver, existen varias etiquetas además de "div", algunas más usadas que otras, pero con lo visto hasta acá ya es suficiente para que puedas aplicar una mejor semántica y distribución a tus hojas de hipertexto. A mi parecer, lo esencial es que siempre tengas dentro de `<body/>` un `<header/> un <main/> y un <footer/>`
, luego aplicar en cada uno todo lo que vimos en este blog.
