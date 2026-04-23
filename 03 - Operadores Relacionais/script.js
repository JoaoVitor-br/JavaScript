let idade = 10
console.log(idade >= 18)
console.log("----------------------------")
let numero = Number(prompt("Digite um numero: "))
let resultado = numero > 10
console.log(resultado)
console.log("----------------------------")
let valor1 = 5
let valor2 = 7
console.log(valor1 > valor2)
console.log(valor1 < valor2)
console.log(valor1 == valor2)
console.log("----------------------------")
console.log(5 == "5")
console.log(5 === "5")
console.log("----------------------------")
let nome = prompt("Qual o nome do usuário?")
console.log(nome == "TDS2")
console.log("----------------------------")
let preco = Number(prompt("Qual o valor do produto?"))
console.log(preco >= 100)
console.log(preco <= 50)
console.log("----------------------------")
/* Uma jolkla da desconto nos produtos direto no caixa.
faça um programa q1ue receba o valor pago pelo usuário, dê R$20 reais de desconto para ele e mostre se o valor que será pago é maior ou igual a R$50*/

let pagamento = Number(prompt("Insera o valor do pagamento: "))
let desconto = pagamento - 20
console.log("O total com desconto ficou: ", desconto,desconto >= 50)
console.log("----------------------------")
/*Pergunte o NIF de um funcionario e verifique se ele:
- é igual a SN1081655
- é diferente de SN1047520 */
let nif = prompt("Digite o seu NIF: ")
console.log( nif == SN1081655)
console.log( nif != SN1047520)
console.log("----------------------------")
