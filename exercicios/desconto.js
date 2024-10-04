/**
 *  Calculo do valor do desconto
 *  @author Thiago Nascimento
 */

const input = require ('readline-sync')

console.clear()
console.log(" calculo do valor do desconto ")
console.log("x% de y = valor")

//variaveis
let totaldesconto ,desconto ,total

//entrada 
total= Number(input.question(" total da compra: "))
 desconto= Number (input.question ("Valor do desconto em % :"))

//processamento
totaldesconto= ( total- (desconto* total)/100)


//saida 
console.log(`total com desconto = ${totaldesconto}`)