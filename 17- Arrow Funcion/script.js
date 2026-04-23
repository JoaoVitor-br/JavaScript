// Arrow Funtion - Função da Seta
let somar = (n1,n2) =>{
    return n1 + n2
}
console.log(somar(1,4))
console.log("----------------------")

//Peça um número e verifeque se é positivo, negativo ou zero

let classificar = (numero) => {
    if(numero < 0){
        return "Negativo"
    } else if (numero > 0){
        return "Positivo"
    } else {
        return "zero"
    }
}
// let numero = Number(prompt("Qual o número? "))
// console.log(classificar(numero))

let imparOuPar = (num)=> {
    let aux = num % 2
    if (aux == 0){
        return "Par"
    } else {
        return "Impar"
    }
}
// let num = Number(prompt("Qual o número: "))
// console.log(imparOuPar)

/* Peça um número para o usuário, se for menor ou igual a 10, retorne (numero + 3 * 6 - 1) senão, retorne (numero / 2 + 3 * 19) */
let calculo = (numero2) => {
    if(numero2 <= 10){
        return numero2 + 3 * 6 - 1
    } else {
        return numero2 / 2 + 3 * 19
    }
}