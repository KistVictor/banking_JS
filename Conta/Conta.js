export class Conta{
    constructor(saldoInicial, cliente, agencia){
        if(this.constructor == Conta)
            throw new Error("Você não deveria instaciar um objeto do tipo conta diretamente, pois é uma classe abstrata")
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(novoValor){                     //Proteção do _cliente. Só pode receber instância do Cliente
        if(novoValor instanceof Cliente)
            this._cliente = novoValor
    }

    get cliente(){
        return this._cliente
    }

    get saldo(){
        return this._saldo
    }

    sacar(valor){ //Método abstrato
        throw new Error("O método Sacar da conta é abstrato")
    }

    _sacar(valor, taxa){
        const valorSacado = valor*taxa
        if(this._saldo >= valorSacado)
            this._saldo -= valorSacado
            return valorSacado
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