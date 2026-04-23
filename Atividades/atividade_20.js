// Exercicio 01
let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    texto.innerText = "Você clicou no balão"
})

// Exericio 02
let body = document.getElementById("body")
let mudaFundo = document.getElementById("mudaFundo")
mudaFundo.addEventListener("click", function(){
    body.style.backgroundColor = "black"
    body.style.color ="white"
})

//  Exercicio 03 
let placar = document.getElementById("placar")
let contador = document.getElementById("contador")
let numero = 0
contador.addEventListener("click", function(){
    numero ++
    placar.innerText = numero
})

// Exercicio 04
let sumido = document.getElementById("sumido")
let sumir = document.getElementById("sumir")
sumir.addEventListener("click",function(){
    sumido.innerText = ""
})