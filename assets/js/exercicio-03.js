let resValores = document.getElementById('resValores')
let resOrdenada = document.getElementById('resOrdenada')
let resMedia = document.getElementById('resMedia')
let num_array_03 = []

function gerar03() {
    let random = 0
    num_array_03 = []
    
    for(i=0; i < 10; i++){
        random = Math.floor(Math.random() * (50 - 1 + 1) + 1)
        num_array_03.push(random)
    }
    resValores.innerHTML = `Valores aleatórios: ${num_array_03.join(", ")}.`
}

function cresc03(){

    for(i = 0; i < num_array_03.length; i++){
        let atual = num_array_03[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < num_array_03.length; j++){
            if(num_array_03[j] < menor){
                menor = num_array_03[j]
                posicao = j
            }
        }
        num_array_03[i] = menor
        num_array_03[posicao] = atual
    }   
    resOrdenada.innerHTML = `Os valores em ordem crescente são = ${num_array_03.join(", ")}.`
}

function decre03(){
    for(i = 0; i < num_array_03.length; i++){
        let atual = num_array_03[i]
        let menor = atual
        let posicao = i
    
        for(j = i + 1; j < num_array_03.length; j++){
            if(num_array_03[j] < menor){
                menor = num_array_03[j]
                posicao = j
            }
        }

        num_array_03[i] = menor
        num_array_03[posicao] = atual
        
    }
    resOrdenada.innerHTML = `Os valores em ordem decrescente são = ${num_array_03.reverse().join(", ")}.`
}

function media03(){
    let par = 0
    let impar = 0
    let mediaPar = 0
    let mediaImpar = 0

    for(i=0; i <num_array_03.length; i++){
        if(num_array_03[i] % 2 ==0){
            par++
            mediaPar += num_array_03[i]
        }else{
            impar++
            mediaImpar += num_array_03[i]
        }
    }

    mediaPar = mediaPar/par
    mediaImpar = mediaImpar/impar
    resMedia.innerHTML = `A média dos números pares é ${mediaPar.toFixed(2)}. <br>A média dos números impares é ${mediaImpar.toFixed(2)}.`
}