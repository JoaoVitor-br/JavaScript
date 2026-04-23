// Exercicio 01
filme = []
for(let e = 0;e <3;e++){
    filme[e] = prompt("Qual é o seu filme prefirido?")
}
console.log(filme[1])

// Exercicio 02
let frutas = []
for(let e = 0;e <5;e++){
    frutas[e] = prompt("Nome de uma fruta: ")
}
console.log(frutas[3])

// Exercicio 03
let cores = []
for(let e = 0;e <3;e++){
    cores[e] = prompt("Uma cor plis?")
}
for(let e = 0; e < cores.length;e++){
    console.log(cores[e])
}

// Exercicio 04
let numeros = []
for(let e = 0;e <4;e++){
    numeros[e] = prompt("Digite um numero:")
}
numeros.shift()
for(let e = 0; e < numeros.length;e++){
    console.log(numeros[e])
}

// Exercicio 05
let cidades =[]
for(let e = 0;e <2;e++){
    cidades[e] = prompt("Digite o nome de uma cidade:")
}
cidades.unshift("Mogi")
for(let e = 0; e < cidades.length;e++){
    console.log(cidades[e])
}

// Exercicio 06
let animais = []
for(let e = 0;e <3;e++){
    animais[e] = prompt("Que animal de estimação você tem?")
}
animais.pop()
for(let e = 0; e < animais.length;e++){
    console.log(animais[e])
}

// Exercicio 07
let carros = []
for(let e = 0;e <4;e++){
    carros[e] = prompt("Qual carro você tem?")
}
carros.length()

// Exercicio 08
let num = []
for(let e = 0;e <4;e++){
    num[e] = prompt("Adicione um numero?")
}
num.push(45)
num.shift()
num.pop()
for(let e = 0; e < num.length;e++){
    console.log(num[e])
}
num.length()

// Exercicio 09
let nada = []
for (let e = 0; e<6;e++){
    nada[e] = prompt("Adiciona algo ai: ")
}
for(let e = 0; e < num.length;e++){
    console.log(num[e])
}