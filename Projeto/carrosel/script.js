let imagens = document.querySelectorAll(".img")
let indice = 0

function mostrarImagem(){
imagens.forEach(function(img){
    img.classList.remove("ativa")
})
imagens[indice].classList.add("ativa")
}
function avancar() {
    indice++
    if(indice>= imagens.length){
        indice = 0
    }
    mostrarImagem()
}
function voltar() {
    indice--
    if(indice < 0){
        indice = imagens.length - 1
    }
    mostrarImagem()
}
