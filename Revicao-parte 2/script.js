// Laço de repetição 
// While

let numero = 1
while (numero <= 5) {
    console.log(numero)
    numero++
}
let numero2 = 10 
while(numero2 >= 1){
    console.log(numero2)
    numero2 -= 2
}
// let palavra = "senai"
// while (palavra != "senai"){
//     console.log("Acertou")
//     palavra = prompt("Digite uma nova palavra: ")
// }

//Do....While
let num = 1
do {
    console.log(num)
    num += 1
}while(num <=5)

let dobro = 2
do {
    console.log(dobro)
    dobro *= 2
} while (dobro <= 100)

// For
for (let e = 1; e <= 5; e++){
    console.log(e)
}

// tabuada
let num1 = 5
for (let e = 1; e <= 10; e++){
    let tabuada = num1 * e
    console.log(tabuada)
}

// ARRAY
let frutas = ["maçã", "banana", "laranja"]
//               0        1         2
// tamanho = 3
console.log(frutas[1]) // banana
console.log(frutas)

frutas.pop()// remove o último elemento do array
console.log(frutas)

frutas.push("uva")// adiciona um elemento no final do array
console.log(frutas)

frutas.shift()// remove o primeiro elemento do array
console.log(frutas)

frutas.unshift("morango")// adiciona um elemento no início do array
console.log(frutas)

console.log(frutas.length) //mede o tamanho do array

console.log(frutas.includes("uva")) // verifica se o elemento está no array

console.log(frutas.indexOf("uva"))// retorna a posição do elemento no array

console.log(frutas.reverse())// inverte a ordem do array