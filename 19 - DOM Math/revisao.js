function arredondar(){
let numero = document.getElementById("numero").value
let round = document.getElementById("round")
let ceil = document.getElementById("ceil")
let floor = document.getElementById("floor")

round.innerText = "Justo "+ Math.round(numero)
ceil.innerText = "Para cima " + Math.ceil(numero)
floor.innerText = "Para baixo" + Math.floor(numero)
}

function calcular(){
    let valor = document.getElementById("valor").value
    let potencia = document.getElementById("potencia")
    let resultado = document.getElementById("resultado")
    resultado.innerText = Math.pow(valor,potencia)
}

function raizQuadrada(){
    let raiz = document.getElementById("raiz").value
    let resposta = document.getElementById("resposta")
    resposta.innerText = Math.sqrt(raiz)
}

// Max e Min - Maior e Menor número
console.log(Math.max(5,32,12,41,11,9))
console.log(Math.min(5,32,12,41,11,9))

//Número Aleatório
console.log(Math.random()) // entre 0 e 1
console.log(Math.random() * 10) // entre 0 e 10
console.log(Math.round(Math.random() * 69))

// 1 a 10
console.log(Math.floor(Math.random()*10)+1)

