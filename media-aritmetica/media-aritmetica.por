programa
{
	
	funcao inicio()
	{
		real n1 = 0.0, n2 = 0.0, n3 = 0.0
		real aritmetica = 0.0, ponderada = 0.0

		escreva("-------------------------------------\n")
		escreva("Cálculo de Média Aritmética e Ponderada\n")
		escreva("-------------------------------------\n")
		escreva("Este algoritmo pode calcular a média de 3 notas, podendo ser médias aritméticas ou ponderadas\n")
		escreva("\n")
		escreva("Digite a primeira nota:")
		leia(n1)
		escreva("\n")
		escreva("Digite a segunda nota:")
		leia(n2)
		escreva("\n")
		escreva("Digite a terceira nota:")
		leia(n3)
		escreva("\n")

		aritmetica = (n1 + n2 + n3) / 3
		ponderada = (n1 * 3 + n2 * 3 + n3 * 4) / 3 * 3 * 4

		escreva("------------------------------------------\n")
		escreva("Média Aritmética = ",aritmetica,"\n")
		escreva("Média Ponderada = ",ponderada,"\n")
		escreva("------------------------------------------\n")
	}
}