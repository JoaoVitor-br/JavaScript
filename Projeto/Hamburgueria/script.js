const reserva = document.getElementById("reserva");
const reservaBtn = document.getElementById("reservaBtn");
const fecharReserva = document.getElementById("fecharReserva");
const formReserva = document.getElementById("formReserva");
const mensagemReserva = document.getElementById("mensagemReserva");

function abrirPopUp() {
    reserva.classList.add("ativo");
    reserva.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
    document.getElementById("nome").focus();
}

function fecharPopUp() {
    reserva.classList.remove("ativo");
    reserva.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    mensagemReserva.textContent = "";
}

reservaBtn.addEventListener("click", abrirPopUp);
fecharReserva.addEventListener("click", fecharPopUp);

formReserva.addEventListener("submit", function(event) {
    event.preventDefault();
    mensagemReserva.textContent = "Reserva enviada! Entraremos em contato pelo e-mail informado.";
    setTimeout(fecharPopUp, 1400);
    formReserva.reset();
});

let imagens = document.querySelectorAll(".img")
let indice = 0

function mostrarImagem() {
    imagens.forEach(function (img) {
        img.classList.remove("ativa")
    })
    imagens[indice].classList.add("ativa")
}
function avancarAutmatico(){
    indice++
    if(indice >= imagens.length){
        indice =0
    }
    mostrarImagem()
}
setInterval(avancarAutmatico,3000)