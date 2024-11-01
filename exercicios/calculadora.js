/**
 * Desenvolvimento de uma calculadora 
 * @author Thiago Nascimento
 */

const input = require('readline-sync')

let a , b, opcao 

do{
console.clear()
console.log(" _____     _         _       _             ")
console.log("|     |___| |___ _ _| |___ _| |___ ___ ___ ")
console.log("|   --| .'| |  _| | | | .'| . | . |  _| .'|")
console.log("|_____|__,|_|___|___|_|__,|___|___|_| |__,|")

function somar(a, b){
    return (console.log(`A soma de: ${a} +${b} = ${a + b}`))
}

function subtrair(a, b){
    return (console.log (`A subtracao de: ${a} - ${b} = ${a - b}`))
}

function multiplicar(a, b){
    return (console.log (`A Multiplicaçao de: ${a} * ${b} = ${a * b}`))
}

function dividir(a, b){
    return (console.log (`A divisão de: ${a} / ${b} = ${a / b}`))
}

function porcentagem(a, b){
    return (console.log (`A porcentagem de: ${a} % ${b} = ${(b * a) /100}`))
}

a = Number (input.question("Digite o primeiro numero: "))
b = Number (input.question("Digite o segundo numero: "))

console.log("")
console.log("1. somar")
console.log("2.subtrair")
console.log("3. Multiplicar")
console.log("4. dividir")
console.log("5. Calcular a %")
opcao = Number(input.question("Digite a opcao desejada: "))




switch (opcao) {
    case 1:
        somar(a,b)
        break
case 2:
    subtrair(a,b)
    break
case 3:
    multiplicar(a,b)
    break
case 4:
    dividir(a,b)
    break
case 5:
    porcentagem(a,b) 
    break
    default:
        console.log("Opcao inavlida")
        break;
}
} while (opcao = input.question("Deseja Calcular Novamente (s/n) ")) 



