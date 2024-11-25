document.getElementById('juegoForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const respuesta1 = document.getElementById('pregunta1').value.toLowerCase();
    const respuesta2 = document.getElementById('pregunta2').value.toLowerCase();
    const respuesta3 = document.getElementById('pregunta3').value.toLowerCase();

    const respuestaCorrecta1 = 'si';
    const respuestaCorrecta2 = 'si';
    const respuestaCorrecta3 = 'si';

    let esGanador = true;
    if (respuesta1 === respuestaCorrecta1) {
        if (respuesta2 === respuestaCorrecta2) {
            if (respuesta3 === respuestaCorrecta3) {
                esGanador = true;
            } else {
                esGanador = false;
            }
        } else {
            esGanador = false;
        }
    } else {
        esGanador = false;
    }

    const mensaje = document.getElementById('mensaje');
    if (esGanador) {
        mensaje.textContent = '¡Felicidades! Eres el ganador.';
        mensaje.classList.remove('perdedor');
        mensaje.classList.add('ganador');
    } else {
        mensaje.textContent = 'Lo siento, has perdido. ¡Intenta nuevamente!';
        mensaje.classList.remove('ganador');
        mensaje.classList.add('perdedor');
    }
});
