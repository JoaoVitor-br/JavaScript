// Switch Case
let opcao = 1
switch(opcao){
    case 1:
        console.log("Cadastrar")
        break 
    case 2:
        console.log("Editar")
        break
    default:
        console.log("opção inválida")
}

console.log("------------------------------")
let usuario = prompt("qual e o seu acesso? ")
switch(acesso){
    case "admin":
        console.log("Acesso total")
        break
    case "professor":
        console.log("Pode lançar notas")
        break
    case "aluno":
        console.log("Pode visualisar")
        break
    default:
        console.log("acesso negado")
}
console.log("------------------------------")
/* Pergunte para o usuario que dia da semana e hoje, se
for quinta ou sexta, mostre "Dia de ir para o SENAI",
para qualquer outro valor, mostre "Não é dia de ir para o
SENAI" */
let dia = prompt("Que dia de semana e hoje? ")
switch(dia){
    case"quinta":
        console.log("Dia de ir para o SENAI")
        break
    case "sexta":
        console.log("Dia de ir para o SENAI")
        break
    default:
        console.log("Não é dia de ir para o SENAI")
}
console.log("------------------------------")

/* Um cardápio organiza os intens por número
- 1 = pizza
- 2 = Salada
- 3 = Macarrão
- 4 = Bebida */
let cardapio = Number(prompt("Qual e o item do cardápio vai querer? "))
switch(cardapio){
    case 1:
        console.log("Pizza")
        break
    case 2:
        console.log("Salada")
        break
    case 3:
        console.log("Macarrão")
        break
    case 4:
        console.log("Bebida")
        break
    default:
        console>log("opção Inválida")
}