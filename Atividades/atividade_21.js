//  Exercicio 01
let liga = document.getElementById("liga")
let texto = document.getElementById("texto")
let alterar = document.getElementById("alteracoes")

liga.addEventListener("click", function () {
    alterar.classList.add("ativo")
})

//  Exercicio 02
let desliga = document.getElementById("desliga")
desliga.addEventListener("click", function () {
    alterar.classList.remove("ativo")
})

// Exercicio 03
let interruptor = document.getElementById("interruptor")
interruptor.addEventListener("click", function () {
    alterar.classList.toggle("ativo")
})

// Exercicio 04
let borda = document.getElementById("borda")
borda.addEventListener("click", function () {
    alterar.classList.toggle("destaque")
})

// Exercicio 05
let creser = document.getElementById("creser")
creser.addEventListener("click", function () {
    alterar.classList.toggle("grande")
})

// Exercicio 06
let sumidao = document.getElementById("sumidao")
sumidao.addEventListener("click", function () {
    alterar.classList.toggle("sumido")
})

// Exercicio 07
let passada = document.getElementById("passada")
passada.addEventListener("mouseover", function () {
    alterar.classList.add("ativo")
})
passada.addEventListener("mouseout", function () {
    alterar.classList.remove("ativo")
})

// Exercicio 08
let botao = document.getElementById("botao")
botao.addEventListener("click", function () {
    botao.classList.toggle("destaque")
})

// Exercicio 09
let esquciDaID01 = document.getElementById("esquciDaID1")
let esquciDaID02 = document.getElementById("esquciDaID2")
let esquciDaID03 = document.getElementById("esquciDaID3")
let selecionado = document.getElementById("selecionado")
esquciDaID01.addEventListener("click", function () {
    esquciDaID01.classList.toggle("selecionar")
    esquciDaID02.classList.remove("selecionar")
    esquciDaID03.classList.remove("selecionar")
})
esquciDaID02.addEventListener("click", function () {
    esquciDaID02.classList.toggle("selecionar")
    esquciDaID03.classList.remove("selecionar")
    esquciDaID01.classList.remove("selecionar")
})
esquciDaID03.addEventListener("click", function () {
    esquciDaID03.classList.toggle("selecionar")
    esquciDaID01.classList.remove("selecionar")
    esquciDaID02.classList.remove("selecionar")
})

// Exercicio 10
let body = document.getElementById("body")
let ativar = document.getElementById("ativar")
ativar.addEventListener("click", function(){
    body.classList.toggle("dark")
    if(body.classList("dark") == true){
        ativar.innerText = "desativar"
    } else{
        ativar.innerText = "ativar"
    }
})

// Exercicio 11
let menu = document.getElementById("menu")
let mostar = document.getElementById("mostar")
mostar.addEventListener("click",function(){
    menu.classList.toggle("menu")
})

// Exercicio 12
let tela = document.getElementById("tela")
tela.addEventListener("click",function(){
    tela.classList.toggle("color")
})
tela.addEventListener("mouseover",function(){
    tela.classList.add("boder")
})
tela.addEventListener("mouseout",function(){
    tela.classList.remove("boder")
})

// Exercicio 13
let vermelho = document.getElementById("vermelho")
let azul = document.getElementById("azul")
let verde = document.getElementById("verde")
vermelho.addEventListener("click", function () {
    vermelho.classList.add("vermelho")
    azul.classList.add("vermelho")
    verde.classList.add("vermelho")
    vermelho.classList.remove("verde")
    azul.classList.remove("verde")
    verde.classList.remove("verde")
    vermelho.classList.remove("azul")
    azul.classList.remove("azul")
    verde.classList.remove("azul")
})
azul.addEventListener("click", function () {
    azul.classList.add("azul")
    verde.classList.add("azul")
    vermelho.classList.add("azul")
    vermelho.classList.remove("verde")
    azul.classList.remove("verde")
    verde.classList.remove("verde")
    vermelho.classList.remove("vermelho")
    azul.classList.remove("vermelho")
    verde.classList.remove("vermelho")
})
verde.addEventListener("click", function () {
    verde.classList.add("verde")
    vermelho.classList.add("verde")
    azul.classList.add("verde")
    vermelho.classList.remove("azul")
    azul.classList.remove("azul")
    verde.classList.remove("azul")
    vermelho.classList.remove("vermelho")
    azul.classList.remove("vermelho")
    verde.classList.remove("vermelho")
})