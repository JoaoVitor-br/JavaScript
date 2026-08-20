// função anonima
// Atividade 01
let mensagem = function () {
    console.log("Mensagem")
}
mensagem()

// Atividade02
let dobro = function(num) {
    return num*2
}
let num = Number(prompt("Digite um numero"))
dobro(num)

// Atividade03
let media = function(num1,num2,num3){
    return (num1+num2+num3)/3
}
let num1 = Number(prompt("Digite um numero"))
let num2 = Number(prompt("Digite um numero"))
let num3 = Number(prompt("Digite um numero"))
media(num1,num2,num3)

// Atividade04
let verificarSituacao = function(num) {
    if(num >= 5 || num < 7){
        return "Aprovado"
    } else if(num >= 7){
        return "Recuperação"
    } else{
        return "Reprovado"
    }
}
 num = Number(prompt("digite sua nota"))
 verificarSituacao(num)

// Atividade05 
let somar = function(num1,num2){return num1 + num2}
let subtrair = function(num1,num2){return num1 - num2}
let multiplicar = function(num1,num2){return num1 * num2}
let dividir = function(num1,num2){return num1 / num2}
num1 = Number(prompt("Digite uma numero: "))
num2 = Number(prompt("Digite outro numero: "))
somar(num1,num2)
subtrair(num1,num2)
multiplicar(num1,num2)
dividir(num1,num2)

// Arrow Funcion
// Atividade 01
let Multiplicacao = (num1,num2) =>{
    return num1*num2
}
num1 = Number(prompt("Digite uma numero: "))
num2 = Number(prompt("Digite outro numero: "))
Multiplicacao(num1,num2)
// Atividade 02
let triplo = (num) =>{return num*3}
num = Number(prompt("Digite um numero:"))
triplo(num)
// Atividade 03
let par_impar = (num) =>{
    if(num %2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}
num = Number(prompt("Digite um numero: "))
par_impar(num)

// Atividade 04
let maiorNumero = (num1,num2) =>{
    if (num1 > num2){
        return num1 + " é maior que " + num2
    } else if (num1< num2){
        return num1 + " é menor que " + num2
    } else {
        return "Eles são iguais."
    }
}

// Atividae 05
let mais_menos_zero = (num) => {
    if(num > 0 ){
        return "Positivo"
    } else if(num < 0 ){
        return "Negativo"
    } else {
        return "Zero"
    }
}

// DOM - Manipulação 
// Atividade 01
let  texto = document.getElementById("texto")
function trocar () {
    texto.innerText = "Texto alterado com JS"
}

// Atividade 02
let div = document.getElementById("div")
function personalizar () {
    div.style.backgroundColor = "red"
}

// Atividade 03
let titulo = document.getElementById("titulo")
let texto2 = document.getElementById("macos")

function alterar () {
    titulo.style.fontSize = "35px"
    titulo.style.color = "green"
    texto2.style.fontSize = "20px"
    texto2.style.color = "blue"
}

// Atividade 04
let div2 = document.getElementById("div2")
let texto3 = document.getElementById("texto3")
function sumidao () {
    if(texto3 == ""){
        texto3.innerText = "Pato maloqueiro🦆🔥"
    } else{
        texto3.innerText = ""
    }
}

// Atividade 05
let protocolo = document.getElementById("protocolo")
function atualizar() {
    if(protocolo.innerText == "Sistema inicializando Protocolo S-0 ligado"){
        protocolo.innerHTML = "Erro, erro, erro, religando. Protocolo S-1, iniciando Metalcalipse"
    } else {
        protocolo.innerHTML = "Sistema inicializando Protocolo S-0 ligado"
    }
}

// ATividade 06