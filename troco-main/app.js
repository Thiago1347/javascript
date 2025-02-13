/**
 *   troco
 *  @author Thiago Nascimento
 */


console.clear()
console.log(" calculo do valor do desconto ")
console.log("valor pago - total = troco")

//variaveis
let valorpago ,total, troco

//entrada 
total= Number (input.question ("total da compra:"))
valorpago= Number(input.question(" valor pago:"))


//processamento
troco = valorpago - total


//saida 
console.log(` valor do troco= R$${troco.toFixed(2)}`)