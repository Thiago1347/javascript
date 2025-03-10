/**
 * Fundamnetos da POO
 * Abstração, herença e polimorfismo
 * @author Thiago Nascimento
 */
console.clear()

//criando a clsse modelo
class Bloco {
    //atributos
    constructor(textura, resistencia) {
        this.textura = textura
        this.resistencia = resistencia
    }
    //métodos
    criarBloco() {
        console.log("-------------------------------------")
        console.log("┌─┐")
        console.log("└─┘")
        console.log(`Bloco de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }

    construir() {
        console.log(`Bloco de ${this.textura} colocado`)
    }

    minerar() {
        console.log("□ □ □ □ Recursos obtidos!")

    }
}

// Herança
 
class Enxada extends Bloco {
    //atributos
    constructor(textura, resistencia, conquista) {
        super(textura, resistencia) //herança
        this.conquista = conquista
    }
    criarEnxada() {
        console.log("--------------------------------------------")
        console.log("-_")
        console.log(" /")
        console.log(`Enxada de ${this.textura}`)
        console.log(`Resistencia: ${this.resistencia}`)
    }
 
    arar() {
        console.log("._._._.")
        if (this.conquista === true) {
            console.log("☀ Conquista obtida!")
        }
    }
       //Polimorfismo: Mudança de comportamento de um mtétodo que ja existe na classe pai(modelo) no exemplo Bloco
       //Atenção !!!! Obrigatorio usar o mesmo nome do método
       minerar() {
        console.log("✞ Dano atribuído!")   
       }
}
 

/***** Mundo  ******/
console.log(" _____ _____ _____ _____ _____ _____ _____ _____ _____ ")
console.log("|     |     |   | |   __|     | __  |  _  |   __|_   _|")
console.log("| | | |-   -| | | |   __|   --|    -|     |   __| | |  ")
console.log("|_|_|_|_____|_|___|_____|_____|__|__|__|__|__|    |_|  ")
console.log("")

//Instaciando (criando) um objeto
const bloco1 = new Bloco("terra",1)
bloco1.criarBloco()

const bloco2 = new Bloco("madeira",2)
bloco2.criarBloco()
bloco2.construir()

const bloco3 = new Bloco("pedra",5)
bloco3.criarBloco()
bloco3.minerar()

const enxada1 = new Enxada("madeira",2, false)
enxada1.criarEnxada()
enxada1.arar()

const enxada2 = new Enxada("ferro",5, true)
enxada2.criarEnxada()
enxada2.arar()

const enxada3 = new Enxada("diamante",10, false)
enxada3.criarEnxada()
enxada3.minerar()





