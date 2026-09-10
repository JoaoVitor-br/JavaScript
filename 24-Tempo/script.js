let agora = new Date()
console.log(agora)

let especifica = new Date(2026, 11, 10)
// 0 a 11 -> meses
// ano mês dia
console.log(especifica)

// Separa os elementos - usando os geters
console.log(agora.getFullYear()) // ano, 2026
console.log(agora.getMonth()) // Mes, 0-11
console.log(agora.getDate()) // dia, 1-31
console.log(agora.getDay) //dia da semana 0-6
// Domingo 0 - Sabado 6
console.log(agora.getHours()) // horas, 0-23
console.log(agora.getMinutes()) // minutos 0-59
console.log(agora.getSeconds())// Segundos 0-59
// HH:MM:SS 
function relogio() {
    let horario = new Date()
    let horas = horario.getHours()
    let minutos = horario.getMinutes()
    let segundos = horario.getSeconds()

    let horaForamatada = String(horas).padStart(2, "0")
    let minutoForamatada = String(minutos).padStart(2, "0")
    let segundoForamatada = String(segundos).padStart(2, "0")

    // console.log( segundoForamatada , ":",minutoForamatada,":",horaForamatada)
    tempo.innerText = horaForamatada + ":" + minutoForamatada + ":" + segundoForamatada

}
setInterval(relogio, 1000) //1000ms = 1s

//-------------------------------------
console.log("------------------------")
// simular uma contagem regeressiva de 10 min
let segundosRestantes = 1 * 60 //10 min em segundos
let temporizador
let contando
console.log(segundosRestantes)

function mostrarTempo() {
    let minutos = Math.floor(segundosRestantes / 60)
    let segundos = segundosRestantes % 60

    let horario = String(minutos).padStart(2, "0") + ":" + String(segundos).padStart(2, "0")
    contagem.innerText = horario
}
mostrarTempo()
function atualizar() {
    if (segundosRestantes >=0) {
        // clearInterval(temporizador)
        // let contagem = document.getElementById("contagem")
        // contagem.innerText = "Tempo Esgotado"
        // contando = false
        mostrarTempo()
        segundosRestantes--
    }
    else {
        clearInterval(temporizador)
        let contagem = document.getElementById("contagem")
        contagem.innerText = "Tempo Esgotado"
        contando = false
    }
    //  mostrarTempo()
    //     segundosRestantes--
}

let iniciar = document.getElementById("iniciar")
let pausar = document.getElementById("pausar")

iniciar.addEventListener("click", function() {
    if (contando) {
        return
    }
        contando = true
        temporizador = setInterval(atualizar,1000)
})
pausar.addEventListener("click", function() {
   contando = false
   clearInterval(temporizador)
   
})