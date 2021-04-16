import { Cliente } from "./Cliente.js"

export class ContaCorrente{
    agencia
    _cliente

    set cliente(novoValor){                     //Proteção do _cliente. Só pode receber instância do Cliente
        if(novoValor instanceof Cliente)
            this._cliente = novoValor
    }

    get cliente(){
        return this._cliente
    }

    _saldo = 0 //Não fica exposto fora da classe.

    get saldo(){
        return this._saldo
    }

    sacar(valor){
        if(this._saldo >= valor)
            this._saldo -= valor
            return valor
    }

    depositar(valor){

        if(valor <= 0) return
        this._saldo = this._saldo + valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }



}