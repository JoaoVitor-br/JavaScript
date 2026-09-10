// Operadores Aritiméticos
// Atividade 01
let comprimento = Number(prompt("Qual o comprimento da figura: "))
let largura = Number(prompt("Qual a largura da fugura"))
let area = comprimento * largura
console.log("A area da figura é ", area)

// Atividade 02
let metade_dobro = Number(prompt("Digite um numero"))
let dobro = metade_dobro*2
let metade = metade_dobro/2
console.log("O dobro é: ",dobro," e a metade é ",metade)

// Atividade 03
let media_numero1 = Number(prompt("Digite um numero: "))
let media_numero2 = Number(prompt("Digite um outro numero: "))
let media_numero3 = Number(prompt("Digite mais um outro numero: "))
let media = (media_numero1 + media_numero2 + media_numero3)/3
console.log("A media é", media)

// Atividade 04
let temp = Number(prompt("Qual a temperatura de agora: "))
let far = (temp * 9/5) + 32
console.log("Isso em Fahrenheit é: ",far)

// Operadores Relacionais
// Atividade 01
let num1 = Number(prompt("Digite o primeiro número: "))
let num2 = Number(prompt("Digite o segundo número: "))
console.log("O primeiro número é maior que o segundo " + num1 > num2)
console.log("O primeiro número é menor que o segundo " + num1 < num2)
console.log("Os números são iguais " + num1 === num2)

// Atividade 02
let idade = Number(prompt("Qual a sua idade: "))
console.log("Você é maior de idade" +idade >= 18)
console.log("Você é idoso "+idade >= 60)

// Estrutura Condicional
// Atividade 01

let idade2 = Number(prompt("Qual a sua idade: "))
if (idade2 >= 18){
    console.log("Você é maior de idade")
} else if(idade2 < 18){
    console.log("Você não é maior de idade")
}

// Atividade 02
let nota1 = Number(prompt("Digite a primeira nota: "))
let nota2 = Number(prompt("Digite a segunda nota: "))
let media2 = (nota1 + nota2)/2
if(media2 >= 7){
    console.log("Aprovado")
} else{
    console.log("Reprovado")
}

// Atividade 03
let temp = Number(prompt("Qual a temperatura de agora: "))
if(temp >= 30){
    console.log("Está carlor")
} else{
    console.log("Não está carlor")
}

// Atividade 04
let idade3 = Number(prompt("Qual a sua idade: "))
if(idade3 < 12){
    console.log("Criança")
} else if(idade3 >= 12 && idade3 < 18){
    console.log("Adolescente")
} else if(idade3 >= 18 && idade3 < 60){
    console.log("Adulto")
} else if(idade3 >= 60){
    console.log("Idoso")
} else {
    console.log("Idade inválida")
}

// Atividade 05
let nota3 = Number(prompt("Digite a sua nota: "))
if (nota3 >= 90){
    console.log("A")
} else if (nota3 >= 80){
    console.log("B")
} else if (nota3 >= 70){
    console.log("C")
} else if (nota3 >= 60){
    console.log("D")
} else if (nota3 < 60){
    console.log("F")
}

// Atividade 06
let pista_tamanho = Number(prompt("Qual o tamanho da pista: "))
if (pista_tamanho < 400){
    console.log("Pista curta")
} else if (pista_tamanho < 800){
    console.log("Pista média")
} else if (pista_tamanho < 1500){
    console.log("Pista longa")
} else if (pista_tamanho >= 1500){
    console.log("Pista muito longa")
}

// Atividade 07
let pontos = Number(prompt("Quantos pontos você tem: "))
if (pontos < 1000){
    console.log("Iniciante")
} else if (pontos < 5000){
    console.log("Intermediário")
} else if (pontos < 10000){
    console.log("Avançado")
} else {
    console.log("Mestre")
}

// Operadores Lógicos
// Atividade 01
let AnosImpresa = Number(prompt("Quantos anos a empresa tem: "))
let projetos = Number(prompt("Quantos projetos a empresa tem: "))
if (AnosImpresa >= 5 && projetos >= 10){
    console.log("Você está elegível para promoção")
} else {
    console.log("Você não está elegível para promoção")
}

// Atividade 02
let idade4 = Number(prompt("Qual a sua idade: "))
if (idade4 >= 18 && idade4 <= 30){
    console.log("Você pode entrar no evento")
} else {
    console.log("Você não pode entrar no evento")
}

// Atividade 03
let usuario = prompt("Digite o seu usuário: ")
let senha = prompt("Digite a sua senha: ")
if (usuario === "admin" && senha === "1234"){
    console.log("Login bem-sucedido")
} else {
    console.log("Nome de usuário ou senha incorretos")
}

// Atividade 04
let numero = Number(prompt("Digite um número: "))
if (numero >= 10 && numero <= 20){
    console.log("O número está dentro do intervalo entre 10 e 20")
}else if (numero >= 30 && numero <= 50){
    console.log("O número está dentro do intervalo entre 30 e 50")
}else {
    console.log("ele não está dentro do intervalo de 10 e 20, nem 30 e 50")
}

//Estrutura Condicional
// Atividade 01
let numSemana = Number(prompt("Digite um número de 1 a 7: "))
switch(numSemana){
    case 1:
        console.log("Domingo")
        break;
    case 2:
        console.log("Segunda-feira")
        break;
    case 3:
        console.log("Terça-feira")
        break;
    case 4:
        console.log("Quarta-feira")
        break;
    case 5:
        console.log("Quinta-feira")
        break;
    case 6:
        console.log("Sexta-feira")
        break;
    case 7:
        console.log("Sábado")
        break;
    default:
        console.log("Número inválido. Insira um valor entre 1 e 7")
}

// Atividade 02
let  idade5 = Number(prompt("Qual a sua idade:"))
switch(idade5){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("Infantil A")
        break;
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
        console.log("Infantil B")
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
        console.log("Juvenil A")
        break;
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log("Juvenil B")
        break;
    case 21:
    case 22:
    case 23:
    case 24:
    case 25:
    case 26:
    case 27:
    case 28:
    case 29:
    case 30:
        console.log("Adulto")
        break;
    default:
        console.log("Idade inválida. Insira uma idade entre 5 e 30 anos")
}

// Atividade 03
let periodo = prompt("Digite o período do dia (M, V ou N): ")
switch(periodo.toUpperCase()){
    case "M":
        console.log("Bom dia!")
        break;
    case "V":
        console.log("Boa tarde!")
        break;
    case "N":
        console.log("Boa noite!")
        break;
    default:
        console.log("Turno inválido. Insira M, V ou N.")
}

// Atividade 04
let estacao = prompt("Digite a estação do ano (1, 2, 3 ou 4): ")
switch(estacao){
    case 1:
        console.log("Primavera")
        break;
    case 2:
        console.log("Verão")
        break;
    case 3:
        console.log("Outono")
        break;
    case 4: 
        console.log("Inverno")
        break;
    default:
        console.log("Estação inválida. Insira um número de 1 a 4.")
}