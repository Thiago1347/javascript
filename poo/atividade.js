

/**
 * Atividade POO
 * @author Thiago Nascimento
 */

    class Carro {
    // Atributos
    constructor(modelo, ano, cor) {
        this.modelo = modelo
        this.ano = ano
        this.cor = cor
    }
    // Ações
    criarCarro() {
        console.log(`Carro criado: ${this.modelo}, ${this.ano}, ${this.cor}`)
    }
    // Método para ligar o carro
    ligar() {
        console.log("O carro está ligado.");
    }
    // Método para desligar o carro
    desligar() {
        console.log("O carro está desligado.");
    }
    // Método para acelerar o carro
    acelera() {
        console.log("O carro está acelerando.");
    }
}

class Modelo extends Carro {
    // Atributos
    constructor(modelo, ano, cor) {
        super(modelo, ano, cor)
    
    }
    // Ações
    criarAviao() {
        console.log(`Avião criado: ${this.modelo}, ${this.cor}, ${this.ano}`)
    }
    aterrizar() {
        console.log("Avião Aterrizando")
    }
    // Polimorfismo
    acelera() {
        console.log("Avião decolando!!!!");
    }
}

/** Criar dois objetos (carros) */
console.clear()

console.log(" .---.   .--.  .----. .----.   .----. ")
console.log("/  ___} / {} \ | {}  }| {}  } /  {}  \ ")
console.log("\     }/  /\  \| .-. \| .-. \ \      /")
console.log(" `---' `-'  `-'`-' `-'`-' `-'  `----'  ")





// Instanciar um objeto
const carro1 = new Carro("Honda Civic", 2008, "Branco")
carro1.criarCarro()
carro1.ligar()
carro1.acelera()
carro1.desligar()
console.log("---------------------------------------")

const carro2 = new Carro("Urus", 2022, "Roxo")
carro2.criarCarro()
carro2.ligar()
carro2.acelera()
console.log("tutututuu")
carro2.desligar()


 
console.log("")

console.log("  .--.  .-. .-..-.  .--.   .----. ")
console.log(" / {} \ | | | || | / {} \ /  {}  \ ")
console.log("/  /\  \\ \_/ /| |/  /\  \\      /")
console.log("`-'  `-' `---' `-'`-'  `-' `----' ")


// Instanciar um objeto
const aviao1 = new Modelo("Phenom 300", "Branco", 2008)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelera()
console.log("---------------------------------------")

const aviao2 = new Modelo("Cessna 206", "branco", 1962)
aviao2.criarAviao()
aviao2.aterrizar()
aviao2.acelera()
console.log("---------------------------------------")
