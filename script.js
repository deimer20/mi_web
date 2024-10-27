// script.js

// Obtén el modal
var modal = document.getElementById("myModal");

// Obtén el elemento que abre el modal
var trigger = document.querySelector(".modal-trigger");

// Obtén el elemento que cierra el modal
var span = document.getElementsByClassName("close")[0];

// Cuando se hace clic en el elemento, se abre el modal
trigger.onclick = function() {
    modal.style.display = "block";
}

// Cuando se hace clic en <span> (x), se cierra el modal
span.onclick = function() {
    modal.style.display = "none";
}

// Cuando se hace clic en cualquier parte fuera del modal, se cierra
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
