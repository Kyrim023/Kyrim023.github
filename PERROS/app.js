document.getElementById('competencia-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const puesto1 = document.getElementById('puesto1').value;
    const puesto2 = document.getElementById('puesto2').value;
    const puesto3 = document.getElementById('puesto3').value;


    const perros = {
        goldenRetriever: {
            nombre: "Golden Retriever",
            imagen: "https://www.shutterstock.com/image-photo/golden-retriever-dog-canis-lupus-600nw-2441858707.jpg",
            premios: {
                primero: 1000,
                segundo: 500,
                tercero: 300
            }
        },
        sanBernardo: {
            nombre: "San Bernardo",
            imagen: "https://www.zooplus.es/magazine/wp-content/uploads/2020/01/San-bernardo-6.jpg",
            premios: {
                primero: 800,
                segundo: 400,
                tercero: 200
            }
        },
        goldenLabrador: {
            nombre: "Golden Labrador",
            imagen: "https://www.dogster.com/wp-content/uploads/2024/03/Golden-Labrador-Retriever-in-the-grass-field-600x397.jpg",
            premios: {
                primero: 900,
                segundo: 450,
                tercero: 250
            }
        }
    };

    function mostrarResultado(puesto, lugar, idPuesto) {
        const perro = perros[puesto];
        if (perro) {
            const premio = perro.premios[lugar];
            document.getElementById(idPuesto).innerHTML = `
                <div>
                    <img src="${perro.imagen}" alt="${perro.nombre}" style="width:150px; height:auto;">
                    <p><strong>${perro.nombre}</strong></p>
                    <p><strong>${lugar.charAt(0).toUpperCase() + lugar.slice(1)} lugar:</strong> $${premio.toLocaleString('es-CO')}</p>
                </div>
            `;
        } else {
            document.getElementById(idPuesto).innerHTML = `<p>No se seleccionó un perro para este lugar.</p>`;
        }
    }

    mostrarResultado(puesto1, 'primero', 'puesto1-result');
    mostrarResultado(puesto2, 'segundo', 'puesto2-result');
    mostrarResultado(puesto3, 'tercero', 'puesto3-result');
});
