function buscarlibro() {
    let libro = document.getElementById("title").value;

    fetch(`https://www.etnassoft.com/api/v1/get/?keyword=${libro}`)
        .then(function (respuesta) {
            return respuesta.json();
        })
        .then(function (datos) {
            if (!datos.results) {
                document.getElementById("div1").innerHTML =
                    "<p>Error en la búsqueda</p>";
            }
            for (let i = 0; i < datos.length; i++) {
                document.getElementById("div1").innerHTML += `
        <h1>${datos[i].title}</h1>
        <img src="${datos[i].cover}" alt="" />
        <p>${datos[i].author}</p>
  `;
            }
            console.log(datos);
        });
        
    
}
let data;
function mostrar() {
    data=document.getElementById("title").value;
    document.getElementById("div1").innerHTML= data; 
localStorage.setItem("libro", JSON.stringify(title));
        console.log(JSON.parse(localStorage.getItem("title")));
    } 

