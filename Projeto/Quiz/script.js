let perguntas = [
    {
        pergunta: "Qual o nome da nossa Escola?",
        respostas: ["Luis Eulalio de Bueno Vidigal Filho", "Calvim Damasco Rodoviario", "Jorge", " Licurgo Orival Umbelino Cafiaspirino de Oliveira"],
        correta: 0
    },
    {
        pergunta: "Qual o nome do diretor da escola? ",
        respostas: ["Santos", "Moraes", "Sanches", "Willian"],
        correta: 3
    },
    {
        pergunta: "Em que ano começou o primeiro técnmico em Desenvolvimento de Sistemas",
        respostas: ["2020", "2021", "2022", "2023"],
        correta: 3
    },
]
let perguntaAtual = 0
let pontuacao = 0
function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]

    document.getElementById("pergunta").innerText = pergunta.pergunta

    let respostasDiv = document.getElementById("respostas")

    respostasDiv.innerHTML = ""
    pergunta.respostas.forEach(function (resposta, index) {
        respostasDiv.innerHTML += `<button onClick="verificarResposta(${index})">${resposta}</button>`
    })
}
function verificarResposta(index) {
    let pergunta = perguntas[perguntaAtual]

    let resultado = document.getElementById("resultado")
        
    if (index == pergunta.correta) {
        resultado.innerText = "Acertou"
        pontuacao++
    } else {
        resultado.innerText = "Errou"
    }
}
function proximaPergunta() {
    perguntaAtual++
    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText=""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal(){
    document.getElementById("conteiner").innerHTML = `
    <h2>Quiz Finalizado</h2>
    <p>Sua pontuação foi : ${pontuacao}</p>
    <button onclick= "location.reload()">jogar novamente</button>
    `
}
mostrarPergunta()