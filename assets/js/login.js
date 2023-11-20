function show(){
    let senha = document.getElementById('senha')
    let mostrarSenha = document.getElementById('mostrarSenha')

    if(senha.type === 'password'){
        senha.setAttribute('type','text')
        mostrarSenha.classList.replace('bi-eye','bi-eye-slash')
    }else{
        senha.setAttribute('type','password')
        mostrarSenha.classList.replace('bi-eye-slash', 'bi-eye')
    }
}

// document.addEventListener("DOMContentLoaded", function() {
//     var boxLogin = document.querySelector(".box-login");
//     var highlight = document.createElement("div");
//     highlight.className = "highlight";
//     document.body.appendChild(highlight);

//     boxLogin.addEventListener("mousemove", function(event) {
//         // Atualiza a posição e tamanho do destaque com base nas coordenadas do mouse
//         var rect = boxLogin.getBoundingClientRect();
//         highlight.style.width = event.clientX - rect.left + "px";
//         highlight.style.height = event.clientY - rect.top + "px";
//         highlight.style.left = rect.left + "px";
//         highlight.style.top = rect.top + "px";
//     });

//     boxLogin.addEventListener("mouseleave", function() {
//         // Remove o destaque quando o mouse sai do box-login
//         highlight.style.width = "0";
//         highlight.style.height = "0";
//     });
// });