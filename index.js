import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./Conta/ContaCorrente.js"
import {ContaPoupanca} from "./Conta/ContaPoupanca.js"
import {Gerente} from "./Funcionarios/Gerente.js"
import {Diretor} from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Roberto", 10000, 12356486321)
diretor.cadastrarSenha("123")
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123")

const cliente = new Cliente("Victor", 12356486321, "123")
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "123")

console.log(clienteEstaLogado)
console.log(cliente)
console.log(diretor) 