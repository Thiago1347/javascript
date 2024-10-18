/**
 * Exemplo de uso da estrutura switch case 
 * @author thiago nascimento
 */

const input = require('readline-sync')

let opcao

console.clear()
console.log("BOOT")
console.log("1 , Carregar o sistea Windows")
console.log("2 ,  Carregar o sistema linux")

opcao = Number(input.question("Digite a opcao desejada:"))

switch(opcao){
    case 1:
        console.clear()
        console.log("Carregando o sistema Windows........")
        break
        case 2:
            console.clear()
            console.log("Carregando o sistema Linux.....")
            break
            default:
                console.log("Opção invalida")
}