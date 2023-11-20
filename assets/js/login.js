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