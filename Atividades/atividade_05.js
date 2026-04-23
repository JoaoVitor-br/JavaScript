

// Exercicio 01
let nota = prompt("Quanto voce tirou?")
if(nota >= 9){
    console.log("Excelente")
}else if(nota >= 7){
    console.log("Bom")
}else if(nota >= 5){
    console.log("Regular")
}else if(nota < 5){
    console.log("Insuficiente")
}else{
    console.log("Nota Inválida")
}

// Exercicio 02
let falta = Number(prompt("Quantas faltas voce teve?"))
let notas =  Number(prompt("Quantas faltas voce teve?"))
if (falta <= 10 && notas >= 7) {
    console.log("Aprovado")
} else if (falta <=10 && notas >=5 ){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}

// Exercicio 03
let idade = Number(prompt("Qual sua idade?") )
if (idade >= 0 && idade <= 12) {
console.log("Criança")
} else if (idade > 12 &&idade <= 18) {
console. log("Adolescente")
} else if (idade > 18&&idade <= 59) {
console.log("Adulto")
} else if (idade > 59){
console.log("Idoso")
} else {
console.log("Idade inválida")
}

// Exercicio 04
let temp = Number(prompt("Quantos graus esta?") )
if (temp >= 35) {
console.log("Muito quente")
} else if (temp >= 25) {
console. log("Quente")
} else if (temp >= 15) {
console.log("Agradavel")
} else if (temp < 15){
console.log("frio")
} else {
console.log("Temperatura inválida")
}

// Exercicio 05
let desconto = Number(prompt("Quanto ficou o valor da compra?"))
if(desconto >= 500){
    console.log("20% de desconto")
}else if(desconto >= 300){
    console.log("15% de desconto")
}else if(desconto >= 100){
    console.log("10% de desconto")
}else if(desconto == "d"){
    console.log("Sem desconto")
}else{
    console.log("Valor Inválido")
}

// Exercicio 06
let velocidade = Number(prompt("Quantos km/h voce estava?"))
if(velocidade <= 60){
    console.log("Dentro do limite")
}else if(velocidade <= 80){
    console.log("Aqui o anjo guarda")
}else if(velocidade <= 100){
    console.log("Agora ele aguarda")
}else if(velocidade > 100){
    console.log("Não falta muito")
}else{
    console.log("Categoria Inválida")
}

// Exercicio 07
let turno = prompt("Qual turno você esta?")
if(turno =="M"){
    console.log("Matutirno")
}else if(turno == "V"){
    console.log("Vespetino")
}else if(turno == "N"){
    console.log("Noturno")
}else{
    console.log("Turno Inválido")
}

// Exercicio 8
let peso = Number(prompt("Quantos quilos voce pesa?"))
let altura = Number(prompt("Qual e a sua altura?"))
let imc = peso / (altura * altura)
if(imc > 18.5){
    console.log("Abaixo do peso")
}else if(imc > 25){
    console.log("Peso normal")
}else if(imc > 30){
    console.log("Sobrepeso")
}else{
    console.log("Obesidade")
}

// Exercicio 09
let pontos = Number(prompt("Qual foi a sua pontuação?"))
if(pontos >= 1000){
    console.log("Nivél Mestre")
}else if(pontos >= 700){
    console.log("Nivél Avançado")
}else if(pontos >= 400){
    console.log("Nivél Intermediario")
}else if(pontos < 400){
    console.log("Buxa")
}

// Exercicio 10
let hora = Number(prompt("Que horas são"))
if (hora >= 6 && hora < 11){
    console.log("Bom dia")
}else if (hora >= 11 && hora <17 ){
    console.log("Boa tarde")
}else if(hora >= 17 && hora <= 23.59){
    console.log("Boa noite")
}else if (hora >= 0 && hora < 6){
    console.log("Boa madrugada")
}

// Exercicio 11
let code = prompt("Qual codigo do produto?")
if(code =="1"){
    console.log("Alimento")
}else if(code == "2"){
    console.log("Eletrônico")
}else if(code == "3"){
    console.log("Roupas")
}else if(code == "4"){
    console.log("Noturno")
}else{
    console.log("Categoria inválida")
}

// Exercicio 12
let saldo = Number(prompt("Qual e o seu saldo?"))
if(saldo >= 2000){
    console.log("Otima")
}else if(saldo >= 1000){
    console.log("Boa")
}else if(saldo >= 0){
    console.log("Regular")
}else {
    console.log("Endividado")
}

// Exercicio 13
let idade_carteira = Number(prompt("Qual sua idade?") )
if (idade_carteira < 18) {
console.log("Não pode dirigir")
} else if (idade_carteira >= 18 &&idade_carteira < 65) {
console. log("Pode dirigir")
} else if (idade_carteira >= 65) {
console.log("Renovação especial")
} else {
console.log("Idade inválida")
}

// Exercicio 14
let media = prompt("Qual foi a sua media?")
if(media >= 9){
    console.log("Excelente")
}else if(media >= 7){
    console.log("Bom")
}else if(media >= 5){
    console.log("Regular")
}else if(media < 5){
    console.log("Insuficiente")
}else{
    console.log("Nota Inválida")
}