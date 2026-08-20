// Funções de texto

let nome = "Juliana"
console.log(nome.length) //length = tamanho

//Minúsculas e maiúsculas
let frase = "  Hoje é Sexta  "
console.log(frase)
console.log(frase.toUpperCase()) //toUpperCase = maiúsculas
console.log(frase.toLowerCase()) //toLowerCase = minúsculas
console.log(frase.trim())

console.log("------------------")

// Substituir palavras
let frase2 = "Hoje o dia está bonito"
let palavrasAntiga = "bonito"
let palavrasNova = "lindo"
console.log(frase2.replace(palavrasAntiga,palavrasNova))

//Verifica se essa existe
let buscar = "dia"
console.log(frase2.includes(buscar))

console.log("------------------")

let palavra = "Senai"
//             01234
console.log(palavra.charAt(2))

console.log("------------------")

//que letra está nessa posição
let texto = "Eu gosto de bolo"
console.log(texto.split(" "))

console.log("------------------")

//Math
//números aleatorio
console.log(Math.ramdom())
//número aleatório entre 0 e 1
console.log(Math.ramdom() + 1)
//número aleatório entre 1 e 2

let n1 = Math.random() * 5
console.log(n1)



// Arredondar
let n3 = 5.3
console.log(Math.ceil(numero)) // cima
console.log(Math.floor(numero))// baixo
console.log(Math.round(numero))// justo

console.log("------------------")

// Raiz quadrada
console.log(Math.sqrt(25)) // 5
//potencia
console.log(Math.pow(2, 4))

//Função Declarativa
function escola() {
    console.log("Luis Eulalilo de Bueno Vidigal")
}
function soma() {
    let num1 = 5
    let num2 =7
    consol.log(num1 + num2)
}
escola()
soma()

function idade(nascimento){
    let anos = 2026-nascimento
    console.log("Você tem ", anos)
}
// idade(2008)
// let valor = Number(prompt("Qual ano voce nasceu?"))
// idade(valor)
