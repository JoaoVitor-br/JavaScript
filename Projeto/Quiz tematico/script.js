let perguntas = [
    {
        titulo: "Castlevania: Symphony of the Night",
        pergunta: "Qual é a arma mais forte do jogo?",
        respostas: ["Crissaegrim", "Espada do alucart", "Blood sword", " golden knuckles"],
        correta: 0,
        cola:"1"
    },
    {
        titulo: "Castlevania: Symphony of the Night",
        pergunta: "Qual é o boss mais difícil do jogo? ",
        respostas: ["Dracula", "Galamoth ", "Legion", "doppelganger"],
        correta: 1,
        cola:"2"
    },
    {
        titulo: "Metal Gear Rising",
        pergunta: "Qual é a categoria de espada que o protagonista usa?",
        respostas: ["Lâmina de alta voltagem","Lâmina de alta velocidade","Lâmina de alta frequência","Lâmina de alta potência"],
        correta: 2,
        cola:"3"
    },
    {
        titulo: "Metal Gear Rising",
        pergunta: "Qual é o primeiro boss do jogo?",
        respostas: ["Metal gear","Monsoon","Sam","Senador Armstrong"],
        correta: 0,
        cola:"1"
    },
    {
        titulo: "Resident Evil 7",
        pergunta: "Qual é o vírus ou doença que afeta os infectados do jogo?",
        respostas: ["T-virus","Las Plaga","Ouroboros","Mofo"],
        correta: 3,
        cola:"4"
    },
    {
        titulo: "Resident Evil 7",
        pergunta: "Qual é o membro da família Baker que não foi infectado?",
        respostas: ["Jack","zoe","joe","lucas"],
        correta: 2,
        cola:"3"
    },
    {
        titulo: "Another Crab's Treasure",
        pergunta: "Qual é o objetivo pricipal dos personagens do jogo?",
        respostas: ["Manto do oceano","Tesouro da caixa de cereal","Derrotar pagouros, o Voraz","Dominar a humanidade"],
        correta: 1,
        cola:"2"
    },
    {
        titulo: "Another Crab's Treasure",
        pergunta: "Qual é o dinheiro que usa no jogo?",
        respostas: ["Areia preta","Pérolas","vitalgas","Lixo"],
        correta: 3,
        cola:"4"
    },
    {
        titulo: "Subnautica",
        pergunta: "Quão grande é a dívida do protagonista no final do jogo?",
        respostas: ["3 Trilhão","1 Milhão","1 Trilhões","500 Bilhões"],
        correta: 2,
        cola:"3"
    },
    {
        titulo: "Subnautica",
        pergunta: "Qual é a criatura que te ajuda no jogo?",
        respostas: ["Leviatã Imperatriz do mar","Papper fish","Leviata Ceifador","Peixe fofo"],
        correta: 0,
        cola:"1"
    },
]
let perguntaAtual = 0
let pontuacao = 0
function mostrarPergunta() {
    let pergunta = perguntas[perguntaAtual]

    document.getElementById("pergunta").innerText = pergunta.pergunta

    document.getElementById("titulo").innerText = pergunta.titulo

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

    document.getElementById("cola").innerText = ""

    if (perguntaAtual < perguntas.length) {
        mostrarPergunta()
        document.getElementById("resultado").innerText = ""
    } else {
        mostrarResultadoFinal()
    }
}
function mostrarResultadoFinal() {
    document.getElementById("conteiner").innerHTML = `
    <h2>Quiz Finalizado</h2>
    <p>Sua pontuação foi : ${pontuacao}</p>
    <button onclick= "location.reload()">jogar novamente</button>
    `
}
mostrarPergunta()
function mostrarCola(index) {
    let pergunta = perguntas[perguntaAtual]
    document.getElementById("cola").innerText = pergunta.cola
}