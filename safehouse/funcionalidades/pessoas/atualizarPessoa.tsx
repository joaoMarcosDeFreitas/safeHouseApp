//componente: Função de registro de pessoa, usado separadamente para reutilzação e organização
//async define o método como assincrono
//os parametros servem para moldar o corpo da requisição
export async function AtualizarPessoa(receitas: number, despesas: number) {
    //define o corpo da requisição que é a pessoa a ser atualizada (deve ter suas chaves exatamente igual ao banco de dados)
    const pessoaNova = {
        //nome null pois não será atualizado
        "Nome": null,
        //idade null pois não será atualizado
        "Idade": null,
        //receitas null pois não será atualizado
        "Receitas": receitas,
        //despesas null pois não será atualizado
        "Despesas": despesas,
        //pessoa registrada pode ou não ter receita null pois não será atualizado
        "podeTerReceita": null
    }
}