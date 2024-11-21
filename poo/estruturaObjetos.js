/**
 * Estrutura de dados - objetos
 * @author Thiago Nascimento
 */

console.clear()

const funcionario1 = {}
console.log(typeof (funcionario1))
// adcionar dados a estruturas
funcionario1.nome = "Thiago"
funcionario1.cargo = "promotor"
funcionario1.email = "Thiagohfn2006@gmail.com"
funcionario1.salario = 5000
funcionario1.insta = "thiago.hfn"
console.log(funcionario1)
console.log(funcionario1.cargo)
//modificar os dados da estruturas 
funcionario1.nome = "Thiago Nascimento"
console.log(funcionario1)
// excluir dados da estrutura
delete funcionario1.insta
console.log(funcionario1)

const funcionario2 = {
    nome: "Clark Kent",
    cargo: "Jornalista",
    email: "superman@gmail.com",
    salario: 50000
}
console.log(funcionario2)

const endereco1 = {
    logradouro: "clarin diario",
    cidade: "smallviile",
    estado: "kansas",
}
console.log(endereco1)

//... spread operator (uniao de 2 estrutuiras de dados)
const funcionario3 = {
    nome: "Lois lane",
    cargo: "jornalista",
    email: "loislane@gmail.com",
    salario: 60000,
    ...endereco1
}
console.log(funcionario3)

const funcionario4 = {
    nome: "jonathan",
    cargo: "estudante",
    email: "ljonathan@gmail.com",
    salario: 200,
    ...endereco1
}
console.log(funcionario4)

const funcionario5 = {
    nome: "Barry Allen",
    cargo: "ivestigador florence",
    email: "barry@gmail.com",
    salario: 80000,
    amardura: {
        versao: "savitar",
        ano:2017,
        forca_de_aceleracao: "1",
    },
    suitUp: () => {
        console.log("🤖")
    }
}

console.log(funcionario5)
console.log(funcionario5.cargo)
console.log(funcionario5.amardura.versao)
funcionario5.suitUp() //executar a função unterna da estrutura 

