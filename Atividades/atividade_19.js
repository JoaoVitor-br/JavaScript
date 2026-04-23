// Exercicio 01 
function converter(){
    let nomeEx01 = document.getElementById("nomeEx01").value
    let minusculo = document.getElementById("minusculo")

    minusculo.innerText = nomeEx01.toLowerCase()
}

// Exercicio 02
function contarLetras(){
    let nomeEx02 = document.getElementById("nomeEx02").value
    let contagem = document.getElementById("contagem")

    contagem.innerText = nomeEx02.length
}

// Exercicio 03
function mostrarUltima(){
    let palavra = document.getElementById("palavra").value
    let ultimaLetra = document.getElementById("ultimaLetra")

    ultimaLetra.innerText = palavra[palavra.length-1]
}

// Exercicio 04
function quatroPrimeiras(){
    let palavraEx04 = document.getElementById("palavraEx04").value
    let selecao = document.getElementById("selecao")

    selecao.innerText = palavraEx04.slice(0,4)
}

// Exercicio 05
function tresUltimas(){
    let palavraEx05 = document.getElementById("palavraEx05").value
    let mostrar = document.getElementById("mostrar")

    mostrar.innerText = palavraEx05.slice(palavraEx05.length-3,palavraEx05.length)
}

// Exercicio 06
function nomeCompleto(){
    let nomeEx06 = document.getElementById("nomeEx06").value
    let sobreNome = document.getElementById("sobreNome").value
    let mostrarNome = document.getElementById("mostrarNome")

    mostrarNome.innerText = nomeEx06 + " " + sobreNome
}

// Exercicio 07
function primeiraLetra(){
    let nomeEx07 = document.getElementById("nomeEx07").value
    let mostrando = document.getElementById("mostrando")

    mostrando.innerText = nomeEx07[0]
}

// Exercicio 08
function apresentando(){
    let nomeEx08 = document.getElementById("nomeEx08").value
    let mostre = document.getElementById("mostre")

    mostre.innerText = "Olá, "+nomeEx08.toUpperCase()+"! Seja bem-vinda ao sistema."
}

// Exercicio 09
function apresentando(){
    let nomeEx09 = document.getElementById("nomeEx09").value
    let resultado = document.getElementById("resultado")

    if(nomeEx09.length <= 5){
        resultado.innerText = "Nome curto"
    } else {
        resultado.innerText = "Nome longo"
    }
}