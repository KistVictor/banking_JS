class Cliente{
    nome;
    cpf;
}

class ContaCorrente{
    agencia;
    saldo;

    sacar(valor){
        if(this.saldo >= valor)
            this.saldo -= valor
    }

    depositar(valor){
        if(valor > 0){
            this.saldo += valor;
        }
    }





}

const cliente1 = new Cliente();
const cliente2 = new Cliente();

cliente1.nome = "Victor";
cliente1.cpf = 11122233309;
cliente1.agencia = 1001;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 88822233309;
cliente2.agencia = 1001;
cliente2.saldo = 0;

console.log(cliente1, cliente2);