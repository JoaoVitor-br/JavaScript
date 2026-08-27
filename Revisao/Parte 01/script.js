// Variáriaveis
let variavel = "senai"
var variavel2 = 10
const CONSTANTE = 3.14

console.log(variavel)
console.log(variavel2)
console.log(CONSTANTE)

console.log("-------------------------------")

// Operadores Aritméticos
// + Adição - Subtração * Multiplicação 
// / Divisão % Módulo ** Exponenciação

// console.log("soma: " + (10 + 5))
// console.log("subtração: " + (10 - 5))
// console.log("multiplicação: " + (10 * 5))
// console.log("divisão: " + (10 / 5))
// console.log("Resto da divisão: " + (10 % 5))
// console.log("exponenciação: " + (10 ** 2))

// console.log("-------------------------------")

// Operadores de Atribuição
// = Atribuição += Adição e Atribuição -= Subtração e Atribuição 
// *= Multiplicação e Atribuição /= Divisão e Atribuição %= Módulo e Atribuição

// Operadores de Comparação
// == Igual a != Diferente de === Estritamente igual a !== Estritamente diferente de
// > Maior que < Menor que >= Maior ou igual a <= Menor ou igual a

// Operadores Lógicos
// && E -> tudo precisa ser verdadeiro
// || OU -> apenas um precisa ser verdadeiro

console.log(5 > 3 && 10 < 2)// false
console.log(5 > 3 || 10 < 2)// true
console.log(5 > 3 && 10 < 2 || 5 > 3 && 10 > 2)

console.log("-------------------------------")

// Estruturas condicionais
// if (condição) {
if (5 > 3) {
console.log("Maior")
} else{
    console.log("Menor")
}
if (10 == 2){
    console.log("Igual")
} else{
    console.log("Diferente")
}
// switch case
let opcao = 1
switch (opcao) {
    case 1:
        console.log("Numero 1")
        break;
    case 2:
        console.log("Numero 2")
        break;
    default:
        console.log("Outro numero")
        break;
}
let opcao2 = 3
switch (opcao2) {
    case 1:
    case 7:
        console.log("Fim de semana")
        break;
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        console.log("Dia de semana")
        break;
    default:
        console.log("Outro numero")
        break;
}