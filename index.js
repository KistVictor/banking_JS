import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
const cliente2 = new Cliente()
const ContaCorrenteVictor = new ContaCorrente()

cliente1.nome = "Victor"
cliente1.cpf = 11122233309

cliente2.nome = "Alice"
cliente2.cpf = 88822233309

ContaCorrenteVictor.agencia = 1001
//ContaCorrenteVictor.#saldo = 100 //Não funciona pois so pode ser mexido dentro da fução
ContaCorrenteVictor.depositar(-100)
console.log(ContaCorrenteVictor)