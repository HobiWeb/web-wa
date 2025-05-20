let currentSlide = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

document.querySelector('.next').addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
});

document.querySelector('.prev').addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
});

function updateSlider() {
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}
