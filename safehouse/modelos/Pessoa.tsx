//exporta a interface de pessoa, ela dita como pessoa deve ser passada (seus atributos)
export interface Pessoa {
    //id pode ser nulo por falta de usuários
    id?: number,
    //nome pode ser nulo por falta de usuários
    nome?: string,
    //idade pode ser nulo por falta de usuários
    idade?: number,
    //receitas pode ser nulo por falta de usuários
    receitas?: number,
    //despesas pode ser nulo por falta de usuários
    despesas?: number,
    //pode ter receita pode ser nulo por falta de usuários
    podeTerReceita?: boolean
}