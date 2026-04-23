let titulo = document.getElementById("titulo")
function mudarTexto() {
    titulo.innerText = "Você clicou no botão"
    titulo.style.color = "blue"
}
let mensagem = document.getElementById("mensagem")
function sadacao() {
    let nome = document.getElementById("nome").value
    mensagem.innerText = "Olá" + nome
}
// -------------------------------

const texto = document.getElementById("texto")
function sumir(){
    if(texto.style.display == "none"){
        texto.style.display = "block" 
    } else {
        texto.style.display = "none"
    }
}
let teto = document.getElementById("textoMudado")
function mundandoDeCor(){
    teto.style.color= "green"
    teto.style.backgroundColor = "pink"
}