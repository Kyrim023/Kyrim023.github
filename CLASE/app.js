document.addEventListener("DOMContentLoaded", function() {
    const apiUrl = "https://jsonplaceholder.typicode.com/users";

    fetch(apiUrl)
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error en la solicitud: " + respuesta.statusText)
            }
            return respuesta.json()
        })
        .then(informacion => {
            console.log(informacion)
            let contenedor = document.getElementById("listausuario")
            contenedor.innerHTML = ""

            informacion.forEach(item => {
                let fila = `
                    <tr>
                        <td>${item.name}</td>
                        <td>${item.email}</td>
                        <td>${item.phone}</td>
                        <td>${item.address.city}</td>
                    </tr>
                `
                contenedor.innerHTML += fila
            })
        })
        .catch(error => {
            console.error("Error en la consulta", error)
        })
})

