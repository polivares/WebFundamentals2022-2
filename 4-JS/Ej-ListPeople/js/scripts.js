// window.onload = function(){
//     var  boton = document.getElementById('boton');
//     boton.addEventListener('click',function(){
//         var name = document.getElementById("nombre").value;
//         document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
//         alert("Nombre ingresado");
//     })
// }
function addName(){
    var  boton = document.getElementById('boton');
    boton.addEventListener('click',function(){
        var name = document.getElementById("nombre").value;
        document.getElementById("listado").innerHTML += "<li>" + name + "</li>";
        alert("Nombre ingresado");
    })
}