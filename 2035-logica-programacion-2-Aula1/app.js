let numeroSecreto = generarNumeroSecreto();
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.log (typeof (numeroDeUsuario));
    console.log (numeroSecreto);
    console.log (typeof (numeroSecreto));
    console.log (numeroDeUsuario);
    console.log (numeroDeUsuario === numeroSecreto); 
    return;
}
function generarNumeroSecreto() {
    return numeroSecreto = Math.floor(Math.random() * 10) + 1;
     
}
asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', 'Adivina el número secreto que está entre 1 y 10');