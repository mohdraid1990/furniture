const hamburger = document.querySelector(".hamburger-menu");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("hide");
});

// ------------------------------------------------- //




// Swiper


const slides = document.querySelectorAll('.mySlide');
let currentSlide = 0;
const totalSlides = slides.length;
const currentSlideElement = document.querySelector('.currentSlide');
const totalSlidesElement = document.querySelector('.totalSlides');

function showSlide(index) {
  slides.forEach(slide => slide.style.display = 'none');
  slides[index].style.display = 'block';
  currentSlideElement.textContent = formatNumber(index + 1);
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= totalSlides) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

function formatNumber(number) {
  return number.toString().padStart(2, '0');
}

showSlide(currentSlide);
totalSlidesElement.textContent = formatNumber(totalSlides);
setInterval(nextSlide, 3000);

// ------------------------------------   //

// scoll

document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector(".title h1");
  const imageElement = document.querySelector(".image img");
  const textElement = document.querySelector(".text");

  ScrollReveal().reveal(titleElement, {
    duration: 500,
    origin: "bottom",
    distance: "30px",
    delay: 300,
  });

  ScrollReveal().reveal(imageElement, {
    duration: 500,
    origin: "bottom",
    distance: "20px",
    delay: 400,
  });

  ScrollReveal().reveal(textElement, {
    duration: 1000,
    origin: "bottom",
    distance: "20px",
    delay: 1500,
  });
});

window.addEventListener("scroll", animateCards);

function animateCards() {
  const cards = document.querySelectorAll(".page-gellery .cards .card");

  cards.forEach((card) => {
    const cardPosition = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardPosition < windowHeight / 1.5) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", animateImage);

function animateImage() {
  const image = document.querySelector(".about .image");

  const imagePosition = image.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;

  if (imagePosition < windowHeight / 1.5) {
    image.classList.add("visible");
  }
}

// ؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟؟
// const link = document.createElement('link');
// link.rel = 'stylesheet';
// link.href = 'path/to/non-essential.css';
// link.media = 'print';
// document.head.appendChild(link);
// link.onload = function() {
//   link.media = 'all';
// };