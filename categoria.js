let resultsNav = document.getElementById('resultsNav');
let favoritesNav = document.getElementById('favoritesNav');
let imagesContainer = document.querySelector('.images-container');
let saveConfirmed = document.querySelector('.save-confirmed');
let loader = document.querySelector('.loader');
let resultsArray = [];
let favorites = {};
let apiUrl = `https://www.etnassoft.com/api/v1/get/?keyword`;
let NombreCategoria ="";



fetch(`https://www.etnassoft.com/api/v1/get/?get_categories=all
`)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (datos) {
    if (!datos.results) {
        
    }
    for (let i = 0; i < datos.length; i++) {
        console.log(datos[i]);
        NombreCategoria=datos[i].name
        document.getElementById("divBotones").innerHTML += `
        <button id="botoncategoria" onclick= "BuscarLibrosporCategoria(${datos[i].category_id})"> ${datos[i].name} </button>
`;

    }


});


function BuscarLibrosporCategoria(nombre){
    
    document.getElementById("div1").innerHTML = ``
        fetch(`https://www.etnassoft.com/api/v1/get/?category_id=${nombre}`)
    
            .then(function (respuesta) {
                return respuesta.json();
            })
            .then(function (datos) {
                if (datos.results=null) {
                    document.getElementById("div1").innerHTML =
                        "<p>Error en la búsqueda</p>";
                }
                for (let i = 0; i < datos.length; i++) {
                    document.getElementById("div1").innerHTML += ` 
            
            <div id="detallescategoria">
            <img src="${datos[i].cover}" alt="" />
            <div id="detallescategoria2">
            <h1>${datos[i].title}</h1>
            <p>${datos[i].author}</p>
            <p>${datos[i].publisher}</p>
            <p>${datos[i].content}</p>
            </div>
            </div>
           
            `;
    
                }
                console.log(datos);
    
    
            });
    
    
}


