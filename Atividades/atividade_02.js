// Exercicio 01
let ex1_num1 = Number(prompt("Digite um numero: "))
let ex1_num2 = Number(prompt("Digite um outro numero:"))
console.log(ex1_num1 > ex1_num2)
console.log(ex1_num1 < ex1_num2)
console.log(ex1_num1 == ex1_num2)

// Exercicio 02
let ex2_num1 = Number(prompt("Digite a sua idade: "))
console.log(ex2_num1>=16)

// Exercicio 03
let ex3_num1 = Number(prompt("Digite a sua idade: "))
console.log(ex3_num1>=18)
console.log(ex3_num1>=60)

// Exercicio 04
let usuario = prompt("digite o seu usuario: ")
console.log(usuario == "admin")

// Exercicio 05
let saldo = Number(prompt("Digite o seu saldo"))
let retirada = Number(prompt("Quanto quer retirar: "))
saldo -=retirada
console.log("Sua conta ficou com ", saldo,saldo>100)

// Exercicio 06
let Nota01 = Number(prompt("Digite a sua 1º nota: "))
let Nota02 = Number(prompt("Digite a sua 2º nota: "))
let Media_nota = (Nota01+Nota02)/2
console.log("Sua media final é ",Media_nota,Media_nota>=6)

// Exercicio 07
let Valor_produto = Number(prompt("Qual e o valor do produto: "))
console.log("Produto acima de 50 R$ ", Valor_produto>50)
console.log("Produto abaixo de 20 R$ ", Valor_produto<20)

// Exercicio 08
let Velocidade_carro = Number(prompt("Qual era a velocidade do carro: "))
console.log("A velocidade estava acima de 80 Km/h ", Velocidade_carro>80)
console.log("A velocidade estava acima de 120 Km/h ", Velocidade_carro>120)

// Exercicio 09
let altura = Number(prompt("Qual é a sua altura(Em metros):"))
console.log("Sua altura e maior ou igual que 1,40 ", altura>1.40)

// Exercicio 10
let Nome = prompt("Qual e o seu nome: ")
console.log("Seu nome e João: ", Nome == "João")
console.log("Seu nome não e Maria: ", Nome != "Maria")

// Exercicio 11
let Senha = prompt("digite a sua senha: ")
console.log(Senha == "1234")

// Exercicio 12
let Valor_parcela = Number(prompt("Qual e o valor da parcela: "))
console.log("A parcela é abaixo de 200 R$ ", Valor_parcela>=200)

// Exercicio 13
let Anos = Number(prompt("Qunatos anos você tem: "))
let Meses = Anos * 12
prompt("Você tem mais de 200 meses de vida: ",Meses >=200)
