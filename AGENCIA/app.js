document.getElementById('alquiler-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const carroSeleccionado = document.getElementById('carro').value;
    const dias = parseInt(document.getElementById('dias').value);

    let imagenCarro = "";
    switch (carroSeleccionado) {
        case "bmw":
            imagenCarro = "https://www.bmw.com.pe/content/dam/bmw/common/all-models/5-series/sedan/2020/models-and-equipment/bmw-5-series-sedan-models-and-equipment-lines-03-01.jpg.asset.1631533571837.jpg"; 
            break;
        case "mercedes":
            imagenCarro = "https://fotografias.larazon.es/clipping/cmsimages02/2020/09/28/1F217218-8857-4F62-AE74-333AB03E3771/98.jpg?crop=667,375,x0,y62&width=1900&height=1069&optimize=low&format=webply";
            break;
        case "twingo":
            imagenCarro = "https://thumbs.dreamstime.com/b/turqu%C3%ADa-lateral-de-enero-verde-renault-twingo-el-side-view-est%C3%A1-aparcado-en-la-calle-un-c%C3%A1lido-d%C3%ADa-verano-270823526.jpg";
            break;
        case "megane":
            imagenCarro = "https://barberauto.es/media/barberauto.es/vehiculos_ocasion/9393/20230316_083110_resized.jpg";
            break;
        case "chevrolet":
            imagenCarro = "https://assets.static-gm.com/Assets/925e467e-b354-4c6a-bee7-094286fb63d9/f68a3d4d-fe6f-49ce-80f6-d8140a6d8cdd/v-1692300059/Desktop.webp";
            break;
    }

    let precio = 0;
    if (dias <= 2) {
        precio = 30 * dias;
        document.getElementById('precio').style.backgroundColor = 'orange';
    } else if (dias <= 5) {
        precio = 25 * dias;
        document.getElementById('precio').style.backgroundColor = 'yellow';
    } else if (dias <= 10) {
        precio = 20 * dias;
        document.getElementById('precio').style.backgroundColor = 'green';
    } else {
        precio = 15 * dias;
        document.getElementById('precio').style.backgroundColor = 'blue';
    }

    document.getElementById('imagen-carro').style.backgroundImage = `url('${imagenCarro}')`;
    document.getElementById('precio').textContent = `El precio es: $${precio} por ${dias} días`;
});
