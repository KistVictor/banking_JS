import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente()
const conta1 = new ContaCorrente()

cliente1.nome = "Victor"
cliente1.cpf = 11122233309
conta1.cliente = cliente1
conta1.agencia = 1001

//conta1.#saldo = 100 //Não funciona pois so pode ser mexido dentro da fução

const cliente2 = new Cliente()
const conta2 = new ContaCorrente()

cliente2.nome = "Alice"
cliente2.cpf = 88822233309
conta2.cliente = cliente2
conta2.agencia = 1001



conta1.depositar(500)
conta1.transferir(200, conta2)

console.log(conta1)
console.log(conta1.cliente)