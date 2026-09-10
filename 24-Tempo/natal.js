function contarDias() {
    let hoje = new Date()
    let dezembro = document.getElementById("dezembro")
    console.log(hoje)

    let natal = new Date(2026, 11, 25) // 25/12/2026
    //os meses são de 0 a 11

    // calcular a diferença dos dias
    // 1s -> 1000
    let diferenca = natal - hoje
    console.log(diferenca)
    //milisegundos -> segundos -> minutos -> horas -> dias

    //converter os valores
    let dias = Math.floor(diferenca/1000/60/60/24)
    console.log(dias)

    // horas restantes
    let horas = Math.floor(diferenca/1000/60/60) % 24
    console.log(horas)

    // minutos restantes
    let minutos = Math.floor(diferenca/1000/60) % 60
    console.log(minutos)

    // segundos restantes
    let segundos = Math.floor(diferenca/1000) % 60
    console.log(segundos)

    dezembro.innerText = dias + " dias " + horas  + " horas "+ minutos + " minutos " + segundos + " segundos"
}
setInterval(contarDias, 1000)
