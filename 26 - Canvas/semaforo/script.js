let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

function semaforo(){
    contexto.fillStyle= "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 35, 0, Math.PI*2)
    contexto.fillStyle = "darkred"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 190, 35, 0, Math.PI*2)
    contexto.fillStyle = "olive"
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 280, 35, 0, Math.PI*2)
    contexto.fillStyle = "darkgreen"
    contexto.fill()
}
semaforo()

let acesso = "vermelho"

function novoSemaforo() {
    contexto.fillStyle= "black"
    contexto.fillRect(150, 50, 100, 280)

    contexto.beginPath()
    contexto.arc(200, 100, 35, 0, Math.PI*2)
    if(acesso == "vermelho"){
        contexto.fillStyle = "red"
    } else {
    contexto.fillStyle = "darkred"
    }
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 190, 35, 0, Math.PI*2)
    if(acesso == "amarelo") {
        contexto.fillStyle = "gold"
    } else {
    contexto.fillStyle = "olive"
    }
    contexto.fill()

    contexto.beginPath()
    contexto.arc(200, 280, 35, 0, Math.PI*2)
    if (acesso == "verde"){
        contexto.fillStyle = "lightgreen"
    } else {
    contexto.fillStyle = "darkgreen"
    }
    contexto.fill()
}
function proximaLuz() {
    if (acesso == "vermelho"){
        acesso = "verde"
    } else if(acesso == "verde"){
        acesso = "amarelo"
    } else {
        acesso = "vermelho"
    }

    novoSemaforo()
}

setInterval(proximaLuz, 2000)
let troca = document.getElementById("troca")
troca.addEventListener("click", proximaLuz)
