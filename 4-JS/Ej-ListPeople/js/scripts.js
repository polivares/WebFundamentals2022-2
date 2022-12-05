/* Descomentar para probar eventos con onclick */
function addName(){
    var name = document.getElementById("nombre").value;
    document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
    alert("Nombre ingresado");
}


/* Descomentar para probar eventos sin onclick */
/* Código con etiqueta script del todo arriba */
window.onload = function(){
    var  boton = document.getElementById('boton');
    boton.addEventListener('click',function(){
        var name = document.getElementById("nombre").value;
        document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
        alert("Nombre ingresado");
    })
}

/* Código con etiqueta script del todo abajo*/
// var  boton = document.getElementById('boton');
// boton.addEventListener('click',function(){
//     var name = document.getElementById("nombre").value;
//     document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
//     alert("Nombre ingresado");
// })

