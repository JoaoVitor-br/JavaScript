//04 - Estrutura Condicional

// Exercicio 01
let idade = Number(prompt("Qual é a sua idade? : "))
if(idade >=18){
    console.log("Você é maior de idade")
} else {
    console.log("Você é menor de idade")
}

// Exercicio 02
let im_par = Number(prompt("Digite um numero:"))
if ((im_par %2)==0){
    console.log("O numero e par")
}else{
    console.log("O numero e impar")
}

// Exercicio 03
let nota = 7
if(nota >= 7) {
    console.log("Aprovado")
}else{
    console.log("Reprovado")
}

// Exercicio 04
let idade_balada = Number(prompt("Qual é a sua idade? : "))
if(idade_balada >=18){
    console.log("Entrada permitida")
} else {
    console.log("Entrada proibida")
}

// Exercicio 05
let senha = prompt("Qual e a senha: ")
if(senha == "1234"){
    console.log("senha correta")
}else{
    console.log("Senha incorreta")
}

// Exercicio 06
let calor = Number(prompt("Qual é a temperatura normal? "))
if(calor >=30){
    console.log("Esta quente")
} else {
    console.log("Esta frio")
}

// Exercicio 07
let capitao = Number(prompt("Digite um numero: "))
if(capitao > 0 ){
    console.log("Numero posítivo")
}else if(capitao == 0){
    console.log("E zero")
}else{
    console.log("Numero negativo")
}

// Exercicio 08
let saldo = Number(prompt("Quanto de saldo voce tem na conta? "))
let saque = Number(prompt("Quanto voce quer sacar?"))
if(saldo>=saque){
    console.log("Saque realisado")
}else{
    console.log("Pobre")
}

// Exercicio 09
let conta = Number(prompt("Qual e o valor da sua conta? "))
if (conta >= 200){
    console.log("Voce recebeu desconto")
}else{
    console.log("sem desconto")
} 

//Exercicio 10
let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite outro numero: "))
if (num1 > num2){
    console.log("o primeiro é maior com ",num1)
}else {
    console.log("o segundo é maior com ",mun2," ou eles são iguais")
}

// Exercicio 11
let ususario = prompt("Digite o seu usuario")
if(usuario == "admin"){
    console.log("Acesso permitido")
}else{
    console.log("Acesso negado")
}

// Execicio 12
let exelencia = Number(prompt("Qual é a sua nota? : "))
if(exelencia >=9){
    console.log("Excelénte")
} else {
    console.log("Pode melhorar")
}

// Exercicio 13
let hora = Number(prompt("Que horas são? "))
if(hora >=8 && hora <= 18){
    console.log("Horário de funcionamento")
}else {
    console.log("Fora do horário")
}

// Exercicio 14
let cadastro = prompt("Tem cadastro?(true/false):")
if(cadastro){
    console.log("Usuário cadastrado")
}else{
    console.log("Cadastro necessário")
}