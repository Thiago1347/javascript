/**
 * assincronismo
 * Promise
 * @author Thiago Nascimento
 */

const input = require('readline-sync')
let login, senha

// estrutura de dados (simular um banco de dados)
const database = {
    admin: {
        usuario: "administrador",
        senha: "password"
    },
    prof: {
        usuario: "Leandro Ramos",
        senha: "123456"
    }
}

// Autenticação de usuario
console.clear()
console.log("---------------------")
console.log(" USUARIO")
console.log("---------------------")
login = input.question("login: ")
senha = input.question("senha:")
console.log("---------------------")

function logar(login, senha) {
    //uso de promise (acesso ao banco de dados)
    return new Promise((resolv, reject) => {
        // simulação de delay no acesso ao banco
        setTimeout(() => {
            if (database.hasOwnProperty(login)) {
                // verifique se a senha está correta
                if (database[login].senha === senha) {
                    resolv("autenticação bem sucedida. Olá," + database[login].usuario)
                } else {
                    reject("Senha incorreta. Por favor tente novamente.")
                }
            }else{
                reject("Usuario não encotrado. Por favor verifique o login")

            }
        }, 2000)
    })
} 

// executar a função logar
// no uso do promise é necessario usar o .then
logar(login,senha)
    .then((menssage) => {
        console.log(menssage)
    })
    .catch((error) => {
        console.log("Error de autenticação. " + error)
    })