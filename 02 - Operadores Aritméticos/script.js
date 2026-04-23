let numero1 = 3
let numero2 = 79
let soma = numero1 + numero2
let sob = numero1 - numero2
let mult = numero1 * numero2
let div = numero1 / numero2
let modulo = numero1 % numero2

console.log("A soma é: "+soma)
console.log("A subtração é: "+ sob)
console.log("A multiplicação é: "+mult)
console.log("A divisão é: ",div)
console.log(`O resto da divisão é: ${modulo}`)

//-------------------------

let salario = Number(prompt("qual seu salário? "))
let total = salario + 100
console.log(total)

/*Um grupo de amigos foi a um restalrante, no final eles dividir a conta. faça um programa que peça a qunatidade de amigos e o valor da e mostre quanto cada um deve pagar*/

let reserva = Number(prompt("Uma mesa para quantas pessoas? "))
let conta_total = Number(prompt("Quanto a conta ficou? "))
let valor_individual = conta_total/reserva
console.log("A conta de cada um ficou: ",valor_individual," R$")

/*Um grupo de três amigos quer juntos comprar uma pizza, cada um irá contribuir com uma quantia de valor. Faça um programa que receba qunato eles tem juntos*/

let amigo1 = Number(prompt("Qual a quantia que você vai dar: "))
let amigo2 = Number(prompt("Qual a quantia que você vai dar: "))
let amigo3 = Number(prompt("Qual a quantia que você vai dar: "))
let total_amigos = amigo1 + amigo2 + amigo3
console.log("O total ficou: ",total_amigos,"R$")

/* Uma loja de doces vende produtos em qrande quantidade, um programa que peça a quantidade do produto compradio, o valor unitário e mostre quanto o cliente vai pagar*/

let preco_coxinha = 5
let quantidade = Number(prompt("Quantas vai querer: "))
let preco_total_coxinha = preco_coxinha + quantidade
console.log("Ficou no total ",preco_total_coxinha," Reais")