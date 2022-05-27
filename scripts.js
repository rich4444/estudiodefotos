//Slideshow
const slides = document.getElementsByClassName("slide");
let slideIndex = 1;
let autoSlider = setTimeout(plusSlides, 5000);

showSlides(slideIndex);

//Next and prev controls
function plusSlides(n = 1){
    clearTimeout(autoSlider);
    showSlides(slideIndex += n);
    autoSlider = setTimeout(plusSlides, 5000)
}

function showSlides(n){
    if(n > slides.length) {slideIndex = 1}
    if(n < 1){slideIndex = slides.length}
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}

//Nav bar buttons
const openButton = document.getElementById("openNavbar");
const closeButton = document.getElementById("closeNavbar");
const ulList = document.getElementById("navbarList");
const navLinks = document.querySelectorAll(".navLink");

navLinks.forEach(link => {
    link.addEventListener("click", () =>{
        closeNavBar();
    })
});

openButton.addEventListener("click", () => {
    closeButton.style.display = "block";
    ulList.style.display = "block";
    openButton.style.display = "none";
});

closeButton.addEventListener("click", () => {
    closeNavBar();
});

function closeNavBar (){
    closeButton.style.display = "none";
    ulList.style.display = "none";
    openButton.style.display = "block";
}

//Handle logos and back button
const logoSmall = document.getElementById("logo-small");
const backBtn = document.getElementById("backBtn");

window.onscroll = function() {
    var scrollLimit = 100;
    if (window.scrollY >= scrollLimit) {
      logoSmall.style.opacity = 1;
      backBtn.style.display = "block";
    } else {
        logoSmall.style.opacity = 0;
        backBtn.style.display = "none";
    }
  };