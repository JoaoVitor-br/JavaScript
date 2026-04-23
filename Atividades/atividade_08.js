

// Exercicio 01
for (let e = 1; e <= 30; e++) {
    console.log(e)
}

// Exercicio 02
for (let e = 30; e >= 1; e--) {
    console.log(e)
}
// Exercicio 03 
for (let e = 1; e <= 5; e++) {
    let media = Number(prompt("Qual O seu numero:"))
    if (media >= 50) {
        console.log("Acima da media")
    } else {
        console.log("Abaixo da media")
    }
}

// Exercicio 04
let taboada = Number(prompt("Qual taoada vc quiser"))
console.log("O resultado Final é: ", soma)
for (let e = 0; e < 0; e++) {
    let mult = taboada * e
    console.log(mult)
}

// Exercicio 05
let cancao = Number(prompt("Quer tocar quantas vezes"))
if (cancao > 0) {
    for (let e = cancao; e > 0; e--) {
        console.log(e, " patinhos foram passear",
            "Além das montanhas para brincar ",
            "A mamãe gritou: ",
            "Quá, quá, quá, quá ",
            "Mas só ", (e - 1), " patinhos voltaram de lá./n")
    }
} else {
    console.log("Valor invalido")
}

// Exercicio 06
for (let e = 1; e <= 10; e++) {
    let idade = Number(prompt("Qual e a sua idade?: "))
    if (idade >= 18) {
        console.log("Maior de idade")
    } else {
        console.log("Menor de idade")
    }
}

// Exercicio 07 
for (let e = 1; e <= 5; e++) {
    let voto = Number(prompt("Em quem voce vai votar?: "))
    switch (voto) {
        case 1:
        case 2:
        case 3:
        case 4:
            console.log("Voce votou em alguem :D")
            break
        case 5:
            console.log("Voce votou nulo")
            break
        case 6:
            console.log("Voce votou em branco.")
            break
        default:
            console.log("Voto invalido")
    }
}

// Exercicio 08 
let soma = 0
for (let e = 1; e <= 3; e++) {
    let numero = Number(prompt("Digite um numero"))
    soma = soma + numero
    console.log(soma)
}

// Exercicio 09
for (let e = 0; e <= 50; e++) {
    if (e % 2 == 0) {
        console.log(e)
    }
}

// Exercicio 10
let inicio = Number(prompt("Quando acaba? "))
let fim = Number(prompt("Quando termina? "))
if (inicio < fim) {
    for (let e = inicio; e <= fim; e++) {
        console.log(e)
    }
}