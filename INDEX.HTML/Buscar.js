function buscarlibro() {
    let libro = document.getElementById("title").value;

    fetch(`https://www.etnassoft.com/api/v1/get/?keyword=${libro}`)
        .then(function (respuesta) {
            return respuesta.json
        })
        .then(function (datos) {
            if (!datos.results) {
                document.getElementById("div1").innerHTML =
                    "<p>Error en la búsqueda</p>";
            }
            document.getElementById("div1").innerHTML = `
      <h1>${datos.title}</h1>
      <img src="${datos.cover}" alt="" />
      <p>${datos.author}</p>
`;
            console.log(datos);
        });
}




/*


           console.log(datos);
           for (i = 0; i < datos.length; i++) {
               libro += `<div>
         <img src=${datos[i].cover} alt=""/>
         <h1>${datos[i].title} </h1>
         <h3>${datos[i].author}
         </div>`;
           }
           document.getElementById("books").innerHTML = books;
       }) */