function somar(num1, num2) {
    let somar = num1 + num2
    return somar
}
let num1 = 26
let num2 = 41
let resultado = soma(num1, num2)
// console.log(resultado)

function dobro(numero) {
    let aux = dobro * 2
    return aux
}
// let numero = Number(prompt("Escolha um número"))
// let mostrar = dobro(numero)
// console.log(mostrar)

//Situação do aluno
function Aprovacao(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    if (media >= 7) {
        return "Aprovado"
    } else {
        return "Reprovado"
    }
}
// let nota1 = Number(prompt("Qual a 1 nota: "))
// let nota2 = Number(prompt("Qual a 2 nota: "))
// let situacao = Aprovacao(nota1,nota2)
// console.log(situs)

// Maior número
function maior(n1, n2) {
    if (n1 > n2) {
        return n1 + "e maior que " + n2
    } else if (n2 > n1) {
        return n2 + "é maior que" + n1
    } else {
        return "são iguais"
    }
}
// Peça um número para o usuário e mostre o triplo dele
function triplo(num) {
    let valor = num * 3
    return valor
}
// let num = Number(prompt("digite um numro: "))
// let aux1 = triplo(num)
// console.log(aux1)

// Faça um sistema que diga "uau" quando ler uma palavra com mais de 10 letras se não digite "tem palavras maiores"
function contar(palavra) {
    if (palavra.length > 10) {
        return "uau"
    } else {
        return "tem palavras maiores"
    }
}
let palavra = prompt("Diga uma palavra")
let letras = contar(palavra)
console.log(letras)