programa
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
}