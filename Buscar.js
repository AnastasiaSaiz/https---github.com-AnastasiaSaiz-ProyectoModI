function buscarlibro() {
    let libro = document.getElementById("title").value;
    
    fetch(`https://www.etnassoft.com/api/v1/get/?keyword=${libro}`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            console.log(datos);
            if (datos.results=null) {
                document.getElementById("div2").innerHTML =
                    `<p>Error en la búsqueda</p>`;
            }
            for (let i = 0; i < datos.length; i++) {
                document.getElementById("div2").innerHTML += `

                <div id="detallesbuscar">
            <img src="${datos[i].cover}" alt="" />
            <div id="detallesbuscar2">
            <h1>${datos[i].title}</h1>
            <p>${datos[i].author}</p>
            <p>${datos[i].publisher}</p>
            <p>${datos[i].content}</p>
            <button class="" onclick= "guardarlibro(${datos[i].ID},${i})"> Guardar libro </button>
        <button onclick= "Eliminarlibro(${datos[i].ID},${i})"> Eliminar Libro </button>
        <hr />
            </div>
            
            </div>

        
        
  `;
            }
            
        });
}

let listado = [];
        function guardarlibro(id, i) {
            console.log(id);
        
        
            fetch(`https://www.etnassoft.com/api/v1/get/?id=${id}`)
        
                .then(function (respuesta2) {
                    return respuesta2.json();
                })
                .then(function (datos2) {
                    listado[i] = datos2
                    localStorage.setItem("Librosfavoritos", JSON.stringify(listado));
        
        
        
                });}

                function Eliminarlibro(id,i) {


                    fetch(`https://www.etnassoft.com/api/v1/get/?id=${id}`)
                
                        .then(function (respuesta2) {
                            return respuesta2.json();
                        })
                        .then(function (datos2) {
                            listado[i] = datos2
                            delete listado[i];
                            localStorage.setItem("Librosfavoritos", JSON.stringify(listado));
                
                
                
                        });
                
                    }