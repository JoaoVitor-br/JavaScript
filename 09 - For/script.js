// Laço de Repetição - For
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")
console.log("Bom dia")

for (let i = 0; i< 4;i++){
    console.log("Bom dia")
}
for(let e = 1; e <= 5;e++) {
    console.log(e)
}
for(let e =10 ; e >=1; 1--){
    console.log(e)
}

// peça 5 numeros para o usuario e verifiquese é maior 10 ou não
for(let e = 1 ;1 <= 5;e++){
    let numero =Number(prompt("Informe um numero:"))
    if(numero>10){
        console.log("numero maior que dez")
    }else{
        console.log("não e maior que dez")
    }
}

let soma = 0
for(let e =1;e <= 3;e++){
    let numero = Number(prompt("Digite um numero"))
    soma = soma + numero
    console.log(soma)
}
let taboada = Number(prompt("Qual taoada vc quiser"))
console.log("O resultado Final é: ", soma)
for(let e = 0 ;e <0;e++){
    let mult = taboada * e
    console.log(mult)
}

/* Em um passeio escolar, um grupo de cinco alunos são organizados de acordo com o numero que receberem. Se o numero for maior ou igual a 10 diga "Grupo A",senão,diga "Grupo B"*/
for(let e = 1; e<=5;e++){
    let divicao = Number(prompt("Qual O seu numero:"))
    if(divicao >= 10){
        console.log("Grupo A")
    }else{
        console.log("Grupo B")
    }
}