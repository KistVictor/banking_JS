import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Victor", "03154864210")
const conta1 = new ContaCorrente(cliente1, 1001)

//conta1.#saldo = 100 //Não funciona pois so pode ser mexido dentro da fução

const cliente2 = new Cliente("Alice", 88822233309)
const conta2 = new ContaCorrente(cliente2, 1001)

console.log(conta2)
console.log(conta2.cliente)