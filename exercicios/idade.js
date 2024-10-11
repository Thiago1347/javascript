/**
 * Verificar maioridade
 * @author Thiago Nascimento
 */

const input =require ('readline-sync')

let idade

console.clear()
console.log("Verificar maioridade")
idade = Number(input.question("Digite a idade:"))
console.log(`Idade: ${idade}`)
if (idade < 18) {
console.log("Menor de idade")
}else{
}
if(idade >= 18 ) {
console.log("Maior de idade")
}