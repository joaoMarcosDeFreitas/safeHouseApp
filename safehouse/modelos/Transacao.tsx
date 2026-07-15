//exporta a interface de transacao, ela dita como transacao deve ser passado (seus atributos)
export interface Transacao {
    //id pode ser nulo por falta de usuários
    id?: number,
    //nome pode ser nulo por falta de usuários
    nome?: string
}