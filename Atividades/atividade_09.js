// Exercicio 01
let x = 1
while (x <= 10) {
    console.log(x)
    x++
}

// Exercicio 02
let mult = Number(prompt("Qual taduada deseja ver? "))
let laco = 1
while (laco <= 10){
    console.log(laco," X ",mult ," = ",(mult*laco))
    laco++
}

// Exercicio 03
let e = 10
while (e >= 0) {
    console.log(e)
    e--
}

// Exercicio 04
let senha = prompt("Qual é a sua senha? ")
while(senha != "12345"){
    senha = prompt("Erro!. digite denovo? ")
}

// Exercicio 05
let cinquenta = 50
while (cinquenta <= 100) {
    console.log(cinquenta)
    cinquenta++
}

// Exercicio 06 
let rapido = 0
while (rapido <= 100){
    console.log(rapido)
    rapido+=5
}

// Exercicio 07
let java = 1
while(java <= 5){
    console.log("Eu gosto de JavaScript")
    java++
}

// Exercicio 08
let nome 
let parar = "Não" 
let contador = 1
while(parar != "sim"){
    nome = prompt("Digite seu nome: ")
    parar = prompt("Quer parar? ")
    contador++
}
while(contador > 0){
    console.log(nome)
    contador--
}

// Exercicio 09 
let nota = Number(prompt("Digite a nota do aluno: "))
while(nota < 1 && nota > 10){
    nota = prompt("nota invalida. Digite novamente: ")
}
console.log("Nota registrada com sucesso")

// Exercicio 10
let numero = Number(prompt("Digite um numero positivo: "))
let soma = 0
while(numero >= 0){
    soma = soma + numero
    numero = Number(prompt("Digite outro numero positivo: "))
}
console.log("A soma de todos é ",soma)

// Exercicio 11
let menu = Number(prompt("1 - Cadastrar\n",
"2 - Consultar\n",
"3 - Sair\n",
"Qual opção?"))
while(menu != 3){
    menu = Number(prompt("1 - Cadastrar\n",
"2 - Consultar\n",
"3 - Sair\n",
"Qual opção?"))
}

// Exercicio 12
let par = 1
while(par <= 50){
    if(par % 2 == 0){
        console.log(par)
    }
par++
}

// Exercicio 13
let usuario = prompt("Qual o usuario?")
let senha_denovo = prompt("Qual a senha?")
while(usuario != "Admin" || senha_denovo != "1234") {
 usuario = prompt("Qual o usuario?")
    senha_denovo = prompt("Qual a senha?")
}
console.log("Bem-vindo ao sistema!")

// Exercicio 14
let segredo = Number(prompt("Adivinhe o numero: "))
while(segredo != 28){
    segredo = Number(prompt("Você errou. Tente de novo: "))
}