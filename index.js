const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;

function showSlides() {
  slides.forEach((slide, i) => {
    if (i >= currentIndex && i < currentIndex + 3) {
      slide.style.display = "flex";
    } else {
      slide.style.display = "none";
    }
  });
}

function nextSlide() {
  if (currentIndex < totalSlides - 3) {
    currentIndex++;
    showSlides();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    showSlides();
  }
}

showSlides();
