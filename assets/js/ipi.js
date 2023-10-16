let res = document.getElementById('res')
console.log('carregou')

function calcular(){
  let ipi = Number(document.getElementById('ipi').value)
  let p1_cod = Number(document.getElementById('p1_cod').value)
  let p1_valor = Number(document.getElementById('p1_valor').value)
  let p1_qtdn = Number(document.getElementById('p1_qtdn').value)
  let p2_cod = Number(document.getElementById('p2_cod').value)
  let p2_valor = Number(document.getElementById('p2_valor').value)
  let p2_qtdn = Number(document.getElementById('p2_qtdn').value)
  let resposta = 0

  resposta = (p1_valor * p1_qtdn + p2_valor * p2_qtdn) * (ipi / 100 + 1)

  res.innerHTML = `O valor de IPI a ser pago é = ${resposta}`
}


function copiar() {
  const codigoPortugol = `programa
  {
    
    funcao inicio()
    {
      real ipi, p1_cod, p1_valor, p1_qtdn, p2_cod, p2_valor, p2_qtdn 
  
      escreva("~~~~~~~~~~~~~~~~~~~~\n")
      escreva("Cálculo de IPI\n")
      escreva("~~~~~~~~~~~~~~~~~~~~\n")
      escreva("Insira o valor de IPI: ")
      leia(ipi)
      escreva("Insira o código da primeira peça: ")
      leia(p1_cod)
      escreva("Insira o valor da primeira peça: ")
      leia(p1_valor)
      escreva("Insira a quantidade necessária da primeira peça: ")
      leia(p1_qtdn)
  
      escreva("Insira o código da segunda peça: ")
      leia(p2_cod)
      escreva("Insira o valor da segunda peça: ")
      leia(p2_valor)
      escreva("Insira a quantidade necessária da segunda peça: ")
      leia(p2_qtdn)
  
      real resposta = (p1_valor * p1_qtdn + p2_valor * p2_qtdn) * (ipi / 100 + 1)
      escreva("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
      escreva("O valor de IPI a ser pago é = ",resposta,"\n")
      escreva("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")
      
  
    }
  }`
  navigator.clipboard.writeText(codigoPortugol)
  btcopiar.innerHTML = 'Copiado!'
}
