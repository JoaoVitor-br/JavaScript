let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

contexto.strokeStyle = "blue"
contexto.lineWidth = 20
contexto.strokeRect(0,0,400,400)
contexto.stroke()

// -------------------------

contexto.beginPath()
contexto.fillRect(100, 100, 252,100)

// -------------------------

let progresso = document.getElementById("progresso")

function desenharBarra() {
    let barra = progresso.value
    contexto.clearRect(0,0,canvas.width,canvas.height)
    contexto.fillRect(100,100,barra,100)
    contexto.fillStyle = "red"
}
progresso.addEventListener("input",desenharBarra)
contexto.closePath()

// -------------------------

let painel = document.getElementById("painel")
let bandeira = painel.getContext("2d")

bandeira.beginPath()
bandeira.fillRect(10,10,100,80)
bandeira.fillStyle = "white"
bandeira.fill()

bandeira.beginPath()
bandeira.arc(100,100,10,0,Math.PI*2)
bandeira.fillStyle = "red"
bandeira.fill()

