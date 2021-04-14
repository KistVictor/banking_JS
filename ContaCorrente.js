export class ContaCorrente{
    agencia
    #saldo = 0 //Não fica exposto fora da classe.

    sacar(valor){
        if(this.#saldo >= valor)
            this.#saldo -= valor
            return valor
    }

    depositar(valor){

        if(valor <= 0) return

        this.#saldo += valor;
    }





}