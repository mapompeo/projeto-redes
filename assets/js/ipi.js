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
