let currentIndex = 0;

function showSlide(index) {
  const carouselContent = document.querySelector('.carousel-content');
  const slides = document.querySelectorAll('.carousel-item');
  const totalSlides = slides.length;

  if (index < 0) {
    index = totalSlides - 1;
  } else if (index >= totalSlides) {
    index = 0;
  }

  const translateValue = -index * 100 + '%';
  carouselContent.style.transform = 'translateX(' + translateValue + ')';
  currentIndex = index;
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

function nextSlide() {
  showSlide(currentIndex + 1);
}