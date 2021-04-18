export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.senha == senha
    }
}