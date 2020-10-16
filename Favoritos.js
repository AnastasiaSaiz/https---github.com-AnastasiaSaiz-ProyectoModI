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

let listado = [];
function guardarlibro() {
    let titulo = document.getElementById("title").value;
    window.alert(titulo);
    listado.push(titulo);
    localStorage.setItem("listado",JSON.stringify(listado));
    document.getElementById("div1").innerHTML= listado
}
/*let data;
function mostrar() {
    data = document.getElementById("title").value;
    document.getElementById("div1").innerHTML =
        `<h1>${data.title}</h1>
    <img src="${data.cover}" alt="" />
    <p>${data.author}</p>`;
    localStorage.setItem("title", JSON.stringify(title));
    console.log(JSON.parse(localStorage.getItem("title")));
}*/

