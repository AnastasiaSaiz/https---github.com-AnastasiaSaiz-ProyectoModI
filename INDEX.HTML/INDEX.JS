let url = "https://www.etnassoft.com/api/v1/get/?book_title";
let books = "";
fetch(url)
  .then(function (results) {
    return results.json();
  })
  .then(function cogerDatos(data) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
      books += `<div>
    <img src=${data[i].cover} alt=""/>
    <h1>${data[i].title} </h1>
    <h3>${data[i].author}
    </div>`;
    }
    document.getElementById("books").innerHTML = books;
  })

  
