//componente: Função de busca de todas as transações, usado separadamente para reutilzação e organização
//async define o método como assincrono
export async function BuscarTodasTransacoes() {
    //usa o 'then' para aguardar o retorno que o fetch traz (nesse caso do GET o tipo é uma resposta ou seja o status da requisição, por isso podemos usar resposta.Ok())
    //a url é localhost pois é onde o backend está hospedado. O caminho é definido no projeto backend (/api/transacao)
    return fetch("http://localhost:5004/api/transacao", {
        //define o método como GET
        method: "GET",
        //define o conteúdo do header (indica ao .NET que o conteúdo é JSON)
        headers: {
            "Content-Type": "application/json"
        }
    }).then(resposta => { //o 'then' é usado para esperar a requisição ocorrer, e ai sim processar sua resposa. o parâmetro resposta serve para lidar com a resposta
        //verifica se a resposa foi ok ou se deu erro
        if(!resposta.ok) {
            //alerta na tela indicando que deu errado
            alert("Erro ao buscar todas as transações.");
        }

        //retorna o JSON de resposta que a função fetch busca (ESTE RETORNO É DO FETCH E NÃO DA FUNÇÃO ASSINCRONA PRINCIPAL)
        return resposta.json();
    });
}