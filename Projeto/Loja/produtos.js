let produtos = [
    {id: 1,nome: "teclado gamer",preco:300, categoria:"periferico", imagem:"img/teclado.png"},
    {id: 2,nome: "controle gamer",preco:100, categoria:"periferico", imagem:"img/controle.jpg"},
    {id: 3,nome: "figure Barril de goblins",preco:250, categoria:"boneco", imagem:"img/goblingui.jpg"},
    {id: 4,nome: "figure Medeline",preco:150, categoria:"boneco", imagem:"img/celeste.png"},
    {id: 5,nome: "Thor-contos de Asgard",preco:50, categoria:"Quadrinhos", imagem:"img/hq-thor.jpg"},
    {id: 6,nome: "Jujutsu kaisen-cap 01",preco:90, categoria:"Quadrinhos", imagem:"img/manga_jjk.jpg"}
]

let vitrine = document.getElementById("produtos")
function mostrarProdutos(lista) {
    vitrine.innerHTML = ""
    if (lista.length == 0) {
        vitrine.innerText = "Nenhum produtos cadastrado"
        return
    }
    for(let produto of lista){
        let card = document.createElement("article")

        let imagem = document.createElement("img")
        imagem.src = produto.imagem
        imagem.alt = produto.nome

        let nome = document.createElement("h3")
        nome.innerText = produto.nome
        
        let preco = document.createElement("p")
        preco.innerText = produto.preco

        let adicionar = document.createElement("button")
        adicionar.innerText = "Adicionar ao carrinho"

        card.appendChild(imagem)
        card.appendChild(nome)
        card.appendChild(preco)
        card.appendChild(adicionar)
        vitrine.appendChild(card)
    }
}
mostrarProdutos(produtos)

let categoriasSelect = document.getElementById("categorias")
function carregarCategorias() {
    let categorias = []
    for(let produto of produtos){
        if(!categorias.includes(produto.categoria)) {
            categorias.push(produto.categoria)
        }
    }
    for(let categoria of categorias) {
        let  opcao = document.createElement("option")
        opcao.value = categoria
        opcao.innerText = categoria
        categoriasSelect.appendChild(opcao)
    }
}
carregarCategorias()