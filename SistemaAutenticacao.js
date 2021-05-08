export class SistemaAutenticacao{

    static login(autenticavel, senha){
        if(SistemaAutenticacao.ehAutenticavel(autenticavel))
            return autenticavel.autenticar(senha)
        return false
    }

    static ehAutenticavel(autenticavel){
        return "autenticar" in autenticavel &&          //Verificando se dentro da classe autenticavel (cliente ou funcionario) há alguma instacia de autenticar
        autenticavel.autenticar instanceof Function     // e se é um método
    }
}