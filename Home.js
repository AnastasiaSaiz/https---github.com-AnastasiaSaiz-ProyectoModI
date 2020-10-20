let resultsNav = document.getElementById('resultsNav');
let favoritesNav = document.getElementById('favoritesNav');
let imagesContainer = document.querySelector('.images-container');
let saveConfirmed = document.querySelector('.save-confirmed');
let loader = document.querySelector('.loader');
let resultsArray = [];
let favorites = {};
let apiUrl = `https://www.etnassoft.com/api/v1/get/?keyword`;



fetch(`https://www.etnassoft.com/api/v1/get/?criteria=most_viewed`)
.then(function (respuesta) {
    return respuesta.json();
})
.then(function (datos) {
    
    for (let i = 0; i < datos.length; i++) {
        document.getElementById("divcarrusel").innerHTML += `
<img src="${datos[i].cover}" alt="" HSPACE=10 , VSPACE=15/>
`;

    }
    console.log(datos);


});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
