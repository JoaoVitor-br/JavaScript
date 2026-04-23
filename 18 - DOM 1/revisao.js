let titulo = document.getElementById("titulo")

function mudar() {
    titulo.innerText = "Mudei o titulo"
    titulo.style.color = "red"
}

function saudacao(){
    let nome = document.getElementById("nome").value

    let texto = document.getElementById("texto").value
    texto.innerText = "Bom dia "+ nome
}

function situasao(){
    let nota = document.getElementById("nota").value
    let resultado = documento.getElementById("resultado")
    if(nota >6){
        resultado.innerText = "Aprovado"
    } else {
        resultado.innerText = "Reprovado" 
    }
}

let foto = document.getElementById("foto")
function sumir(){
    if (foto.style.display == "none"){
        foto.style.display = "block"
    }else {
        foto.style.display = "none"
    }
    
}