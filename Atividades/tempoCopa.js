function contarDias() {
    let hoje = new Date()
    let copa = document.getElementById("copa")
    console.log(hoje)
    let dia = document.getElementById("dia")
    let mes = document.getElementById("mes")
    let ano = document.getElementById("ano")
    let hora = document.getElementById("hora")
    let minuto = document.getElementById("minuto")
    let segundo = document.getElementById("segundo")

    let jogo = new Date(2030, 5, 8) // 08/05/2030
    //os meses são de 0 a 11

    // calcular a diferença dos dias
    // 1s -> 1000
    let diferenca = jogo - hoje
    console.log(diferenca)
    //milisegundos -> segundos -> minutos -> horas -> dias

    //converter os valores

    let anos = Math.floor(diferenca/1000/60/60/24/30/12)

    let meses = Math.floor(diferenca/1000/60/60/24/30) %12

    let dias = Math.floor(diferenca/1000/60/60/24) % 30
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

    dia.innerText = dias
    mes.innerText = meses
    ano.innerText = anos
    hora.innerText = horas
    minuto.innerText = minutos
    segundo.innerText = segundos
}
setInterval(contarDias, 1000)