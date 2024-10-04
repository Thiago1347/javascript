/**
 *  PDV
 *  @author Thiago Nascimento
 */

const input = require ('readline-sync')

let total , desconto, totaldesconto, valordesconto, valorpago, troco

console.clear()


console.log("_____    _______          __")
console.log("|  __ \\  |  __  \\ \\ \\    / /")
console.log("| |__) | | |  | |  \\ \\  / / ")
console.log("|  ___/  | |  | |   \\ \\/ /  ")
console.log("| |      | |__| |    \\  /   ")
console.log("|_|      |_____/      \\/    ")
                       
  
 
//entrada1
total = Number(input.question("Digite o valor total da compra: "))
desconto = Number(input.question("digite o valor do desconto em %: "))

//processamneto 1
valordesconto = (desconto * total) /100

//processamento 2
totaldesconto = total - valordesconto 

//saida1
console.log("")
console.log("---------------------------------------------------")
console.log(`Total : R$ ${total.toFixed(2)}`)
console.log(`desconto : ${desconto}%`)
console.log(`valor do desconto: R$ ${valordesconto.toFixed(2)}`)
console.log(`total do desconto: R$ ${totaldesconto.toFixed(2)}`)

//entrada 2
valorpago = Number(input.question("valor em dinheiro pago pelo cliente: "))

//processamento
troco = valorpago - totaldesconto

//saida  2

console.log("")
console.log(`valor pago em dinehiro: R$ ${valorpago.toFixed(2)}`)
console.log(`troco ${troco.toFixed(2)}`)
console.log("---------------------------------------------------")
