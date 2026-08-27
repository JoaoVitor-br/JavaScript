//Funções de texto

let frase = prompt("Digite uma frase: ")
console.log(frase.length)
console.log(frase.toLowerCase())
console.log(frase.toLocaleUpperCase())
let normal = "animal"
let substituto = "masqueico"
console.log(frase.replace(normal, substituto))
let verificar = "salve"
console.log(frase.includes(verificar))
console.log(frase.charAt(4))

//Funções Matemáticas:
// Atividade 01

let incognita = Math.random() * 10 + 1
console.log(Math.floor(incognita))
let chute = Number(prompt("Adivinhe qual numero eu pensei(entre 1 e 10): "))
if (Math.floor(incognita) == chute) {
    console.log("você acertou! parabens!")
} else {
    console.log("você errou!")
}

// Atividade 02

let decimal = Number(prompt("Digite um numero decimal:"))
console.log(Math.ceil(decimal))
console.log(Math.floor(decimal))
console.log(Math.round(decimal))

// Atividade 03
console.log(Math.min(51, 10, 41, 29, 32, 125, 4, 27, 87, 96))
console.log(Math.max(51, 10, 41, 29, 32, 125, 4, 27, 87, 96))

// Atividade 04
let numPedido = Number(prompt("digite um numero"))
console.log(Math.abs(numPedido))
console.log(Math.pow(numPedido, 6))
console.log(Math.sqrt(numPedido))

//Funções Declarativas
// Atividade 01
function Saudacao() {
    console.log("Salve meu nobre")
}
Saudacao()

// Atividade 02
function Contar_Caracteres() {
    let e = prompt("digite uma palavra: ")
    console.log(e.length)
}
Contar_Caracteres()
// Atividade 03
function Maior_Numero() {
    let numero = Number(prompt("Digite um numero: "))
    let numero2 = Number(prompt("Digite um numero: "))
    let resultado1 = numero > numero2 ? "O primeiro numero é maior" : "O segundo numero é maior"
    console.log(resultado1)
}
Maior_Numero()

// Atividade 04
function potencia() {
    let num = Number(prompt("Digite um numero: "))
    let num2 = Number(prompt("Digite a potencia: "))
    console.log(Math.pow(num, num2))
}
potencia()

function Contagem() {
    let num = Number(prompt("Digite o inicio de uma sequencia:"))
    let num1 = Number(prompt("Digite o final dessa sequencia:"))
    while (num <= num1) {
        console.log(num)
        num += 1
    }
}
Contagem()

//Funções com Parâmetros
//Atividade 01
function Saldeition(nome) {
    console.log("Salve, " + nome)
}
let nome = prompt("Qual e o seu nome: ")
Saldeition(nome)

//Atividade 02
function Soma(num1, num2) {
    console.log(num1 + num2)
}
let num1 = Number(prompt("Digite um numero: "))
let num2 = Number(prompt("Digite um outro numero:"))
Soma(num1, num2)

//Atividade 03
function Im_Par(num) {
    if (num % 2 == 0) {
        console.log("Par")
    } else {
        console.log("Impar")
    }
}
let num = Number(prompt("Digite um numero: "))

//Atividade 04
function Media(num1, num2, num3) {
    let media = (num1 + num2 + num3) / 3
    console.log(media)
}
let nota1 = Number(prompt("Digite uma de suas notas:"))
let nota2 = Number(prompt("Digite uma de suas notas:"))
let nota3 = Number(prompt("Digite uma de suas notas:"))
Media(nota1, nota2, nota3)

//Atividade 05
function Dobro(num) {
    console.log("O dobro é" + (num * 2))
}
let numero = Number(prompt("Digite um numero: "))
Dobro(numero)

//Atividade 06
function Aprovado(nota) {
    let nota5 = Number(prompt("Qual sua nota? "))
    let resultado = nota >= 7 ? "Você passou" : "Você foi reprovado"
    console.log(resultado)
}
let nota = Number(prompt("Qual sua nota? "))
Aprovado(nota)

// Atividade 07
function Calculadora(num1, num2) {
    let escolha = Number(prompt("Qual o conta você quer fazer:"))
    switch (escolha) {
        case 1:
            console.log(num1 + num2)
            break;
        case 2:
            console.log(num1 - num2)
            break;
        case 3:
            console.log(num1 / num2)
            break;
        case 4:
            console.log(num1 * num2)
            break;
        default:
            console.log("Informação errada")
    }
}
num1 = Number(prompt("Digite um numero: "))
num2 = Number(prompt("Digite um outro numero:"))
Calculadora(num1, num2)

// Desafio final:
function fatorial (num) {
    for(let e =(num-1);e > 0 ; e--){
        num *= e
        console.log(num)
    }
}
let info = Number(prompt("Difite um numero:"))
fatorial(info)