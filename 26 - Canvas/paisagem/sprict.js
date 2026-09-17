let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

// pintando o ceu
contexto.fillStyle = "lightcyan"
contexto.fillRect(0,0, canvas.clientWidth, canvas.height)

// chão
contexto.beginPath()
contexto.fillStyle = "green"
contexto.fillRect(0,300, canvas.clientWidth,100)

//sol
contexto.beginPath()
contexto.arc(300,100, 40, 0, Math.PI*2)
contexto.fillStyle = "gold"
contexto.fillStyle()

//montanha - linhas retas
contexto.beginPath()
contexto.moveTo(50,300) // onde a linha vai começar, posição inicial
contexto.lineTo(150,150)
contexto.lineTo(250,300)
contexto.closePath
contexto.clo
