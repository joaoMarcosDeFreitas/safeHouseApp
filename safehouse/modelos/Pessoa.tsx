//componente: Interface de pessoa, ela dita os atributos da pessoa. 
export interface Pessoa {
    //id pode ser nulo por falta de pessoas
    id?: number,
    //nome pode ser nulo por falta de pessoas
    nome?: string,
    //idade pode ser nulo por falta de pessoas
    idade?: number,
    //receitas pode ser nulo por falta de pessoas
    receitas?: number,
    //despesas pode ser nulo por falta de pessoas
    despesas?: number,
    //pode ter receita pode ser nulo por falta de pessoas
    podeTerReceita?: boolean
}