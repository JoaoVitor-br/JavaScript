//Estrutura Condicional Encadeada
let nota = 4
if (nota >= 7) {
    console.log("Aprovado")
} else if (nota >=5 ){
    console.log("Recuperação")
} else {
    console.log("Reprovado")
}
console.log("---------------------------------")
let idade = Number(prompt("Qual sua idade?") )
if (idade >= 0 && idade <= 12) {
console.log("Criança")
} else if (idade > 12 &&idade <= 17) {
console. log("Adolescente")
} else if (idade > 17&&idade <= 55) {
console.log("Adulto")
} else if (idade > 55 && idade <= 100){
console.log("Idoso")
} else {
console.log("Idade inválida")
}
console.log("---------------------------------")

/* Em um paaseio escolar, os alunos são separados por 
catregoria, peça a categoria do aluno e:
- Se for categoria "A", diga "Ala leste"
- Se for categoria "B", diga "Ala oeste"
- Se for categoria "C", diga "Ala sul"
- Se for categoria "D", diga "Ala norte"
Para qualquer outra categoria, diga "Categoria Inválida"*/
let categoria = prompt("Qual ala?")
if(categoria =="a"){
    console.log("Ala leste")
}else if(categoria == "b"){
    console.log("Ala Oeste")
}else if(categoria == "c"){
    console.log("Ala sul")
}else if(categoria == "d"){
    console.log("Ala norte")
}else{
    console.log("Categoria Inválida")
}
/*Peca dois numeros para o usuario e veriTique se
- o primeiro é maior que o segundo
- o segundo é maior que o primeiro
- se eles são iguais */
let numero1 = Number (prompt ("Informe o primeiro numero:") )
let numero2 = Number (prompt("Informe o segundo numero:") )
if(numero1 > numero2) {
console.log("O primeiro é maior que o segundo")
} else if (numero2 > numero1 ) {
console.log("O primeiro é maior que o primeiro")
}else {
    console.log("Eles são iguais")
}

