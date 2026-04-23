
//  Exercicio 01
let semana = Number(prompt("Qual e o dia da semana de hoje? "))
switch(semana){
    case 1:
        console.log("Domingo")
        break
    case 2:
        console.log("Segunda")
        break
    case 3:
        console.log("Terça")
        break
    case 4:
        console.log("Quarta")
        break
    case 5:
        console.log("Quinta")
        break
    case 6:
        console.log("Sexta")
        break
    case 7:
        console.log("sabado")
        break
    default:
        console.log("Dia invalido")
}

// Exercicio 02
let idade = Number(prompt("Quantos anos você tem? "))
switch(idade){
    case 5:
        console.log("Infantil A")
        break
    case 10:
        console.log("infantil B")
        break
    case 15:
        console.log("Juvenil A")
        break
    case 20:
        console.log("Juvenil B")
        break
    case 30:
        console.log("Adulto")
        break
    default:
        console.log("Idade invalida")
}

// Exercicio 03
let turno = prompt("Em qual turno você trabalha?(M,V e N)")
switch(turno){
    case "M":
        console.log("Bom dia")
        break
    case "V":
        console.log("Boa tarde")
        break
    case "N":
        console.log("Boa noite")
        break
    default:
        console.log("Turno invalido") 
}


// Exercicio 04
let numero = Number(prompt("Digite um número? "))
switch(numero){
    case 1:
        console.log("Ai chavinho")
        break
    case 2:
        console.log("TA! TA! TA! TAA!")
        break
    case 3:
        console.log("Pague o aluguel")
        break
    case 4:
        console.log("Conlicensinha que eu vo tomar uma cafesinho")
        break
    case 5:
        console.log("Vamos tesouro não se misture com essa gentalha")
        break
    default:
        console.log("Número invalido") 
}

// Exercicio 05
let estacao = Number(prompt("Digite o numero de uma estação"))
switch(estacao){
    case 1:
        console.log("Primavera")
        break
    case 2:
        console.log("Verão")
        break
    case 3:
        console.log("Outono")
        break
    case 4:
        console.log(" Inverno")
        break
    default:
        console.log("Estação invalida") 
}

// Exercicio 06
let num1 = Number(prompt("Digite um número: "))
let num2 = Number(prompt("Digite outro número: "))
let operacao = Number(prompt("Escolha uma operação: "))
switch(operacao){
    case 1:
        console.log("Soma: ",(num1+num2))
        break
    case 2:
        console.log("Subtrair: ",(num1-num2))
        break
    case 3:
        console.log("Multiplicar: ",(num1*num2))
        break
    case 4:
        console.log("Dividir: "(num1/num2))
        break
    default:
        console.log("Operação invalida") 
}

// Exercicio 07 
let codigo = Number(prompt("Digite o codigo do produto: "))
switch(codigo){
    case 100:
        console.log("Caneta")
        break
    case 200:
        console.log("Lápis")
        break
    case 300:
        console.log("Borracha")
        break
    case 400:
        console.log("Caderno")
        break
    default:
        console.log("Codigo invalido") 
}

// Exercicio 08 
let aviliacao = prompt("Qual aviliação você Recebeu?(A,B,C,D e F)")
switch(aviliacao){
    case "A":
        console.log("Excelente")
        break
    case "B":
        console.log("Bom")
        break
    case "C":
        console.log("Regular")
        break
    case "D":
        console.log("Ruim")
        break
    case "F":
        console.log("Reprovado")
        break
    default:
        console.log("Nota invalida") 
}

// Exercicio 09 
let acao = Number(prompt("Escolha uma ação: "))
switch(acao){
    case 1:
        console.log("Atacar")
        break
    case 2:
        console.log("Defender")
        break
    case 3:
        console.log("Curar")
        break
    case 4:
        console.log("Fugir")
        break
    default:
        console.log("Ação invalida. Você perdeu") 
}

// Exercicio 10
let convercao = Number(prompt("Para aonde pretende converter: "))
switch(convercao){
    case 1:
        console.log("Real para Dólar")
        break
    case 2:
        console.log("Dólar para Real")
        break
    case 3:
        console.log("Real para Euro")
        break
    default:
        console.log("Nota invalida")
}

// Exercicio 11 
let suporte = Number(prompt("Qual tipo de suporte você deseja: "))
switch(suporte){
    case 1:
        console.log(" Suporte Técnico")
        break
    case 2:
        console.log("Financeiro")
        break
    case 3:
        console.log("Comercial")
        break
    case 4:
        console.log("Cancelamento")
        break
    default:
        console.log("Setor inválido")
}