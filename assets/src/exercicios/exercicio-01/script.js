let res_vetor = document.getElementById('res_vetor')
let res_vet_cre = document.getElementById('res_vet_cre')
let res_vet_decre = document.getElementById('res_vet_decre')
let res_soma = document.getElementById('res_soma')
let num_array = []

function randomizar(min, max_num){
    let res_random = 0
    res_random =  res_random = Math.floor(Math.random() * (max_num - min + 1) + min)
    return res_random
}

function gerar(){
    res_vetor.innerHTML = ''
    num_array = []
    let min = 1
    let max_num = 50
    let max_array = 10

    for(i = 0;i < max_array;i++){
        let res_gerar = randomizar(min, max_num)
        num_array.push(res_gerar)
    }

    res_vetor.innerHTML = `Vetor Randômico = [${num_array}]`
}


function cre(){
    res_vet_cre.innerHTML = ''
    let valor_atual = 0

    for(i = 0; i < num_array.length; i++){
        let j = i - 1
        valor_atual = num_array[i]

        while(j >= 0 && valor_atual < num_array[j]){
            num_array[j + 1] = num_array[j]
            
            j--
        }
        num_array[j + 1] = valor_atual
    }

    res_vet_cre.innerHTML = `Ordenação Crescente = [${num_array}]`
}

function decre(){
    res_vet_decre.innerHTML = ''
    let valor_atual = 0

    for(i = 0; i < num_array.length; i++){
        let j = i - 1
        valor_atual = num_array[i]

        while(j >= 0 && valor_atual < num_array[j]){
            num_array[j + 1] = num_array[j]
            
            j--
        }
        num_array[j + 1] = valor_atual
    }

    res_vet_decre.innerHTML = `Ordenação Crescente = [${num_array.reverse(valor_atual)}]`
}

function somar(){
    let soma = 0

    for(i = 0;i < num_array.length;i++){
        soma += num_array[i]
    }

    res_soma.innerHTML = `A soma dos valores do array é = ${soma}`
}