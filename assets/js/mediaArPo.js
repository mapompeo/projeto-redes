let res = document.getElementById('res')
let btcopiar = document.getElementById('copiar')

function aritmetica(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    let res_media = 0

    res_media = (n1 + n2 + n3) / 3

    res.innerHTML = `A média aritmética das notas é = ${res_media.toFixed(2)}`
}

function ponderada(){
    let n1 = Number(document.getElementById('n1').value)
    let n2 = Number(document.getElementById('n2').value)
    let n3 = Number(document.getElementById('n3').value)
    let res_media = 0

    res_media = (n1 * 3 + n2 * 3 + n3 * 4) / 3 + 3 + 4
    
    res.innerHTML = `A média ponderada das notas é = ${res_media.toFixed(2)}`
}



function copiar() {
    let textoACopiar = ("codigo MEDIA ARITIMETICA PONDERADA codigo MEDIA ARITIMETICA PONDERADA\ndadadwadsadwa\n")
    navigator.clipboard.writeText(textoACopiar)

    btcopiar.innerHTML = 'Copiado!'
}