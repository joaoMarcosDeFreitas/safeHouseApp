//funcionalidade de requisição para registrar pessoa, serve para deixar organizado e unificado em um lugar (reaproveitável)
export async function RegistrarPessoaFunc(nome: string, idade: number, receitas: number, despesas: number) {
    //define o corpo da requisição que é a pessoa a ser registrada (deve ter suas chaves exatamente igual ao banco de dados)
    const pessoaNova = {
        //define o nome da pessoa registrada
        "Nome": nome,
        //define a idade da pessoa registrada
        "Idade": idade,
        //define as receitas da pessoa registrada
        "Receitas": receitas,
        //define as despesas da pessoa registrada
        "Despesas": despesas,
        //define se a pessoa registrada pode ou não ter receita (usar a operação já garante retorno false ou true)
        "podeTerReceita": idade >= 18
    }

    //URL do backend para requisição
    const respostaFunc = fetch("http://localhost:5004/api/pessoa", {
        //define o metodo POST
        method: "POST",
        //define o conteúdo do header (INDICA PARA O .NET QUE É UM CONTEUDO JSON)
        headers: {
            "Content-Type": "application/json"
        },
        //Torna o corpo da requisição em uma string com formatação em JSON.
        body: JSON.stringify(pessoaNova)
        });

    return respostaFunc;
}