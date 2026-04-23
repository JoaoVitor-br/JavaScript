// Exercicio 01
function mensagemInicial(){
    console.log("Aprendendo funções com JS")
}
mensagemInicial()

// Exercicio 02
function boasVindas(){
    console.log("Desenvolvimento de Sistemas!")
}
boasVindas()
boasVindas()

// Exercicio 03
function contarAteDez(){
    for(let e =1; e<=10;e++){
        console.log(e)
    }
}
contarAteDez()

// Exercicio 04
function contagemRegressiva(){
    for(let e =10; e>=1;e--){
        console.log(e)
    }
}
contagemRegressiva()

// Exercicio 05
function mensagemRepetida(){
    for(let e = 1; e<=5;e++){
        console.log("Eu gosto de JavaScript")
    }
}
mensagemInicial()

// Exercicio 06
function numerosPares(){
    for(let e = 0; e<=20;e++){
       let par = e%2==0 ? e : "-"
       console.log(par)
    }
}
numerosPares()

// Exercicio 07
function tabuadaDoDois(){
    for(let e = 1; e <= 10; e++){
        console.log(e*18)
    }
}
tabuadaDoDois()

// Exercicio 08
function mostrarSoma(){
    let num1 = Number(prompt("Qual o primeiro número: "))
    let num2 = Number(prompt("Qual o segundo número: "))
    console.log(num1+num2)
}
mostrarSoma()

// Exercicio 09
function alertaSistema(){
    console.log("Atenção! Verifique as informações")
}
alertaSistema()
alertaSistema()
alertaSistema()

// Exercicio 10
function mensagem1(){
    console.log("Um dia vou conseguir terminar silksong")
}
function mensagem2(){
    console.log("Gravity falls e legal")
}
function mensagem3(){
    console.log("Preciso ler call of cthulhu")
}
mensagem1()
mensagem2()
mensagem3()

// Exercicio 11
function somandocinco(){
    let num
    let soma = 0
    for(let e = 1 ; e <= 5 ; e++){
        num = Number(prompt("Digite um numero: "))
        soma = num + soma
    }
}
somandocinco()

// Exercicio 12 
function aumento(){
    let salario = Number(prompt("Qual e o seu salario? "))
    let aumento = salario <= 3100 ? (salario+500): "Não tera aumento"
    console.log(aumento)
}
aumento()

// Exercicio 13
function calculoMedia(){
    let nota1 = Number(prompt("Digite a primeira nota: "))
    let nota2 = Number(prompt("Digite a segunda nota: "))
    let media = (nota1 + nota2)/2
    if(media >= 6){
        console.log("Aprovado")
    }else if(media >= 5){
        console.log("Recuperação")
    }else{
        console.log("Reprovado")
    }
}
calculoMedia()

// Execicio 14
function avaliacaoNotas(){
    let nota = Number(prompt("Qual e a sua nota?"))
    let avaliando = nota >= 9 ? "Exelente" : nota == 8 ? "Otima" : nota >= 6 ? "Bom" : nota == 5 ? "Regular" : "Ruim"
    console.log(avaliando)
}
avaliacaoNotas()