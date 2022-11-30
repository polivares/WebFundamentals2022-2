// Antes de modificar nuestra página, esta debe estar cargada COMPLETAMENTE
// Esta espera es la que hace la línea window.onload
window.onload = function () {
  // Acá dentro está el código js que modifica nuestra página

  // Para modificar la estructura de nuestro html (DOM) debemos utilizar una variable que
  // js entrega para este propósito: document

  // Ej: queremos modificar el cuerpo (etiqueta body) de nuestra página:
  document.body.innerHTML = "<h1> Esta es la cabecera de mi página </h1>";
  document.body.innerHTML += "<h1> Esta es una nueva cabecera </h1>";
  document.body.innerHTML = document.body.innerHTML + "<h1> Esta es una nueva cabecera </h1>"

  var bod = document.body;
  // es más divertido si es una página al azar que ya incluya cosas en ella (como la plataforma de aprendizaje, por ejemplo).
  bod.innerHTML += "Hello World";
  
  for (var i = 0; i < 10; i++) {
    bod.innerHTML +=
      "<p>Esto ha pasado por el loop completamente: " + i + " veces</p>";
  }

  // Aquí seleccionamos todos aquellos elementos con etiqueta p
  var paragraphs = document.getElementsByTagName("p");
  console.log(paragraphs); // Revisarlo en el navegador!
  // Ahora que tenemos almacenados todos los párrafos en nuestro arreglo paragraphs
  // podemos recorrer cada uno de estos párrafos con un for
  for (var i = 0; i < paragraphs.length; i++) {
    // Acá estamos modificando cada elemento párrafo
    paragraphs[i].addEventListener("click", function () {
      if(this.style.background == "blue")
        this.style.background = "yellow";
      else
        this.style.background = "blue";
    }); 
  }
};
