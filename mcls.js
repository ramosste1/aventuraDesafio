// nome, idade, tipo: mago
// além disso, deve ter um método chamado atacar que deve atender os seguientes requisitos:

// - exibir a mensagem: "o {tipo} atacou usando {ataque}")
// - aonde o {tipo} deve ser concatenando o tipo que está na propriedade da classe
// - e no {ataque} deve seguir uma descrição diferente conforme o tipo, seguindo a tabela abaixo:

// se mago -> no ataque exibir (usou magia)
// Ao final deve se exibir uma mensagem:
// - "o {tipo} atacou usando {ataque}"
// ex: mago atacou usando magia

class heroiAventureiro {
    constructor(nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }
    
    atacar(){
        console.log(`O ${this.tipo} atacou usando magia!`)
    
    }
}

let  aventura = new heroiAventureiro("Veigar", "200", "Mago")
aventura.atacar()
 

