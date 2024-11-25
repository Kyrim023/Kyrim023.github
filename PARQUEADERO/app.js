document.getElementById('parqueadero-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const horaEntrada = document.getElementById('horaEntrada').value;
    const horaSalida = document.getElementById('horaSalida').value;

    const entrada = new Date(`1970-01-01T${horaEntrada}:00`);
    const salida = new Date(`1970-01-01T${horaSalida}:00`);

    if (salida < entrada) {
        salida.setDate(salida.getDate() + 1);
    }

    const diferenciaEnMinutos = (salida - entrada) / 60000; 
    const horas = Math.ceil(diferenciaEnMinutos / 60);
    const costo = horas * 1500;

    const costoFormateado = costo.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    });

    document.getElementById('totalHoras').textContent = `Total horas o fracción: ${horas} horas`;
    document.getElementById('costoTotal').textContent = `Costo total: ${costoFormateado}`;
});
