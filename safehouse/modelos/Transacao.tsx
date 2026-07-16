//componente: Interface de transação, ela dita os atributos da transação. 
export interface Transacao {
    //id pode ser nulo por falta de transações
    id?: number,
    //nome pode ser nulo por falta de transações
    nome?: string,
    //descricao pode ser nulo por falta de transações
    descricao?: string,
    //valor pode ser nulo por falta de transações
    valor?: number,
    //tipo pode ser nulo por falta de transações
    tipo?: string,
    //id da pessoa pode ser nulo por falta de transações
    pessoaId?: number
}