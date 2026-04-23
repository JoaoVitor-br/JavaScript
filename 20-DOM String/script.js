// DOM - String
let nome = "Juliana"
let maiuscula = nome.toUpperCase()
let minuscula = nome.toLowerCase()

console.log(maiuscula)
console.log(minuscula)
console.log(nome[2])

// -------------------------------- \\

function mostrar(){
    let texto = document.getElementById("texto").value
    let mn = document.getElementById("mn")
    let ms = document.getElementById("ms")
    let letras = document.getElementById("letras")

    ms.innerText = texto.toUpperCase()
    mn.innerText = texto.toLowerCase()
    letras.innerText = texto.length
    let texto2 = document.getElementById("texto")
    texto2.value = ""
}

// -------------------------------- \\

function parte() {
    let palavra = document.getElementById("palavra").value
    let resultado = document.getElementById("resultado")

    let parte = palavra.slice(0,3)
    resultado.innerText = parte

    let final = document.getElementById("final")
    final.innerText = palavra[palavra.length-1]
}


/* Crie dois inputs cada um pedindo uma palavra
para o usuário, crie um botão "juntar" que mostra
as duas palavras juntas em um p */

function juntar(){
    let parte_1 = document.getElementById("parte_1").value
    let parte_2 = document.getElementById("parte_2").value
    let juntos = document.getElementById("juntos")

    juntos.innerText = parte_1 + " " + parte_2
}