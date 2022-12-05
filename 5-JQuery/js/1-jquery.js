// Esta primera línea hace el mismo funcionamiento de window.onload
$(document).ready(function(){
    // Esta línea esta seleccionando la etiqueta body
    // $("body").text("Hola Mundo!") reemplazaría todo el texto de la
    // etiqueta body con "Hola Mundo!"
    $("body").append($("<h1></h1>").text("Esta es la cabecera de mi página")); // Cambiamos todo el contenido de body

    $("body").append($("<h1></h1>").text("Esta es una nueva cabecera"))
    $("body").append($("<h1></h1>").text("Esta es una nueva cabecera"))

    $("body").append("Hello World")
    // Agregamos los párrafos
    for (var i = 0; i < 10; i++) 
        $("body").append($("<p></p>").text("This has gone through the loop completely: " + i + " times"))
    
    // Eventos de click: cambiar fondo
    $("p").click(function(){
        if($(this).css("background-color") == "rgb(0, 0, 255)"){
            $(this).css("background-color","yellow");
        }else {
            $(this).css("background-color","blue");
        }
    })
});