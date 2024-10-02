/**
 *  Calculo da regra de 3
 *  @author Thiago Nascimento
 */

const input = require ('readline-sync')

console.clear()
console.log(" Regra de 3 ")
console.log("x% de y = valor")

//variaveis
let  x,y ,valor

//entrada 
x= Number(input.question(" Digite o valor de X: "))
y = Number (input. question ("Digite o valor de Y :"))

//processamento
valor = (x * y) /100


//saida 

console.log(`${x}% de ${y} e igual a ${valor.toFixed(1)}`)
