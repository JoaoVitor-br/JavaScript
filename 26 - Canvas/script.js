let canvas = document.getElementById("canvas")
let contexto = canvas.getContext("2d")

contexto.fillStyle = "black" // pintar o quandrado
// contexto.fillRect(100,100,100,80)
// contexto.strokeRect(100,100,100,80)

// circulo
contexto.beginPath() // inicia um novo desenho
contexto.fillStyle = "papayawhip"
contexto.arc(200,200, 80 ,0, Math.PI*2) //x,y, raio,ângulo
contexto.fill() // pinta (poe a cor no circulo)

// olho
contexto.beginPath()
contexto.arc(170,180,10,0, Math.PI*2)
contexto.fillStyle = "black"
contexto.fill()

contexto.beginPath()
contexto.arc(200,180,10,0, Math.PI*2)
contexto.fillStyle = "black"
contexto.fill()

// boca
contexto.beginPath()
contexto.arc(185,200,25,0, Math.PI)
contexto.fillStyle = "black"
contexto.fill()
