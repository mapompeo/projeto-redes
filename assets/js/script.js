let header = document.querySelector('header');

window.addEventListener("scroll", function() {  //esse código faz com q mude o fundo do header quando scrolla a página (ChatGPT)
    if (window.scrollY > 1) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
