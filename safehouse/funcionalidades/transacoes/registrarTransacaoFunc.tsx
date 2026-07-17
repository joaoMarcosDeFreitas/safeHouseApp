//componente: Função de registro de transação, usado separadamente para reutilzação e organização
//funções
//importa a busca de pessoa
import { BuscarPessoa } from "../pessoas/buscarPessoa";
//importa a atualização de pessoa
import { AtualizarPessoa } from "../pessoas/atualizarPessoa";

//async define o método como assincrono
//os parametros servem para moldar o corpo da requisição
export async function RegistrarTransacaoFunc(nome: string, descricao: string, valor: number, tipo: string, pessoaId: number) {
    //define o corpo da requisição que é a transação a ser registrada (deve ter suas chaves exatamente igual ao banco de dados)
    const transacaoNova = {
        //nome da transação
        "Nome": nome,
        //descrição da transação
        "Descricao": descricao,
        //valor da transação
        "Valor": valor,
        //tipo da transação
        "Tipo": tipo,
        //ID da pessoa escolhida
        "PessoaId": pessoaId,
    }

    //busca a pessoa escolhida na transação
    const pessoaEscolhida = await BuscarPessoa(pessoaId);
    //verifica com a coluna do BD se a pessoa pode ter receita
    if (!pessoaEscolhida.podeTerReceita) {
        alert("Não pode registrar transações de receita para menores de 18 anos.");
        return;
    }

    //usa o 'then' para aguardar o retorno que o fetch traz (nesse caso do POST o tipo é uma resposta ou seja o status da requisição, por isso podemos usar resposta.Ok())
    //a url é localhost pois é onde o backend está hospedado. O caminho é definido no projeto backend (/api/transacao)
    fetch("http://localhost:5004/api/transacao", {
        //define o metodo como POST
        method: "POST",
        //define o conteúdo do header (indica ao .NET que o conteúdo é JSON)
        headers: {
            "Content-Type": "application/json"
        },
        //Torna o corpo da requisição em uma string com formatação em JSON.
        body: JSON.stringify(transacaoNova)
    }).then(resposta => { //o 'then' é usado para esperar a requisição ocorrer, e ai sim processar sua resposa. o parâmetro resposta serve para lidar com a resposta
        //verifica se a resposa foi ok ou se deu erro
        if(resposta.ok) {
            //alerta na tela indicando que deu certo
            alert("Transação registrada com sucesso!");
        } else {
            //alerta na tela indicando que deu errado
            alert("Erro ao registrar transação, tente novamente.");
        }
    });

    //atualiza a pessoa com a receita/despesa atribuida na transação
    AtualizarPessoa(pessoaId, tipo.toLowerCase().trim(), valor);
}