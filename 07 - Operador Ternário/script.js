    
let situacao
let  idade = 18
if (idade >= 18){
    situacao = "Maior de idade"
}else {
    situacao = "Menor de idade"
}
console.log(situacao)
console.log("-----------------------")

let idade2 = 15
let situacao2 = idade >=18 ? "Maior de idade":"Menor de idade"
console.log(situacao2)
console.log("-----------------------")

let nota = Number(prompt("Qual sua nota? "))
let resultado = nota >= 7 ? "Você passou" : "Você foi reprovado"
console.log(resultado)
console.log("-----------------------")

let acesso = prompt("Qual seu acesso?")
let entrada = acesso == "admin" ? "Acesso total" :acesso == "prof" ? "pode lançar notas" : "apenas leitura"
console.log("-----------------------")

/* Peça uma temperatura para o usúario, se ela for maoir ou igual a 30, mostre 
"Está calor", senão, "não está calor"*/

let temp = Number(prompt("Quantos graus está? "))
let calor = temp >= 30 ? "Carlores" : "Não a Carlores"
console.log(calor)
console.log("-----------------------")

/*peça um numero para o usuario e diga se ele é positivo, negativo ou se é zero*/

let num1 = Number(prompt("Digite um número: "))
let polu = num1 > 0 ? "Positivo" : num1 < 0 ? "Negativo" : "Zero"
console.log(polu)
console.log("-----------------------")

/* Peça uma media para  o usuário e classifique :
- Exelente, para media maior ou igual a 9
- Bom, para média maior ou igual a 7
- Regular, para média maior ou igual a 5
- Reprovado, caso contrario */
let media = Number(prompt("Qual foi a sua media? "))
let condicao = media >= 9 ? "Exelente" : media >= 7 ? "bom" : media >= 5 ? "Regular" : "Reprovado"
console.log(condicao)