let res1 = document.getElementById('res1')
let res2 = document.getElementById('res2')
let res3 = document.getElementById('res3')
let res4 = document.getElementById('res4')
let array = []

function random02(min,max){
    let resposta_random = 0
    resposta_random = Math.floor(Math.random() * (max - min + 1)+ min);
    return resposta_random
}
function gerar02(){
    res1.innerHTML = ''
    array = []
    let min = 0
    let max = 50
    let max_array = 10

    for(i = 0; i < max_array; i++){
        let res_gerar = random02(min,max)
        array.push(res_gerar)
    }
    res1.innerHTML = `Valores aleatórios: ${array.join(", ")}.`
}

function cre02(){
    res2.innerHTML = ''
    let valor = 0

    for(j = array.length - 1;j > 0; j--){
        for(i=0; i<array.length - 1;i++){
            if(array[i] > array[i + 1] ){
                valor = array[i]
                array[i] = array[i + 1] 
                array[i + 1]  = valor
            }
        }
    }
    res2.innerHTML = `Ordenados por crescente é: ${array.join(", ")}.`
}
 
function decre02(){
    res3.innerHTML = ''
    let valor = 0

    for(j = array.length - 1;j > 0; j--){
        for(i=0; i<array.length - 1;i++){
            if(array[i] > array[i + 1] ){
                valor = array[i]
                array[i] = array[i + 1] 
                array[i + 1]  = valor
            }
            
        }
    }
    res3.innerHTML = `Ordenados por decrescente: ${array.reverse(valor).join(", ")}.`
}

function media02(){
    let soma = 0
    let media = 0

    for(i=0;i<array.length;i++){
        soma += array[i] 
    }
    media = soma / array.length
    res4.innerHTML = `A média aritimética é: ${media .toFixed(2)}.`
}