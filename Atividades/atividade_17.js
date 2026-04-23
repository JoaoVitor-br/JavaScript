
// Exercicio 01
let textoMudado = document.getElementById("textoMudado")
function MudarTexto() {
    textoMudado.innerText = "Aprendendo DOM com JavaScript"
}

// Exercicio 02
let boasVinda = document.getElementById("boasVindas")
function bemVindo() {
    let nome = document.getElementById("nomeA").value
    boasVinda.innerText = "Bem-vindo ao sistema, " + nome
}

// Exercicio 03
let fraseMudada = document.getElementById("fraseMudada")
function mudarFrase() {
    fraseMudada.innerText = "Manipulando HTML com JavaScript"
}

// Exercicio 04
let introducao = document.getElementById("introducao")
function introdusir() {
    let nome = document.getElementById("pergunta").value
    introducao.innerText = "Olá, " + nome
}

// Exercicio 05
let todo = document.getElementById("todo")
function darkMode() {
    todo.style.backgroundColor = "black"
    todo.style.color = "white"
}

// Exercicio 06
let resultado = document.getElementById("resultado")
function verificarNota() {
    let nota = document.getElementById("nota").value
    if (nota >= 7) {
        resultado.innerText = "Aluno aprovado"
    } else {
        resultado.innerText = "Aluno reprovado"
    }
}

// Exercicio 07
function surpresa() {
    let textSurpresa = document.getElementById("textSurpresa")
    textSurpresa.innerText = "Você encontrou a mensagem secreta!"
}

// Exercicio 08
function destacarTexto() {
    let textDestaque = document.getElementById("textDestaque")
    textDestaque.style.fontWeight = "bold"
    textDestaque.style.color = "red"
}

// Exercicio 09
function verificar(){
    let textTamanho = document.getElementById("textTamanho").value
    let textMostrando = document.getElementById("textMostrando")

    textMostrando.innerText = "Você digitou "+(textTamanho.length)+" caracteres"

}

// Exercicio 10
function mudarCor(){
    let texto = document.getElementById("textColorido")
    texto.style.color = "blue"
}

// Exercicio 11
function esconderTexto(){
    let texto = document.getElementById("textSumido")
    texto.style.display = "none"
    
}

// Exercicio 12
function vidaMes(){
    let ano = document.getElementById("ano").value
    let tempoVida = document.getElementById("tempoVida")
    tempoVida.innerText = "Você já viveu "+(ano*12)+" meses"
}

// Exercicio 13
function verificarIdade() {
    let idade = document.getElementById("idade").value
    let analise = document.getElementById("analise")
    if( idade >= 18){
        analise.innerText = "Você é maior de idade"
    } else {
        analise.innerText = "Você é menor de idade"
    }
}
