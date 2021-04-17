import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"

const cliente1 = new Cliente("Victor", "03154864210")
const contaCorrente1 = new ContaCorrente(cliente1, 1001)
const contaPoupanca1 = new ContaPoupanca(50, cliente1, 1001)

console.log(contaCorrente1)
console.log(contaPoupanca1)