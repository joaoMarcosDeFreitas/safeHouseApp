//componente: Função de registro de pessoa, usado separadamente para reutilzação e organização
//funções
//importa a busca de pessoa
import { BuscarPessoa } from "../pessoas/buscarPessoa";

//async define o método como assincrono
//os parametros servem para moldar o corpo da requisição
export async function AtualizarPessoa(pessoaId: number, tipo: string, valor: number) {
    //busca a pessoa para verificar seu valor de despesa ou receita e somar com a nova transacao
    const pessoaEscolhida = await BuscarPessoa(pessoaId);

    //inicializa a variavel que serve como molde para enviar a atualização
    var pessoaNova;

    //define o corpo da requisição que é a pessoa a ser atualizada (deve ter suas chaves exatamente igual ao banco de dados). Primeiro verifica qual o tipo de transação
    if (tipo.toLowerCase().trim() === "receita") {
        pessoaNova = {
            //valor generico pois nao sera atualizado
            "Nome": "",
            //valor generico pois nao sera atualizado
            "Idade": 0,
            //receitas recebe o valor somado ao que estava antes
            "Receitas": pessoaEscolhida.receitas + valor,
            //valor generico pois nao sera atualizado
            "Despesas": pessoaEscolhida.despesas,
            //valor generico pois nao sera atualizado
            "podeTerReceita": false
        }
    } else {
        pessoaNova = {
            //valor generico pois nao sera atualizado
            "Nome": "",
            //valor generico pois nao sera atualizado
            "Idade": 0,
            //valor generico pois nao sera atualizado
            "Receitas": pessoaEscolhida.receitas,
            //despesas recebe o valor somado ao que estava antes
            "Despesas": pessoaEscolhida.despesas + valor,
            //valor generico pois nao sera atualizado
            "podeTerReceita": false
        }
    }
    

    //usa o 'then' para aguardar o retorno que o fetch traz (nesse caso do POST o tipo é uma resposta ou seja o status da requisição, por isso podemos usar resposta.Ok())
    //a url é localhost pois é onde o backend está hospedado. O caminho é definido no projeto backend (/api/pessoa)
    fetch(`http://localhost:5004/api/pessoa/${pessoaId}`, {
        //define o metodo PUT
        method: "PUT",
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
            alert("Pessoa atualizada com sucesso!");
        } else {
            //alerta na tela indicando que deu errado
            alert("Erro ao atualizar pessoa, tente novamente.");
        }
    });
}