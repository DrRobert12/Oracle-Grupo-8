let numeroSecreto = 7;
let numeroUsuario = 0;
let intentos = 1;
let palabrasVeces = "vez";
let 
while (numeroUsuario != numeroSecreto) {
    let numeroUsuario = prompt("Me indicas un numero por favor, entre el 1 y el 10:");

    console.log(numeroUsuario);
    
    if (numeroUsuario == numeroSecreto) {
        alert(`Acertaste, el numero era: ${numeroUsuario}. Lo lograste en ${intentos} ${palabrasVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El numero secreto es menor');
        } else {
            alert('El numero secreto es mayor');
        
        intentos = intentos + 1;    
        palabrasVeces = "veces";
    };
    }//se incrementa el contador a medida que va intentando//
}