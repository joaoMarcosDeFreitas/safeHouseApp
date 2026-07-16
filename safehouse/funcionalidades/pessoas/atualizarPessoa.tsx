//componente para atualizar pessoa, usado separadamente para reutilzação e organização
//async define o método como assincrono
export async function AtualizarPessoa(receitas: number, despesas: number) {
    //define o corpo da requisição que é a pessoa a ser atualizada (deve ter suas chaves exatamente igual ao banco de dados)
    const pessoaNova = {
        //define o nome null pois não será atualizado
        "Nome": null,
        //define a idade null pois não será atualizado
        "Idade": null,
        //define as receitas null pois não será atualizado
        "Receitas": receitas,
        //define as despesas null pois não será atualizado
        "Despesas": despesas,
        //define se a pessoa registrada pode ou não ter receita como null pois não será atualizado
        "podeTerReceita": null
    }
}