// Exercicio 01
function arredondar(){
    let numeroArredondo = document.getElementById("numeroArredondo").value
    let resultadoRedondo = document.getElementById("resultadoRedondo")

    resultadoRedondo.innerText = "O número é " + Math.round(numeroArredondo)
}

// Exercicio 02
function arredondarBaixo(){
    let numeroBaixo = document.getElementById("numeroBaixo").value
    let resultadoBaixo = document.getElementById("resultadoBaixo")

    resultadoBaixo.innerText = "O número é " + Math.floor(numeroBaixo)
}

// Exercicio 03 
function arredondarCima(){
    let numeroCima = document.getElementById("numeroCima").value
    let resultadoCima = document.getElementById("resultadoCima")

    resultadoCima.innerText = "O número é "+ Math.ceil(numeroCima)
}

// Exercicio 04 
function calcularRaiz(){
    let numeroRaiz = document.getElementById("numeroRaiz").value
    let resultadoRaiz = document.getElementById("resultadoRaiz")

    resultadoRaiz.innerText = "A raiz é " + Math.sqrt(numeroRaiz)
}

// Execicio 05
function calcularPortencia(){
    let base = document.getElementById("base").value
    let expoente = document.getElementById("expoente").value
    let resultadoPotente = document.getElementById("resultadoPotente")

    resultadoPotente.innerText = Math.pow(base,expoente)
}

// Exercicio 06
function maiorNumero(){
    let numeroMaior1 = document.getElementById("numeroMaior1").value
    let numeroMaior2 = document.getElementById("numeroMaior2").value
    let numeroMaior3 = document.getElementById("numeroMaior3").value
    let resultadoMaior = document.getElementById("resultadoMaior")

    resultadoMaior.innerText = Math.max(numeroMaior1,numeroMaior2,numeroMaior3)
}

// Exercicio 07 
function menorNumero(){
    let numeroMenor1 = document.getElementById("numeroMenor1").value
    let numeroMenor2 = document.getElementById("numeroMenor2").value
    let numeroMenor3 = document.getElementById("numeroMenor3").value
    let resultadoMenor = document.getElementById("resultadoMenor")

    resultadoMenor.innerText = Math.min(numeroMenor1,numeroMenor2,numeroMenor3)
}

// Exercicio 08
function sortearNumero(){
    let resultadoAleatorio = document.getElementById("resultadoAleatorio")
 
    resultadoAleatorio.innerText = Math.round(Math.random() * 10)
}

// Exercicio 09
function jogarDado(){
    let ladoDado = document.getElementById("ladoDado")
    
    ladoDado.innerText = Math.floor(Math.random()*6)+1
}