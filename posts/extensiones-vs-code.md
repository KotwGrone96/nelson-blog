---
title: 'Extensiones para Visual Studio Code'
date: '05-06-2022'
---

# Extensiones para Visual Studio Code

Si bien existen varios editores de código no podemos negar que Visual Studio Code es uno de los más usados, por no decir el más usado, en la industria para escribir nuestros proyectos.<br/> Es por eso que contar con herramientas que te faciliten escribir, te ahorren tiempo y a su vez te llenen de buenas prácticas para ser mejor programador, me parece fundamental para tu día a día.<br>Si bien hacemos incapie en vs code, las siguientes extensiones se pueden instalar en cualquier editor de código, así que sentite libre de usar el editor que quieras.

<br/><br/>

## Auto Close Tag

Sencilla, pero poderosa. Esta extensión te ahorrará bastante tiempo cuando escribas sintaxis HTML, JSX o XML.<br/>
Se trata de un auto cerrado de etiquetas que puede sonar a algo que ya hace la extensión Emmet, pero no es así.

```html
<div
```

> Al cerrar la etiqueta de apertura se generará la etiqueta de cierre

```html
<div></div>
```

Para poder usar esta extensión en otros archivos además de HTML, debemos configurar el settings.json con el siguiente código.

```json
{
  "auto-close-tag.activationOnLanguage": ["*"]
}
```

[Descargar Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)
<br/>
<br/>

---

<br/>

## Emmet

Si usas Visual Studio Code esta extensión ya viene instalada por default.<br/>
De lo contrario te recomienda instalarla ya que te ahorrará mucho tiempo escribiendo sintaxis html y css.
La sintáxis de Emmet es peculiar y transforma algo cómo esto **_section#first>p.text_**
<br/>
En esto <br/>

```html
<section id="first">
  <p class="text"></p>
</section>
```

No es necesario que aprendas TODA la sintaxis de Emmet, sino lo necesario para que puedas ahorrar tiempo escribiendo y sea todo más sencillo.<br/>
A continuación te dejo unas líneas de código para que pongas en tu settings.json para que Emmet pueda funcionar dentro de archivos .js y .jsx

```json
{
  "emmet.includeLanguages": {
    "javascript": "javascriptreact"
  }
}
```

[Descargar Emmet](https://code.visualstudio.com/docs/editor/emmet)
<br/>
<br/>

---

<br/>

## Auto Rename Tag

Cómo dije antes, simple pero poderosa. Esta extensión renombrará automáticamente el par de etiquetas html/xml y te evitará tener que estar encontrando la etiqueta de cierre en un bloque grande.<br/>
Basta con que renombres un solo lado de la etiqueta y el otro lo hará solo.

```html
<fo|>
  <input type="text" />
  <input type="submit" />
</fo>

// Escribiendo solo en la etiqueta de apertura
se completará abajo

<form>
  <input type="text" />
  <input type="submit" />
</form>
```

Podemos activar esta extensión en otros lenguajes en los que también brinda soporte. Te dejo el settings.json que tenés que copiar para tenerlo funcionando en otros archivos que no sean html.

```json
{
  "auto-rename-tag.activationOnLanguage": [
    "html",
    "xml",
    "php",
    "javascript",
    "javascriptreact"
  ]
}
```

[Descargar Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)
<br/>
<br/>

---

<br/>

## Html Tag Wrapper

Esta extensión nos va a servir para cuando por alguna razón tengamos que envolver un bloque entero de html/jsx/xml dentro de una etiqueta.<br/>
Simplemente debemos seleccionar todo el bloque que queremos envolver y apretar la combinación "ctrl + i", automáticamente todo nuestro bloque será envuelto dentro de una etiqueta DIV que viene por defecto, pero podemos renombrarla a la etiqueta que necesitemos.

<br/>

[Descargar Html Tag Wrapper](https://marketplace.visualstudio.com/items?itemName=bradgashler.htmltagwrap)
<br/>
<br/>

---

<br/>

## Live Server

Por lejos una extensión muy útil en el comienzo de nuestro camino.<br/>
Con esta extensión levantaremos un servidor que nos permitirá visualizar en tiempo real nuestro archivo html y se actualizará cuando hagamos cambios y sean guardados, sin lugar a duda esta herramienta no puede faltarte.

<br/>

[Descargar Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
<br/>
<br/>

---

<br/>

## Error Lens

Esta extensión nos brindará una ayuda visual increíble a la hora de escribir código. Error lens iluminará con colores las líneas de nuestro código que puedan tener sugerencias, advertencias o errores y nos dará un mensaje con con lo que haya que corregir. Simplemente una herramienta maravillosa.<br/>

![Error Lens](/images/errorlens.png)

[Descargar Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
<br/>
<br/>

---

<br/>

## Eslint

Eslint es sin dudas una extensión que vas a necesitar en tu camino cómo programador y que va a ayudar mucho a que tu código sea más limpio y que tenga buenas prácticas.<br/>
Para poder usar Eslint de manera correcta debemos configurar antes este lintern, eso te muestro acá en <span id="line-span">[Configurando Eslint](#)</span>.<br/>
Por lo pronto instalalo en tu editor de código.
<br/>

[Descargar Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
<br/>
<br/>

---

<br/>

## Prettier

Prettier es otra de esas herramientas que recomiendo fuertemente. Se trata de un formateador para tu código, es decir que identará tu código de una manera correcta y siguiendo algunas reglas que podés configurar mediante la interfaz de prettier o directamente en el settings.json.<br/>
A continuación te dejaré unas líneas de código para que prettier automáticamente formatee tu código al guardar los cambios sobre un archivos, entre otras configuraciones que me parecen de ayuda.

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.formatOnPaste": true
}
```

[Descargar Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
<br/>
<br/>

---

<br/>

## Path Intellisense

Esta herramienta te ayudará a autocompletar el path de cualquier archivo.<br/>
Esto es muy útil cuando tabajamos con módulos y queremos importar archivos que no son .js o .jsx, ya que como dije antes esta extensión buscará cualquier tipo de archivo.

<br/>

[Descargar Path Intellisense](https://marketplace.visualstudio.com/items?itemName=christian-kohler.path-intellisense)

<br/>
<br/>

---

<br/>

## Material Icon Theme

Este plugin si bien no es fundamental en tu editor de código, le agregará un toque de color y vida a los íconos de vs-code, personalmente me gustan los diseños que contiene este paquete ya que ayuda a identifar muy bien el tipo de archivo a primera vista.

<br/>

![Material Icon Theme](/images/material-Icon-Theme.png)

[Descargar Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
<br/>
<br/>
