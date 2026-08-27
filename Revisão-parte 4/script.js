// Função Anônima e Arrow function

// function saudacao(nome){
//     console.log("oi "+ nome)
// }
// saudacao("Jhon")

//Função Anônima e Arrow function
let saudacao = function () {
    console.log("oi")
}
// let saudacao = console.log("oi")
console.log(saudacao())

// Pedir dois número e mostrar a soma
let soma = function (n1, n2) {
    return n1 + n2
}
console.log(soma(3, 9))

//perguntar quantos anos tem e mostra quantos dias viveu
let viveu = function (anos) {
    return anos * 365
}
// let anos = Number(prompt("Quantos anos você tem? "))
// console.log(viveu(anos))

//Arrow Function
let saudacao1 = (nome) => {
    console.log("oi " + nome)
}
saudacao1("jhonny")

//Multiplicar dois numeros
let mult = (n1, n2) => {
    return n1 * n2
}
console.log(mult(4, 6))

/* Crie um função e calculo de hora extra,
pergunte quantas horas extras o funcionario fez, se
ele fez menos que 10 horas extras ele deve ganhar R$ 20 reais por hora extra,
 se ele fez mais, deve ganha R$15 reais por hora extra */

let extra = (horas) => {
    if (horas <= 10) {
        return horas * 20
    } else {
        return horas * 15
    }
}
//  let horas = Number(prompt("Quantas horas trabalhou?"))
//  console.log(extra(horas))

//DOM - Manipulação
let texto = document.getElementById("texto")
//          noHTML.PegueoElementoPeloID
function troca() {
    texto.innerText = "Hoje é quinta"
}
function cor() {
    if (texto.style.backgroundColor == "orange") {
        texto.style.backgroundColor = "white"
        texto.style.color = "black"
    } else {
        texto.style.backgroundColor = "orange"
        texto.style.color = "red"
    }
}
function aumentar() {
    texto.style.fontSize = "50px"
}
function diminuir() {
    texto.style.fontSize = "16px"
}

let num = 0
let zero = document.getElementById("zero")
function mais() {
    num++
    zero.innerText = num
}
function menos() {
    num--
    zero.innerText = num
}
function zerar() {
    num = 0
    zero.innerText = num
}