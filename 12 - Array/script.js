// Array - Vector
let frutas = ["maça","banana","laranja"]
console.log(frutas)
console.log("----------")
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log("----------")

console.log(frutas.length)

console.log(frutas[1].length)

let nome = "Juniana"
console.log (nome.length)

frutas.push("Uva")
frutas.push("Moramgo")

frutas.unshift("Abacaxi")
frutas.unshift("Manga")
console.log(frutas)

frutas.pop()
frutas.shift()

frutas.splice(1,1)

frutas[2] ="Limão"
console.log(frutas)
console.log("----------")

console.log(frutas.indexOf("Abacaxi"))
console.log(frutas.indexOf("Limão"))
console.log(frutas.indexOf("Morango"))
console.log("----------")

let amigos = ["Luana","Rebeca","Tatiane","Felipe","Ana"]
for(let e = 0; e < amigos.length;e++){
    console.log(amigos[e])
}
console.log("----------")
for(let e = 0; e < amigos.length;e++){
    if(amigo[e].length >= 6){
        console.log("O nome tem 6 letras ou mais")
    } else {
        console.log("O nome tem 5 letras ou menos")
    }
}
console.log("----------")
let alunos = []
for(let e = 0;e <5;e++){
    alunos[e] = prompt("Qual o nome do aluno?")
}
for(let e = 0;e < alunos.length; e++){
    console.log(alunos[e])
}
console.log("----------")
/* Crie um vetor de cores com 4 posições, depois coloque mais 2 valores no final, tire o primeiro e mostre com for */
let cores =["Azul", "Verme","Amarelo","Verde"]
cores.push("laranja")
cores.push("Roxo")
for(let e = 0 ;e< cores.length;e++){
    console.log(cores[e])
}
/* Crie um vetor vazio de 5 notas, peça para o usúario preencher usando for, depois em outro for, mostre apenas as notas maiores que 7*/
let notas = []
for(let i = 0;i <5;i ++){
    notas[i]= Number(prompt("Qual a nota? "))
}
for(let e = 0; e < notas.length; e++){
    if(notas[e]>7){
        console.log(notas[i])
    }
}