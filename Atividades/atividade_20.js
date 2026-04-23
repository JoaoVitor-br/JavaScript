// Exercicio 01
let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
botao.addEventListener("click", function () {
    texto.innerText = "Você clicou no balão"
})

// Exericio 02
let body = document.getElementById("body")
let mudaFundo = document.getElementById("mudaFundo")
mudaFundo.addEventListener("click", function () {
    body.style.backgroundColor = "black"
    body.style.color = "white"
})

//  Exercicio 03 
let placar = document.getElementById("placar")
let contador = document.getElementById("contador")
let numero = 0
contador.addEventListener("click", function () {
    numero++
    placar.innerText = numero
})

// Exercicio 04
let sumido = document.getElementById("sumido")
let sumir = document.getElementById("sumir")
sumir.addEventListener("click", function () {
    sumido.innerText = ""
})

// Exercicio 05
let espelho = document.getElementById("Espelho")
let reflexo = document.getElementById("Reflexo")
let rEFLEXO = document.getElementById("REFLEXO")
let meio
espelho.addEventListener("input", function () {
    reflexo.innerText = espelho.value
    //Exericicio 06
    meio = espelho.value
    rEFLEXO.innerText = meio.toUpperCase()
})

// Exercicio 07
let contagem = document.getElementById("contagem")
let analise 
let resultado = document.getElementById("resultado")
let constatacao = document.getElementById("constatacao")// Exercicio 08
contagem.addEventListener("input", function(){
    analise = contagem.value
    resultado.innerText = analise.length
    // Exercicio 08
    if(analise.length < 5){
        constatacao.innerText = "Texto muito curto"
    }else{
        constatacao.innerText = "Texto válido"
    }
})

// Exercicio 09
let elemento = document.getElementById("elemento")
elemento.addEventListener("mouseover", function(){
    elemento.style.backgroundColor = "blue"
    elemento.style.color = "green"
})
elemento.addEventListener("mouseout", function(){
    elemento.style.backgroundColor = "white"
    elemento.style.color = "black"
})

// Exercicio 10
let botaoTrocar = document.getElementById("botaoTrocar")
let escondido = document.getElementById("escondido")
botaoTrocar.addEventListener("mouseover",function(){
    escondido.innerText = "BOOooo!!!"
})
botaoTrocar.addEventListener("mouseout",function(){
    escondido.innerText = ""
})

// Exercicio 11
let trocar = document.getElementById("trocar")
trocar.addEventListener("mouseover", function(){
    trocar.innerText = "Texto segreto uuuuuu"
})
trocar.addEventListener("mouseout", function(){
    trocar.innerText = "Texto normal"
})

