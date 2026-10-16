let input = document.getElementById("input")
let resultado = document.getElementById("resultado")
let botao = document.getElementById("botao")

async function buscarPokemon(nome) {
    try{
        let resposta = await fetch("https:/pokeapi.co/api/v2/pokemon/" + nome)

        if(!resposta.ok) {
            resultado.innerHTML = "<p>pokemon não encontrado</p>"
        }
        let dados = await resposta.json() 
        resposta.innerHTML = ""
        resultado.innerHTML = ""

        let nomePokemon = document.createElement("h2")
        nomePokemon.innerHTML = dados.name

        let imagemPokemon = document.createElement("img")
        imagemPokemon.src = dados.sprites.front_default

        let tipoPokemon = document.createElement("p")
        let tipo = "Tipo: "
        for(let info of dados.types) {
            tipo += info.type.name + ""
        }
        tipoPokemon.innerHTML = tipo

        resultado.appendChild(nomePokemon)
        resultado.appendChild(imagemPokemon)
        resultado.appendChild(tipoPokemon)
    } catch (erro) {
        resultado.innerHTML= "Erro ao fazer a conexão"
    }
}
botao.addEventListener("click", function (){
    buscarPokemon(input.value)
})