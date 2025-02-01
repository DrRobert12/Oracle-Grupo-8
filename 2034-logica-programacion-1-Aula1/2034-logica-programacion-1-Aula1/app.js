let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un numero por favor, entre el 1 y el 10:");

    console.log(numeroUsuario);
    intentos = intentos + 1;
    //comentario//

    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero era: ${numeroUsuario}. Lo lograste en ${intentos} intentos`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        }
    }//se incrementa el contador a medida que va intentando//
}