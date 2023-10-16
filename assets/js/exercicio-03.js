let resValores = document.getElementById('resValores')
let resOrdenada = document.getElementById('resOrdenada')
let resMedia = document.getElementById('resMedia')
let num_array = []

function gerar03() {
    let random = 0
    num_array = []
    
    for(i=0; i < 10; i++){
        random = Math.floor(Math.random() * (50 - 1 + 1) + 1)
        num_array.push(random)
    }
    resValores.innerHTML = `Valores aleatórios: ${num_array.join(", ")}.`
}

function cresc03( ){

    for(i = 0; i < num_array.length; i++){
        let atual = num_array[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < num_array.length; j++){
            if(num_array[j] < menor){
                menor = num_array[j]
                posicao = j
            }
        }
        num_array[i] = menor
        num_array[posicao] = atual
    }   
    resOrdenada.innerHTML = `Os valores em ordem crescente são = [${num_array}]`
}

function decre03(){
    for(i = 0; i < num_array.length; i++){
        let atual = num_array[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < num_array.length; j++){
            if(num_array[j] < menor){
                menor = num_array[j]
                posicao = j
            }
        }

        num_array[i] = menor
        num_array[posicao] = atual
        
    }
    resOrdenada.innerHTML = `Os valores em ordem decrescente são = [${num_array.reverse()}]`
}

function media03(){
    let par = 0
    let impar = 0
    let mediaPar = 0
    let mediaImpar = 0

    for(i=0; i <num_array.length; i++){
        if(num_array[i] % 2 ==0){
            par++
            mediaPar += num_array[i]
        }else{
            impar++
            mediaImpar += num_array[i]
        }
    }

    mediaPar = mediaPar/par
    mediaImpar = mediaImpar/impar
    resMedia.innerHTML = `A média dos números pares é ${mediaPar.toFixed(2)}. <br>A média dos números impares é ${mediaImpar.toFixed(2)}.`
}