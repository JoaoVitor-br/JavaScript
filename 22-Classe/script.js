let texto = document.getElementById("texto")
let botao = document.getElementById("botao")
let remover = document.getElementById("Remover")
let alternar = document.getElementById("alternar")
botao.addEventListener("click", function(){
    // texto.style.backgroundColor = "red"
    texto.classList.add("troca")
})
remover.addEventListener("click",function(){
    texto.classList.remove("troca")
})
alternar.addEventListener("click",function(){
    texto.classList.toggle("troca")
})