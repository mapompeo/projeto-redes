//O carrossel não foi criado por nós, mas sim pelo ChatGPT. Ainda não possuimos o conhecimento suficiente para fazer este carrossel, mas a estilização foi totalmente realizada pelos devs

console.log("O carrossel não foi criado por nós, mas sim pelo ChatGPT. Ainda não possuimos o conhecimento suficiente para fazer este carrossel, mas a estilização foi totalmente realizada pelos devs")

let currentIndex = 0;

function showSlide(index) {
    const carouselContent = document.querySelector('.carousel-content');
    const slides = document.querySelectorAll('.carousel-item');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const totalSlides = slides.length;

    if (index < 0) {
        index = totalSlides - 1;
    } else if (index >= totalSlides) {
        index = 0;
    }

    const translateValue = -index * 100 + '%';
    carouselContent.style.transform = 'translateX(' + translateValue + ')';
    currentIndex = index;

    // Atualizar indicadores de paginação
    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[index].classList.add('active');
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function nextSlide() {
    showSlide(currentIndex + 1);
}