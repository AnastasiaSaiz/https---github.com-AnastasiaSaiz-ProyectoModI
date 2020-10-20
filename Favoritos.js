let resultsNav = document.getElementById('resultsNav');
let favoritesNav = document.getElementById('favoritesNav');
let imagesContainer = document.querySelector('.images-container');
let saveConfirmed = document.querySelector('.save-confirmed');
let loader = document.querySelector('.loader');
let resultsArray = [];
let favorites = {};
let apiUrl = `https://www.etnassoft.com/api/v1/get/?keyword`;

function buscarlibro() {
    let libro = document.getElementById("title").value;
    document.getElementById("div1").innerHTML = ``
    const count = `&count=10`;
    fetch(`https://www.etnassoft.com/api/v1/get/?keyword=${libro}${count}`)

        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            if (datos.results=null) {
                document.getElementById("div1").innerHTML =
                    `<p>Error en la búsqueda</p>`;
            }
            for (let i = 0; i < datos.length; i++) {
                document.getElementById("div1").innerHTML += `
                
        
        <div id="detallesbuscar">
        <img src="${datos[i].cover}" alt="" />
        <div id="detallesbuscar2">
        <h1>${datos[i].title}</h1>
        <p>${datos[i].author}</p>
        <p>${datos[i].publisher}</p>
        <p>${datos[i].content}</p>
        <button class="" onclick= "guardarlibro(${datos[i].ID},${i})"> Guardar libro </button>
        </div>
        </div>
        `;

            }
            console.log(datos);


        });





}
function mostrarfavoritos() {
    if (localStorage.getItem('Librosfavoritos')) {
        favorites = JSON.parse(localStorage.getItem('Librosfavoritos'));
        console.log(favorites);
    }
    document.getElementById("div1").innerHTML=``
    for (let i = 0; i < favorites.length; i++) {
        
 document.getElementById("div1").innerHTML += `

 <div id="favoritosdetalles">
            <img src="${favorites[i][0].cover}" alt="" />
            <div id="detallesfavoritos2">
            <h1>${favorites[i][0].title}</h1>
            <p>${favorites[i][0].author}</p>
            <p>${favorites[i][0].publisher}</p>
            <p>${favorites[i][0].content}</p>
            
        <button onclick= "Eliminarlibro(${favorites[i][0].ID},${i})"> Eliminar Libro </button>
        <hr />
            </div>
            
            </div>
  
        
`;
/* <button onclick= "Eliminarlibro(${favorites[i].ID},${i})"> Eliminar Libro </button> */
    }
}







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
        
        
        
                });
        





    /* let titulo = results.title;
     let portada = results.cover;
     let autor = results.author;
     */

    /*listado.push(results);*/


}
/*
function saveFavorite(itemUrl) {
    // Loop through Results Array to select Favorite
    resultsArray.forEach((item) => {
        if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
            favorites[itemUrl] = item;
            // Show Save Confirmation for 2 seconds
            saveConfirmed.hidden = false;
            setTimeout(() => {
                saveConfirmed.hidden = true;
            }, 2000);
            // Set Favorites in localStorage
            localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
        }
    });
}

/*
let data;
function mostrar() {
    data = document.getElementById("title").value;
    document.getElementById("div1").innerHTML =
        `<h1>${data.title}</h1>
    <img src="${data.cover}" alt="" />
    <p>${data.author}</p>`;
    localStorage.setItem("title", JSON.stringify(title));
    console.log(JSON.parse(localStorage.getItem("title")));
}*/

