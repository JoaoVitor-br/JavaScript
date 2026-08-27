let botao = document.getElementById("botao")
let texto = document.getElementById("texto")

botao.addEventListener("click", function() {
    texto.innerHTML = "você clicou no botao"
})

let mensagem = document.getElementById("mensagem")
let input = document.getElementById("input")

input.addEventListener("input", function(){
    mensagem.innerHTML = input.value
})

let classes = document.getElementById("classes")
let add = document.getElementById("add")
let remove = document.getElementById("remove")
let troca = document.getElementById("troca")

add.addEventListener("click",function(){
    classes.classList.add("personalizar1")    
})
remove.addEventListener("click",function(){
    classes.classList.remove("personalizar1")
})
troca.addEventListener("click",function(){
    classes.classList.toggle("personalizar2")
})
 
let img = document.getElementById("img")

img.addEventListener("click", function(){
    img.style.borderRadius = "50px"
})


let num1 = document.getElementById("num1")
let num2 = document.getElementById("num2")
let soma = document.getElementById("soma")
let resultado = document.getElementById("resultado")

soma.addEventListener("click", function(){
    soma = Number(num1.value) + Number(num2.value)
    resultado.innerHTML = soma
})

let input2 = document.getElementById("input2")
let texo2 = document.getElementById("texto2")

input2.addEventListener("keydown", function(event){
    if( event.key == "Enter"){
        texto2.innerHTML = input2.value
    }
})


let lista = document.getElementById("lista")
let tarefa = document.getElementById("tarefa")
let adicionar = document.getElementById("adicionar")

adicionar.addEventListener("click", function(){
    let item = document.createElement("li")
    item.innerText = tarefa.value

    lista.appendChild(item)
    tarefa.value = ""
})


let texto3 = document.querySelectorAll(".texto3")
let alterar = document.querySelector("#alterar")
alterar.addEventListener("click",function(){
    texto3.forEach(function(texto3) {
        texto3.innerHTML = "Troquei o texto"
        texto3.style.color = "red"
    })
})