/**
 *  Calculo do volume de um aquario
 * @author Thiago Nascimento
 */

const input = require ('readline-sync')

console.clear()
console.log("Calculo do volume de um aquario")

//entrada
let comprimento,largura,altura,volume

comprimento = Number(input.question('Digite o comrpimento do aquario cm: '))
largura = Number(input.question('digite a largura em cm: '))
altura = Number(input.question('digite a altura em cm : '))

//Processamento
volume=(comprimento *altura * largura)/1000

// saida
console.log(`Volume do aquario é: ${volume.toFixed(2)} Litros`)