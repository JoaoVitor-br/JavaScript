console.log(" Operador Ternário")
console.log(" Atividade 01")
let idade = Number(prompt("Qual sua idade? "))
let analize = idade >= 18 ? "Maior de idade" : "Menor de idade"
console.log(analize)

console.log(" Atividade 02")
let num = Number(prompt("Digite um número: "))
let parOuImpar = num % 2 == 0 ? "Par" : "Ímpar"
console.log(parOuImpar)

console.log(" Atividade 03")
let nota = Number(prompt("Qual sua nota? "))
let resultado = nota >= 7 ? "Você passou" : "Você foi reprovado"
console.log(resultado)

console.log(" Atividade 04")
let numero3 = Number(prompt("Digite um numero: "))
let numero4 = Number(prompt("Digite um numero: "))
let resultado1 = numero3 > numero4 ? "O primeiro numero é maior" : "O segundo numero é maior"
console.log(resultado1)

console.log(" Atividade 05")
let compra = Number(prompt("Qual o valor da compra? "))
let desconto = compra >= 100 ? "Você ganhou 10% de desconto" : "Você não ganhou desconto"
console.log(desconto)

console.log(" Atividade 06 ")
let numero = Number(prompt("Digite um número: "))
let resultado3 = numero > 0 ? "Positivo" : numero < 0 ? "Negativo" : "Zero"
console.log(resultado3)

console.log(" Laço de repetição")
console.log(" While")

console.log(" Atividade 01")
let sequencia = 1
while (sequencia <= 10) {
    console.log(sequencia)
    sequencia++
}

console.log(" Atividade 02")
let aicneuqes = 10
while (aicneuqes >= 1) {
    console.log(aicneuqes)
    aicneuqes--
}

console.log(" Atividade 03")
let senha = prompt("Digite a senha: ")
while (senha !== "123456") {
    senha = prompt("Senha incorreta. Digite novamente: ")
}
console.log("Acesso permitido.")

console.log(" Atividade 04")
let benio = 0
while (benio <= 100) {
    console.log(benio)
    benio += 5
}

let mensagem = "Eu gosto de JavaScript"
let contagem = 1
while (contagem <= 5) {
    console.log(mensagem)
    contagem++
}

console.log(" do...while")

console.log(" Atividade 01")
let contador = 1    
do {
    console.log(contador)
    contador++
}while (contador <= 20)

console.log(" Atividade 02")
let resposta = prompt("Deseja continuar? (s/n): ")
do {
    resposta = prompt("Deseja continuar? (s/n): ")
} while (resposta != "n" )

console.log(" Atividade 03")
let sequence = 1
let final = Number(prompt("Digite o número final da sequência: "))
do {
    console.log(sequence)
    sequence++
} while (sequence <= final)

console.log(" Atividade 04")
let numero5 = 1
do {
    console.log(numero5)
    numero5 += 2
} while (numero5 <= 31)

console.log(" For")

console.log(" Atividade 01")
for(let e = 1 ; e <=30 ; e++){
    console.log(e)
}

console.log(" Atividade 02")
for(let e = 30 ; e >=1 ; e--){
    console.log(e)
}

console.log(" Atividade 03")
let num1 = Number(prompt("Digite começo da senquencia: "))
let num2 = Number(prompt("Digite o final da sequencia: "))
for(let e = num1; e <= mun2; e++) {
    console.log(e)
}

console.log("Atividade 04")
for(let e = 50 ; e >= 30 ; e--){
    console.log(e)
}

console.log("Atividade 05")
for(let e = 1 ; e <= 50 ; e++){
    console.log(e)
}

console.log("Array")

console.log("Atividade 01")
let filmes = ["toy store","carros","Superman"]
console.log(filmes[0])

console.log("Atividade 02")
let frutas = ["Maça","Banana","Morango","Mexirica","Uva"]
console.log(frutas[2])

console.log("Atividade 03")
let cores = ["Vermelho","Azul","Amarelo"]
cores.push("Roxo")
console.log(cores)

console.log("Atividade 04")
let numeros = [1,2,3,4]
numeros.pop
console.log(numeros)

console.log("Atividade 05")
let cidades = ["Suzano","Mogi"]
cidades.unshift("Itaqua")
console.log(cidades)