//componente: Função de registro de pessoa, usado separadamente para reutilzação e organização
//async define o método como assincrono
//os parametros servem para moldar o corpo da requisição
export async function RegistrarPessoaFunc(nome: string, idade: number) {
    //define o corpo da requisição que é a pessoa a ser registrada (deve ter suas chaves exatamente igual ao banco de dados)
    const pessoaNova = {
        //nome da pessoa
        "Nome": nome,
        //idade da pessoa
        "Idade": idade,
        //receitas da pessoa
        "Receitas": 0,
        //despesas da pessoa
        "Despesas": 0,
        //define se a pessoa registrada pode ou não ter receita (usar a operação já garante retorno true ou false)
        "podeTerReceita": idade >= 18
    }

    //usa o 'then' para aguardar o retorno que o fetch traz (nesse caso do POST o tipo é uma resposta ou seja o status da requisição, por isso podemos usar resposta.Ok())
    //a url é localhost pois é onde o backend está hospedado. O caminho é definido no projeto backend (/api/pessoa)
    fetch("http://localhost:5004/api/pessoa", {
        //define o metodo POST
        method: "POST",
        //define o conteúdo do header (INDICA PARA O .NET QUE É UM CONTEUDO JSON)
        headers: {
            "Content-Type": "application/json"
        },
        //Torna o corpo da requisição em uma string com formatação em JSON.
        body: JSON.stringify(pessoaNova)
    }).then(resposta => { //o 'then' é usado para esperar a requisição ocorrer, e ai sim processar sua resposa. o parâmetro resposta serve para lidar com a resposta
        //verifica se a resposa foi ok ou se deu erro
        if(resposta.ok) {
            //alerta na tela indicando que deu certo
            alert("Pessoa registrada com sucesso!");
        } else {
            //alerta na tela indicando que deu errado
            alert("Erro ao registrar pessoa, tente novamente.");
        }
    });
}