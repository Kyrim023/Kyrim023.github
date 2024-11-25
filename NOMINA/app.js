document.getElementById('nomina-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const salarioBase = parseFloat(document.getElementById('salarioBase').value);
    const ingresos = parseFloat(document.getElementById('ingresos').value);
    const egresos = parseFloat(document.getElementById('egresos').value);

    const salarioTotal = Math.round(salarioBase + ingresos - egresos);
    const totalIngresos = Math.round(ingresos);
    const totalEgresos = Math.round(egresos);

    const formatearMoneda = (valor) => {
        return new Intl.NumberFormat('es-CO').format(valor);
    };

    document.getElementById('salarioTotal').textContent = `Salario Total: $${formatearMoneda(salarioTotal)}`;
    document.getElementById('totalIngresos').textContent = `Total Ingresos: $${formatearMoneda(totalIngresos)}`;
    document.getElementById('totalEgresos').textContent = `Total Egresos: $${formatearMoneda(totalEgresos)}`;
});
