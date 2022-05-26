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

//Handle logos
const logoSmall = document.getElementById("logo-small");

window.onscroll = function() {
    var scrollLimit = 100;
    if (window.scrollY >= scrollLimit) {
      logoSmall.style.opacity = 1;
    } else {
        logoSmall.style.opacity = 0;
    }
  };


//Modals
const closeModal = document.querySelectorAll(".close");
const modals = document.querySelectorAll(".modal");
const loquieroButton = document.querySelectorAll(".loquiero");

document.getElementById("openNewborn").addEventListener("click", () => {
        openModal("modal-newBorn");
  });
  
document.getElementById("openMaternity").addEventListener("click", () => {
    openModal("modal-maternity");
});

document.getElementById("openBaby").addEventListener("click", () => {
    openModal("modal-baby");
});

document.getElementById("openPrecumple").addEventListener("click", () => {
    openModal("modal-precumple");
});

closeModal.forEach(btn => {
    btn.addEventListener("click", () =>{
    closeAllModals();
    })
});

loquieroButton.forEach(btn => {
    btn.addEventListener("click", () => {
        closeAllModals();
        window.location.hash = "contacto";
    })
})

function openModal (modal){
    modals.forEach(m => {
        if(m.getAttribute('id')==modal){
            m.style.display = "block";
        }
    })
}

function closeAllModals (){
    modals.forEach(m => {
        m.style.display = "none";
    })
}