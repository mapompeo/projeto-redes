let header = document.querySelector('header');

window.addEventListener("scroll", function() {
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


document.getElementById('voltar').addEventListener('click', function() {
    window.history.back();
});