// Exercício 01
let itens = document.querySelectorAll(".item");
let troca = document.querySelector("#troca");

itens.forEach(function (item) {
    troca.addEventListener("click", function () {
        item.classList.toggle("troca")
    });
});


// Exercício 02
let caixado = document.querySelectorAll(".caixa");
let botao = document.querySelector("#caixa");

caixado.forEach(function (caixa) {
    botao.addEventListener("click", function () {
        caixa.classList.toggle("ativo")
    });
});

// Exercício 03
let divs = document.querySelectorAll("div");
let botaoEx3 = document.querySelector("#botaoEx3");

divs.forEach(function (caixa) {
    botaoEx3.addEventListener("click", function () {
        caixa.classList.toggle("tudo")
        console.log("clicou")
    });
});
// Exercício 04
let divsEx4 = document.querySelectorAll("div");
divsEx4.forEach(function (div) {
    div.addEventListener("click", function () {
        // Exercício 05
        div.classList.toggle("rosa")
    });
});

// Exercício 06-7
let divsEx6 = document.querySelectorAll("div");
let botaoEx6 = document.querySelector("#botaoEx6");
botaoEx6.addEventListener("click", function () {
    divsEx6.forEach(function (div) {
        div.classList.toggle("destaque")
    });
});

// Exercício 08
let divsEx8 = document.querySelectorAll(".bloco");
let bloco01 = document.querySelector("#bloco01");
let bloco02 = document.querySelector("#bloco02");
let bloco03 = document.querySelector("#bloco03");
let bloco04 = document.querySelector("#bloco04");
bloco01.addEventListener("click", function () {
    bloco01.classList.add("ativo")
    bloco01.classList.remove("rosa")
    bloco02.classList.remove("ativo", "rosa")
    bloco03.classList.remove("ativo", "rosa")
    bloco04.classList.remove("ativo", "rosa")
});
bloco02.addEventListener("click", function () {
    bloco02.classList.add("ativo")
    bloco02.classList.remove("rosa")
    bloco01.classList.remove("ativo", "rosa")
    bloco03.classList.remove("ativo", "rosa")
    bloco04.classList.remove("ativo", "rosa")
});
bloco03.addEventListener("click", function () {
    bloco03.classList.add("ativo")
    bloco03.classList.remove("rosa")
    bloco01.classList.remove("ativo", "rosa")
    bloco02.classList.remove("ativo", "rosa")
    bloco04.classList.remove("ativo", "rosa")
});
bloco04.addEventListener("click", function () {
    bloco04.classList.add("ativo")
    bloco04.classList.remove("rosa")
    bloco02.classList.remove("ativo", "rosa")
    bloco03.classList.remove("ativo", "rosa")
    bloco01.classList.remove("ativo", "rosa")
});
let menu = document.querySelectorAll("#menu");
let item = document.querySelectorAll(".itemMenu");
item.forEach(function (item1) {
    item1.addEventListener("click", function () {
        item.forEach(function (item2) {
            item2.classList.remove("ativo")
        });
        item1.classList.add("ativo")

    });
});