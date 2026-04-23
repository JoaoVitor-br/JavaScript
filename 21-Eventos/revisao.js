let texto = document.getElementById("texto")

function troca(){
    texto.innerText = "Outro texto"
}


// ------------------------------------
let texto2 = document.getElementById("texto2")
let botao = document.getElementById("botao")
botao.addEventListener("click",function(){
    if(texto2.innerText == "Texto do site"){
        texto2.innerText == "Outro texto 2"
    } else{
        texto2.innerText = "texto do site"
    }
})

// ------------------------------------

let clique = document.getElementById("clique")
let contador = document.getElementById("contador")
let contagem = 0
clique.addEventListener("click", function(){
    contagem++
    contador.innerText = contagem
})

let espelho = document.getElementById("espelho")
let nome = document.getElementById("nome")
nome.addEventListener("input", function(){
    espelho.innerText = nome.value

})

let input = document.getElementById("input")
input.addEventListener("focus", function(){
    input.style.outline = "none"
    input.style.border = "2px solid blue"
})
input.addEventListener("blur", function(){
    input.style.border = "2px solid black"
})

let titulo = document.getElementById("titulo")
titulo.addEventListener("mouseover", function() {
    titulo.innerText = "Você achou o texto secreto"
})
titulo.addEventListener("mouseout",function(){
    titulo.innerText = "Texto inicial"
})

//----------------------------------------

let imagem = document.getElementById("imagem")
imagem.addEventListener("mouseover",function(){
    imagem.src ="Imagens/imagesB.jpg"
})
imagem.addEventListener("mouseout",function(){
    imagem.src = "Imagens/imagesA.jpg"
})

/* Crie um texto que muda a cor de fundo para
laranja e a do texto para verde quando passa o
mouse e quando o mouse sai, destroca */
let mudar = document.getElementById("mudar")
mudar. addEventListener ("mouseover", function(){
    mudar.style.color = "green"
    mudar.style.backgroundColor ="orange"
})
mudar. addEventListener ("mouseout", function(){
    mudar.style.color = "black"
    mudar.style.backgroundColor = "white"
})