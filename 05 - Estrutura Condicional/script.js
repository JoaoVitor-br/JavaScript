//Estrutura condicional
let nota = 7
if(nota >= 7) {
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}
console.log("----------------------")
let idade = Number(prompt("Qual é a sua idade? : "))
if(idade >=18){
    console.log("Pode tirar a habilitação")
} else {
    console.log("Idade insuficiente")
}
console.log("----------------------")
let salario  =Number(prompt("Qual seu salarío?"))
let anos = Number(prompt("Você trabalha na empresa a quantos anos?"))

if(salario <= 3000 && anos >= 2){
    //&& "e" = tudo tem que ser verdade
    console.log("Aumento consedido")
}else{
    console.log("Ainda não")
}
console.log("----------------------")
let chuva = false
if (chuva){
    console.log("leva o guarda-chuva")
}else{
    console.log("Não leve o guarda-chuva")
}
console.log("----------------------")
/*Peça dois números para o usuário e veja se o primeiro é menor que o segundo, se sim, mostre "o primeiro é menor", senão, mostre 
"o segundo é menor ou eles são iguais"*/
let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))
if (num1 > num2){
    console.log("o primeiro é menor")
}else {
    console.log("o segundo é menor ou eles são iguais")
}
console.log("----------------------")
/*Peça um numero para o usuario e diga se o numero é impar ou par*/
let im_par = Number(prompt("Digite um numero:"))
if ((im_par %2)==0){
    console.log("O numero e par")
}else{
    console.log("O numero e impar")
}
console.log("----------------------")
/* Uma loja da descontos para clientes com base no valor da compra, peça o valor da compra,se ele for maior ou igual a R$250,
de R$50 de desconto,e mostre o novo valor que sera pago, senão, mostre apenas "sem desconto"*/
let conta = Number(prompt("Qual e o valor da sua conta? "))
if (conta >= 250){
    console.log("Voce recebeu total desconto de ",(conta-50))
}else{
    console.log("sem desconto")
} 