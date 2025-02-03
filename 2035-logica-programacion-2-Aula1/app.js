function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function intentoDeUsuario() {
    alert('Click desde el boton');{}    
}

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina el número secreto que está entre 1 y 10');