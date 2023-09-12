let resValores = document.getElementById('resValores')
let resOrdenada = document.getElementById('resOrdenada')
let resMedia = document.getElementById('resMedia')
let array = []

function gerar(){
    let random = 0
    array = []
    
    for(i=0; i < 10; i++){
        random = Math.floor(Math.random() * (50 - 1 + 1) + 1)
        array.push(random)
    }
    resValores.innerHTML = `Valores = [${array}]`
}


function cresc(){

    for(i = 0; i < array.length; i++){
        let atual = array[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < array.length; j++){
            if(array[j] < menor){
                menor = array[j]
                posicao = j
            }
        }

        array[i] = menor
        array[posicao] = atual
        
    }
    
    resOrdenada.innerHTML = `Os valores em ordem crescente são = [${array}]`
}

function decre(){
    for(i = 0; i < array.length; i++){
        let atual = array[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < array.length; j++){
            if(array[j] < menor){
                menor = array[j]
                posicao = j
            }
        }

        array[i] = menor
        array[posicao] = atual
        
    }
    

    resOrdenada.innerHTML = `Os valores em ordem decrescente são = [${array.reverse()}]`
}


function media(){
    let par = 0
    let impar = 0
    let mediaPar = 0
    let mediaImpar = 0

    for(i=0; i <array.length; i++){
        if(array[i] % 2 ==0){
            par++
            mediaPar += array[i]
        }else{
            impar++
            mediaImpar += array[i]
        }
    }

    mediaPar = mediaPar/par
    mediaImpar = mediaImpar/impar


    resMedia.innerHTML = `A média dos números pares é ${mediaPar.toFixed(2)}. <br>A média dos números impares é ${mediaImpar.toFixed(2)}.`
}